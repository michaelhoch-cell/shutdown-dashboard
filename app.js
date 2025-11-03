// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

function initializeDashboard() {
    updateLastUpdatedTime();
    populateShutdownTable();
    createTimelineChart();
    createDepartmentChart();
    createDurationChart();
    createDecadeChart();
}

// Update last updated time
function updateLastUpdatedTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        timeZoneName: 'short'
    };
    document.getElementById('lastUpdated').textContent = now.toLocaleString('en-US', options);
}

// Populate the shutdown details table
function populateShutdownTable() {
    const tbody = document.getElementById('shutdownTableBody');
    
    // Sort by year descending
    const sortedData = [...shutdownData].sort((a, b) => b.year - a.year);
    
    sortedData.forEach(shutdown => {
        const row = document.createElement('tr');
        
        const formatWorkers = (workers) => {
            if (!workers) return 'N/A';
            return workers.toLocaleString();
        };
        
        row.innerHTML = `
            <td><strong>${shutdown.year}</strong></td>
            <td>${shutdown.duration}</td>
            <td>${shutdown.president}</td>
            <td>${shutdown.issue}</td>
            <td>${formatWorkers(shutdown.workersAffected)}</td>
        `;
        
        tbody.appendChild(row);
    });
}

// Create custom timeline bar chart
function createTimelineChart() {
    const container = document.getElementById('shutdownTimeline');
    const sortedData = [...shutdownData].sort((a, b) => a.year - b.year);
    const maxDuration = Math.max(...sortedData.map(s => s.duration));
    
    sortedData.forEach(shutdown => {
        const bar = document.createElement('div');
        bar.className = 'timeline-bar';
        
        // Color based on severity
        if (shutdown.duration > 20) bar.classList.add('severe');
        else if (shutdown.duration > 10) bar.classList.add('moderate');
        
        // Calculate height as percentage of max
        const heightPercent = (shutdown.duration / maxDuration) * 100;
        bar.style.height = `${heightPercent}%`;
        
        // Add label
        const label = document.createElement('div');
        label.className = 'timeline-bar-label';
        label.textContent = shutdown.year;
        bar.appendChild(label);
        
        // Add value on top
        const value = document.createElement('div');
        value.className = 'timeline-bar-value';
        value.textContent = `${shutdown.duration}d`;
        bar.appendChild(value);
        
        // Add tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'timeline-bar-tooltip';
        tooltip.innerHTML = `
            <strong>${shutdown.year}</strong><br>
            Duration: ${shutdown.duration} days<br>
            President: ${shutdown.president}<br>
            Issue: ${shutdown.issue}
        `;
        bar.appendChild(tooltip);
        
        container.appendChild(bar);
    });
}

// Create department impact horizontal bar chart
function createDepartmentChart() {
    const container = document.getElementById('departmentChart');
    const maxEmployees = Math.max(...departmentImpactData.data);
    
    const colors = [
        '#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6',
        '#ec4899', '#22c55e', '#a855f7', '#fb923c'
    ];
    
    departmentImpactData.labels.forEach((label, index) => {
        const employees = departmentImpactData.data[index];
        const widthPercent = (employees / maxEmployees) * 100;
        
        const barWrapper = document.createElement('div');
        barWrapper.className = 'department-bar';
        
        const labelDiv = document.createElement('div');
        labelDiv.className = 'department-label';
        labelDiv.textContent = label;
        
        const barContainer = document.createElement('div');
        barContainer.className = 'department-bar-container';
        
        const barFill = document.createElement('div');
        barFill.className = 'department-bar-fill';
        barFill.style.width = '0%'; // Start at 0 for animation
        barFill.style.background = colors[index];
        barFill.textContent = employees.toLocaleString();
        
        // Animate after a short delay
        setTimeout(() => {
            barFill.style.width = `${widthPercent}%`;
        }, index * 100);
        
        barContainer.appendChild(barFill);
        barWrapper.appendChild(labelDiv);
        barWrapper.appendChild(barContainer);
        container.appendChild(barWrapper);
    });
}

// Create donut chart for duration distribution
function createDurationChart() {
    const container = document.getElementById('durationChart');
    
    // Group shutdowns by duration ranges
    const ranges = {
        '1-3 days': { count: 0, color: '#3b82f6' },
        '4-7 days': { count: 0, color: '#10b981' },
        '8-14 days': { count: 0, color: '#f59e0b' },
        '15-21 days': { count: 0, color: '#f97316' },
        '22+ days': { count: 0, color: '#ef4444' }
    };
    
    shutdownData.forEach(shutdown => {
        if (shutdown.duration <= 3) ranges['1-3 days'].count++;
        else if (shutdown.duration <= 7) ranges['4-7 days'].count++;
        else if (shutdown.duration <= 14) ranges['8-14 days'].count++;
        else if (shutdown.duration <= 21) ranges['15-21 days'].count++;
        else ranges['22+ days'].count++;
    });
    
    const total = Object.values(ranges).reduce((sum, r) => sum + r.count, 0);
    
    // Create title
    const title = document.createElement('div');
    title.className = 'chart-title';
    title.textContent = 'Shutdowns by Duration';
    container.appendChild(title);
    
    // Create donut chart using SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 200 200');
    svg.classList.add('donut-chart');
    
    let currentAngle = -90; // Start at top
    
    Object.entries(ranges).forEach(([label, data]) => {
        const percentage = (data.count / total) * 100;
        const angle = (percentage / 100) * 360;
        
        const path = createDonutSegment(100, 100, 70, currentAngle, currentAngle + angle);
        const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute('d', path);
        pathElement.setAttribute('fill', 'none');
        pathElement.setAttribute('stroke', data.color);
        pathElement.setAttribute('stroke-width', '40');
        pathElement.classList.add('donut-segment');
        
        svg.appendChild(pathElement);
        currentAngle += angle;
    });
    
    container.appendChild(svg);
    
    // Create legend
    const legend = document.createElement('div');
    legend.className = 'chart-legend';
    
    Object.entries(ranges).forEach(([label, data]) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        
        const color = document.createElement('div');
        color.className = 'legend-color';
        color.style.background = data.color;
        
        const labelDiv = document.createElement('div');
        labelDiv.className = 'legend-label';
        labelDiv.textContent = label;
        
        const value = document.createElement('div');
        value.className = 'legend-value';
        value.textContent = data.count;
        
        item.appendChild(color);
        item.appendChild(labelDiv);
        item.appendChild(value);
        legend.appendChild(item);
    });
    
    container.appendChild(legend);
}

// Helper function to create donut segment path
function createDonutSegment(cx, cy, r, startAngle, endAngle) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    
    return [
        'M', start.x, start.y,
        'A', r, r, 0, largeArcFlag, 0, end.x, end.y
    ].join(' ');
}

function polarToCartesian(cx, cy, r, angle) {
    const angleInRadians = (angle - 90) * Math.PI / 180.0;
    return {
        x: cx + (r * Math.cos(angleInRadians)),
        y: cy + (r * Math.sin(angleInRadians))
    };
}

// Create decade frequency line/bar chart
function createDecadeChart() {
    const container = document.getElementById('decadeChart');
    
    // Create title
    const title = document.createElement('div');
    title.className = 'chart-title';
    title.textContent = 'Shutdown Frequency by Decade';
    container.appendChild(title);
    
    // Create chart
    const chart = document.createElement('div');
    chart.className = 'line-chart';
    
    const maxValue = Math.max(...decadeData.data);
    
    decadeData.labels.forEach((label, index) => {
        const value = decadeData.data[index];
        const heightPercent = (value / maxValue) * 100;
        
        const bar = document.createElement('div');
        bar.className = 'line-chart-bar';
        bar.style.height = `${heightPercent}%`;
        
        const valueLabel = document.createElement('div');
        valueLabel.className = 'line-chart-value';
        valueLabel.textContent = value;
        bar.appendChild(valueLabel);
        
        const labelDiv = document.createElement('div');
        labelDiv.className = 'line-chart-label';
        labelDiv.textContent = label;
        bar.appendChild(labelDiv);
        
        chart.appendChild(bar);
    });
    
    container.appendChild(chart);
}
