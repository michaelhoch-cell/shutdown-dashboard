// Additional Features JavaScript for US Government Shutdown Dashboard

// ============================================
// SEARCH AND FILTER FUNCTIONALITY
// ============================================

let filteredData = [...shutdownData];

function initializeSearchFilter() {
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const presidentFilter = document.getElementById('presidentFilter');
    const durationFilter = document.getElementById('durationFilter');
    const resetFilters = document.getElementById('resetFilters');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearSearch.style.display = this.value ? 'block' : 'none';
            applyFilters();
        });
    }
    
    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            searchInput.value = '';
            this.style.display = 'none';
            applyFilters();
        });
    }
    
    if (presidentFilter) {
        presidentFilter.addEventListener('change', applyFilters);
    }
    
    if (durationFilter) {
        durationFilter.addEventListener('change', applyFilters);
    }
    
    if (resetFilters) {
        resetFilters.addEventListener('click', function() {
            searchInput.value = '';
            presidentFilter.value = '';
            durationFilter.value = '';
            clearSearch.style.display = 'none';
            applyFilters();
        });
    }
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const president = document.getElementById('presidentFilter').value;
    const duration = document.getElementById('durationFilter').value;
    
    filteredData = shutdownData.filter(shutdown => {
        // Search filter
        const matchesSearch = !searchTerm || 
            shutdown.year.toString().includes(searchTerm) ||
            shutdown.president.toLowerCase().includes(searchTerm) ||
            shutdown.issue.toLowerCase().includes(searchTerm);
        
        // President filter
        const matchesPresident = !president || shutdown.president === president;
        
        // Duration filter
        let matchesDuration = true;
        if (duration === 'short') {
            matchesDuration = shutdown.duration <= 7;
        } else if (duration === 'medium') {
            matchesDuration = shutdown.duration > 7 && shutdown.duration <= 21;
        } else if (duration === 'long') {
            matchesDuration = shutdown.duration > 21;
        }
        
        return matchesSearch && matchesPresident && matchesDuration;
    });
    
    // Update the main shutdown table with filtered data
    updateShutdownTable();
}

function updateShutdownTable() {
    const tableBody = document.querySelector('table tbody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    filteredData.forEach(shutdown => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${shutdown.year}</strong></td>
            <td>${shutdown.duration}</td>
            <td>${shutdown.president}</td>
            <td>${shutdown.issue}</td>
            <td>${shutdown.workersAffected ? shutdown.workersAffected.toLocaleString() : 'N/A'}</td>
        `;
        tableBody.appendChild(row);
    });
}

// ============================================
// EXPORT FUNCTIONALITY
// ============================================

function initializeExport() {
    const exportCSV = document.getElementById('exportCSV');
    const exportJSON = document.getElementById('exportJSON');
    
    if (exportCSV) {
        exportCSV.addEventListener('click', exportToCSV);
    }
    
    if (exportJSON) {
        exportJSON.addEventListener('click', exportToJSON);
    }
}

function exportToCSV() {
    const headers = ['Year', 'Start Date', 'End Date', 'Duration (Days)', 'President', 'Party', 'Issue', 'Workers Affected', 'Cost'];
    const rows = shutdownData.map(shutdown => [
        shutdown.year,
        shutdown.startDate,
        shutdown.endDate,
        shutdown.duration,
        shutdown.president,
        shutdown.party,
        shutdown.issue,
        shutdown.workersAffected || 'N/A',
        shutdown.cost ? `$${shutdown.cost.toLocaleString()}` : 'N/A'
    ]);
    
    let csvContent = headers.join(',') + '\n';
    rows.forEach(row => {
        csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
    });
    
    downloadFile(csvContent, 'government-shutdowns.csv', 'text/csv');
}

function exportToJSON() {
    const jsonContent = JSON.stringify(shutdownData, null, 2);
    downloadFile(jsonContent, 'government-shutdowns.json', 'application/json');
}

function downloadFile(content, filename, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ============================================
// PRINT FUNCTIONALITY
// ============================================

function initializePrint() {
    const printBtn = document.getElementById('printView');
    
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
}

// ============================================
// SHARE FUNCTIONALITY
// ============================================

function initializeShare() {
    const shareBtn = document.getElementById('shareBtn');
    const shareModal = document.getElementById('shareModal');
    const closeShare = document.getElementById('closeShare');
    const copyLink = document.getElementById('copyLink');
    const shareLink = document.getElementById('shareLink');
    const shareTwitter = document.getElementById('shareTwitter');
    const shareLinkedIn = document.getElementById('shareLinkedIn');
    const shareEmail = document.getElementById('shareEmail');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            shareModal.style.display = 'flex';
            shareLink.value = window.location.href;
        });
    }
    
    if (closeShare) {
        closeShare.addEventListener('click', function() {
            shareModal.style.display = 'none';
        });
    }
    
    if (copyLink) {
        copyLink.addEventListener('click', function() {
            shareLink.select();
            document.execCommand('copy');
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = 'Copy';
            }, 2000);
        });
    }
    
    if (shareTwitter) {
        shareTwitter.addEventListener('click', function() {
            const text = 'Check out this comprehensive US Government Shutdown Dashboard!';
            const url = encodeURIComponent(window.location.href);
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`, '_blank');
        });
    }
    
    if (shareLinkedIn) {
        shareLinkedIn.addEventListener('click', function() {
            const url = encodeURIComponent(window.location.href);
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        });
    }
    
    if (shareEmail) {
        shareEmail.addEventListener('click', function() {
            const subject = 'US Government Shutdown Dashboard';
            const body = `Check out this comprehensive dashboard analyzing US government shutdowns:\n\n${window.location.href}`;
            window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
    
    // Close modal on outside click
    shareModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

function initializeKeyboardShortcuts() {
    const shortcutsModal = document.getElementById('shortcutsModal');
    const closeShortcuts = document.getElementById('closeShortcuts');
    
    document.addEventListener('keydown', function(e) {
        // Ignore if user is typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
            if (e.key === 'Escape') {
                e.target.blur();
            }
            return;
        }
        
        switch(e.key) {
            case '?':
                e.preventDefault();
                shortcutsModal.style.display = 'flex';
                break;
            case '/':
                e.preventDefault();
                document.getElementById('searchInput').focus();
                break;
            case 'Escape':
                e.preventDefault();
                shortcutsModal.style.display = 'none';
                document.getElementById('shareModal').style.display = 'none';
                document.getElementById('searchInput').value = '';
                document.getElementById('clearSearch').style.display = 'none';
                applyFilters();
                break;
            case 't':
            case 'T':
                e.preventDefault();
                document.getElementById('themeToggle').click();
                break;
            case 'e':
            case 'E':
                e.preventDefault();
                exportToCSV();
                break;
            case 'p':
            case 'P':
                e.preventDefault();
                window.print();
                break;
            case 's':
            case 'S':
                e.preventDefault();
                document.getElementById('shareBtn').click();
                break;
            case 'r':
            case 'R':
                e.preventDefault();
                document.getElementById('resetFilters').click();
                break;
        }
    });
    
    if (closeShortcuts) {
        closeShortcuts.addEventListener('click', function() {
            shortcutsModal.style.display = 'none';
        });
    }
    
    // Close on outside click
    shortcutsModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
}

// ============================================
// REAL-TIME COST COUNTER
// ============================================

let counterRunning = false;
let counterInterval = null;
let counterStart = null;
let accumulatedCost = 0;

function initializeCostCounter() {
    const toggleCounter = document.getElementById('toggleCounter');
    const liveCounter = document.getElementById('liveCounter');
    
    // Cost per second based on 2018-19 shutdown ($314.3M per day)
    const costPerSecond = 314300000 / 86400; // ~$3,637 per second
    
    // Update static metrics
    document.getElementById('costPerSecond').textContent = '$' + Math.round(costPerSecond).toLocaleString();
    document.getElementById('costPerMinute').textContent = '$' + Math.round(costPerSecond * 60).toLocaleString();
    document.getElementById('costPerHour').textContent = '$' + (costPerSecond * 3600 / 1000000).toFixed(1) + 'M';
    document.getElementById('costPerDay').textContent = '$' + (costPerSecond * 86400 / 1000000).toFixed(1) + 'M';
    
    if (toggleCounter) {
        toggleCounter.addEventListener('click', function() {
            if (!counterRunning) {
                // Start counter
                counterRunning = true;
                counterStart = Date.now();
                this.textContent = 'Stop Counter';
                this.classList.add('stop');
                
                counterInterval = setInterval(() => {
                    const elapsed = (Date.now() - counterStart) / 1000; // seconds
                    const cost = accumulatedCost + (elapsed * costPerSecond);
                    liveCounter.textContent = '$' + formatLargeNumber(cost);
                }, 100);
            } else {
                // Stop counter
                counterRunning = false;
                const elapsed = (Date.now() - counterStart) / 1000;
                accumulatedCost += elapsed * costPerSecond;
                clearInterval(counterInterval);
                this.textContent = 'Resume Counter';
                this.classList.remove('stop');
            }
        });
    }
}

function formatLargeNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2) + 'B';
    } else if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(2) + 'K';
    }
    return num.toFixed(2);
}

// ============================================
// HISTORICAL TRENDS CHART
// ============================================

function createTrendsChart() {
    const canvas = document.getElementById('trendsChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Group shutdowns by decade for trends
    const decades = {
        '1976-1980': 0,
        '1981-1990': 0,
        '1991-2000': 0,
        '2001-2010': 0,
        '2011-2020': 0
    };
    
    shutdownData.forEach(shutdown => {
        const year = shutdown.year;
        if (year >= 1976 && year <= 1980) decades['1976-1980']++;
        else if (year >= 1981 && year <= 1990) decades['1981-1990']++;
        else if (year >= 1991 && year <= 2000) decades['1991-2000']++;
        else if (year >= 2001 && year <= 2010) decades['2001-2010']++;
        else if (year >= 2011 && year <= 2020) decades['2011-2020']++;
    });
    
    // Simple custom chart rendering
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;
    
    const data = Object.values(decades);
    const labels = Object.keys(decades);
    const maxValue = Math.max(...data);
    const barWidth = canvas.width / data.length - 20;
    const barSpacing = 10;
    
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color') || '#3b82f6';
    
    data.forEach((value, index) => {
        const barHeight = (value / maxValue) * (canvas.height - 60);
        const x = index * (barWidth + barSpacing) + barSpacing;
        const y = canvas.height - barHeight - 40;
        
        // Draw bar
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw value on top
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-dark') || '#1f2937';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(value.toString(), x + barWidth / 2, y - 5);
        
        // Draw label
        ctx.save();
        ctx.translate(x + barWidth / 2, canvas.height - 10);
        ctx.rotate(-Math.PI / 6);
        ctx.fillText(labels[index], 0, 0);
        ctx.restore();
        
        // Reset fill color for next bar
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color') || '#3b82f6';
    });
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeSearchFilter();
    initializeExport();
    initializePrint();
    initializeShare();
    initializeKeyboardShortcuts();
    initializeCostCounter();
    createTrendsChart();
});
