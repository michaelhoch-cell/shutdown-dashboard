// Enhanced App Functions for New Features

// Initialize all enhanced features
function initializeEnhancedFeatures() {
    initializeCalculator();
    initializeHealthTabs();
    initializeDailyTimeline();
    initializeVotingRecords();
    initializeComparisons();
}

// Financial Calculator
function initializeCalculator() {
    const calcButton = document.getElementById('calculateBtn');
    if (calcButton) {
        calcButton.addEventListener('click', calculateImpact);
        
        // Calculate on page load with defaults
        calculateImpact();
    }
}

function calculateImpact() {
    const days = parseInt(document.getElementById('calcDays').value) || 35;
    const workers = parseInt(document.getElementById('calcWorkers').value) || 800000;
    const contractors = parseInt(document.getElementById('calcContractors').value) || 100000;
    
    if (typeof financialCalculator !== 'undefined') {
        const results = financialCalculator.calculateShutdownCost(days, workers, contractors);
        
        document.getElementById('resultBackpay').textContent = formatCurrency(results.backpay);
        document.getElementById('resultContractor').textContent = formatCurrency(results.contractorLoss);
        document.getElementById('resultGDP').textContent = formatCurrency(results.gdpLoss);
        document.getElementById('resultPermits').textContent = formatCurrency(results.permitDelays);
        document.getElementById('resultTourism').textContent = formatCurrency(results.tourismLoss);
        document.getElementById('resultTotal').textContent = formatCurrency(results.total);
    }
}

function formatCurrency(amount) {
    if (amount >= 1000000000) {
        return '$' + (amount / 1000000000).toFixed(2) + 'B';
    } else if (amount >= 1000000) {
        return '$' + (amount / 1000000).toFixed(2) + 'M';
    } else if (amount >= 1000) {
        return '$' + (amount / 1000).toFixed(2) + 'K';
    }
    return '$' + amount.toFixed(2);
}

// Health Tabs
function initializeHealthTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and tabs
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            this.classList.add('active');
            document.getElementById(tabName + '-tab').classList.add('active');
        });
    });
}

// Daily Timeline
function initializeDailyTimeline() {
    const shutdownSelect = document.getElementById('shutdownSelect');
    if (shutdownSelect && typeof detailedShutdownData !== 'undefined') {
        shutdownSelect.addEventListener('change', function() {
            renderDailyTimeline(this.value);
        });
        
        // Render default timeline
        renderDailyTimeline('2018-2019');
    }
}

function renderDailyTimeline(shutdownKey) {
    const timeline = document.getElementById('dailyTimeline');
    if (!timeline || typeof detailedShutdownData === 'undefined') return;
    
    const shutdown = detailedShutdownData[shutdownKey];
    if (!shutdown) return;
    
    timeline.innerHTML = '';
    
    shutdown.dailyEvents.forEach(event => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        let voteHtml = '';
        if (event.keyVote) {
            voteHtml = `<div class="timeline-vote">Vote: ${event.keyVote}</div>`;
        }
        
        item.innerHTML = `
            <div class="timeline-day">Day ${event.day} <span class="timeline-date">${event.date}</span></div>
            <div class="timeline-event">${event.event}</div>
            ${voteHtml}
        `;
        
        timeline.appendChild(item);
    });
}

// Voting Records
function initializeVotingRecords() {
    if (typeof detailedShutdownData !== 'undefined') {
        renderVotingRecords();
    }
}

function renderVotingRecords() {
    const container = document.getElementById('votingRecords');
    if (!container) return;
    
    const shutdown2018 = detailedShutdownData['2018-2019'];
    if (!shutdown2018 || !shutdown2018.votingRecords) return;
    
    container.innerHTML = '';
    
    shutdown2018.votingRecords.forEach(vote => {
        const card = document.createElement('div');
        card.className = 'vote-card';
        
        const resultClass = vote.result.toLowerCase().includes('passed') ? 'passed' : 'failed';
        
        // Safely handle missing vote data
        const demYes = vote.democrats ? vote.democrats.yes : 0;
        const demNo = vote.democrats ? vote.democrats.no : 0;
        const repYes = vote.republicans ? vote.republicans.yes : 0;
        const repNo = vote.republicans ? vote.republicans.no : 0;
        
        card.innerHTML = `
            <div class="vote-header">
                <div class="vote-date">${vote.date} - ${vote.chamber}</div>
                <div class="vote-result ${resultClass}">${vote.result}</div>
            </div>
            <div class="vote-bill">${vote.bill}</div>
            <div class="vote-breakdown">
                <div class="party-votes">
                    <div class="party-name">Democrats</div>
                    <div class="party-stats">Yes: ${demYes} | No: ${demNo}</div>
                </div>
                <div class="party-votes">
                    <div class="party-name">Republicans</div>
                    <div class="party-stats">Yes: ${repYes} | No: ${repNo}</div>
                </div>
                <div class="party-votes">
                    <div class="party-name">Total</div>
                    <div class="party-stats">Yes: ${vote.yesVotes} | No: ${vote.noVotes}</div>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Comparisons
function initializeComparisons() {
    const compButtons = document.querySelectorAll('.comp-tab-btn');
    
    compButtons.forEach(button => {
        button.addEventListener('click', function() {
            const compType = this.getAttribute('data-comp');
            
            document.querySelectorAll('.comp-tab-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            renderComparison(compType);
        });
    });
    
    // Render default comparison
    if (typeof comparativeAnalysis !== 'undefined') {
        renderComparison('president');
    }
}

function renderComparison(type) {
    const container = document.getElementById('comparisonChart');
    if (!container || typeof comparativeAnalysis === 'undefined') return;
    
    container.innerHTML = '';
    
    let data;
    let title;
    
    switch(type) {
        case 'president':
            data = comparativeAnalysis.byPresident;
            title = 'Shutdowns by President';
            break;
        case 'party':
            data = comparativeAnalysis.byParty;
            title = 'Shutdowns by Party';
            break;
        case 'cause':
            data = comparativeAnalysis.byCause;
            title = 'Shutdowns by Cause';
            break;
    }
    
    const titleEl = document.createElement('h3');
    titleEl.textContent = title;
    titleEl.style.marginBottom = '1.5rem';
    titleEl.style.color = 'var(--primary-color)';
    container.appendChild(titleEl);
    
    const maxValue = Math.max(...Object.values(data).map(d => d.totalDays || d.days || 0));
    
    Object.entries(data).forEach(([key, value]) => {
        const bar = document.createElement('div');
        bar.className = 'comp-bar';
        
        const days = value.totalDays || value.days || 0;
        const cost = value.totalCost || value.cost || 0;
        const count = value.shutdowns || value.count || 0;
        const widthPercent = (days / maxValue) * 100;
        
        bar.innerHTML = `
            <div class="comp-label">${key}</div>
            <div class="comp-bar-container">
                <div class="comp-bar-fill" style="width: ${widthPercent}%;">
                    ${count ? count + ' shutdowns, ' : ''}${days} days${cost ? ', ' + formatCurrency(cost) : ''}
                </div>
            </div>
        `;
        
        container.appendChild(bar);
    });
}

// Add to existing initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeEnhancedFeatures();
});
