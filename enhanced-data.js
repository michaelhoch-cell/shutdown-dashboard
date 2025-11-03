// Enhanced Detailed Shutdown Data with Day-by-Day Events
const detailedShutdownData = {
    "2018-2019": {
        startDate: "December 22, 2018",
        endDate: "January 25, 2019",
        duration: 35,
        president: "Trump",
        party: "Republican",
        primaryIssue: "Border wall funding ($5.7 billion requested)",
        workersAffected: 800000,
        estimatedCost: 11000000000,
        
        // Day-by-day timeline
        dailyEvents: [
            { day: 1, date: "Dec 22, 2018", event: "Shutdown begins at midnight after Senate fails to pass funding bill", keyVote: "Senate voice vote fails" },
            { day: 2, date: "Dec 23, 2018", event: "420,000 federal employees required to work without pay", keyVote: null },
            { day: 3, date: "Dec 24, 2018", event: "Christmas Eve - Negotiations stall", keyVote: null },
            { day: 7, date: "Dec 28, 2018", event: "Trump offers $2.6B for border security, rejected", keyVote: null },
            { day: 12, date: "Jan 2, 2019", event: "Democrats take control of House", keyVote: null },
            { day: 13, date: "Jan 3, 2019", event: "House passes funding without wall money", keyVote: "House 241-190" },
            { day: 19, date: "Jan 9, 2019", event: "First missed paycheck for 800,000 workers", keyVote: null },
            { day: 20, date: "Jan 10, 2019", event: "Trump offers temporary DACA protection for wall funding", keyVote: null },
            { day: 24, date: "Jan 14, 2019", event: "IRS recalls 46,000 workers without pay for tax season", keyVote: null },
            { day: 30, date: "Jan 20, 2019", event: "Second missed paycheck - food banks overwhelmed", keyVote: null },
            { day: 33, date: "Jan 23, 2019", event: "Senate votes on competing bills - both fail", keyVote: "Senate 50-47 (GOP), 52-44 (Dem)" },
            { day: 34, date: "Jan 24, 2019", event: "Air traffic controllers call in sick - airport delays mount", keyVote: null },
            { day: 35, date: "Jan 25, 2019", event: "Trump agrees to temporary funding through Feb 15", keyVote: "Senate unanimous consent" }
        ],
        
        // Department-specific impacts
        departmentImpacts: {
            "NRO": {
                name: "National Reconnaissance Office",
                workersAffected: 3100,
                furloughedWorkers: 2800,
                essentialWorkers: 300,
                dailyCost: 950000,
                totalCost: 33250000,
                impact: "Critical satellite intelligence operations severely hampered. Mission delays estimated at 3-6 months for key surveillance programs. Security clearance renewals suspended affecting 850 contractors."
            },
            "HHS": {
                name: "Health & Human Services",
                workersAffected: 58000,
                furloughedWorkers: 42000,
                essentialWorkers: 16000,
                dailyCost: 12500000,
                totalCost: 437500000,
                impact: "Medicare and Medicaid processing delays affected 2.3M beneficiaries. FDA food inspections halted at 150+ facilities. NIH clinical trials suspended for 3,600 patients. Convalescent care facility inspections postponed affecting 890 facilities nationwide.",
                subImpacts: {
                    "Medicare": { affected: 1200000, delays: "15-30 days" },
                    "Medicaid": { affected: 1100000, delays: "20-45 days" },
                    "FDA": { inspections: 150, facilities: "High-risk food facilities" },
                    "ConvalescentCare": { facilities: 890, inspections: "Postponed", workers: 12000 }
                }
            },
            "Homeland Security": { workersAffected: 240000, furloughedWorkers: 198000, essentialWorkers: 42000, dailyCost: 35000000, totalCost: 1225000000 },
            "Justice": { workersAffected: 95000, furloughedWorkers: 9000, essentialWorkers: 86000, dailyCost: 18000000, totalCost: 630000000 },
            "Agriculture": { workersAffected: 89000, furloughedWorkers: 51000, essentialWorkers: 38000, dailyCost: 15000000, totalCost: 525000000 },
            "Interior": { workersAffected: 57000, furloughedWorkers: 52000, essentialWorkers: 5000, dailyCost: 9000000, totalCost: 315000000 },
            "Treasury": { workersAffected: 78000, furloughedWorkers: 26000, essentialWorkers: 52000, dailyCost: 14000000, totalCost: 490000000 },
            "Commerce": { workersAffected: 41000, furloughedWorkers: 36000, essentialWorkers: 5000, dailyCost: 7500000, totalCost: 262500000 },
            "Transportation": { workersAffected: 54000, furloughedWorkers: 18000, essentialWorkers: 36000, dailyCost: 9800000, totalCost: 343000000 },
            "State": { workersAffected: 11000, furloughedWorkers: 0, essentialWorkers: 11000, dailyCost: 2100000, totalCost: 73500000 }
        },
        
        // Congressional voting records
        votingRecords: [
            {
                date: "Jan 3, 2019",
                bill: "H.R. 21 - Appropriations without wall funding",
                chamber: "House",
                result: "Passed 241-190",
                yesVotes: 241,
                noVotes: 190,
                democrats: { yes: 234, no: 0 },
                republicans: { yes: 7, no: 190 }
            },
            {
                date: "Jan 23, 2019",
                bill: "S. Amdt. 5 - Trump's proposal with wall funding",
                chamber: "Senate",
                result: "Failed 50-47",
                yesVotes: 50,
                noVotes: 47,
                democrats: { yes: 0, no: 45 },
                republicans: { yes: 50, no: 2 }
            },
            {
                date: "Jan 23, 2019",
                bill: "S. Amdt. 6 - Democratic proposal without wall",
                chamber: "Senate",
                result: "Failed 52-44",
                yesVotes: 52,
                noVotes: 44,
                democrats: { yes: 45, no: 0 },
                republicans: { yes: 7, no: 44 }
            },
            {
                date: "Jan 25, 2019",
                bill: "Temporary funding through Feb 15",
                chamber: "Senate",
                result: "Passed by unanimous consent",
                yesVotes: 100,
                noVotes: 0
            }
        ],
        
        // Economic impact breakdown
        economicImpact: {
            directCosts: {
                backpay: 3000000000,
                contractors: 3000000000,
                reopeningCosts: 200000000
            },
            indirectCosts: {
                lostGDP: 3000000000,
                delayedPermits: 500000000,
                lostTourismRevenue: 400000000,
                smallBusinessLosses: 800000000,
                housingMarket: 300000000
            },
            governmentServices: {
                IRSTaxRefunds: 1100000000,
                legalCases: 450000000,
                permitDelays: 550000000
            },
            total: 11000000000,
            perDay: 314285714
        }
    },
    
    "2013": {
        startDate: "October 1, 2013",
        endDate: "October 16, 2013",
        duration: 16,
        president: "Obama",
        party: "Democrat",
        primaryIssue: "Affordable Care Act (Obamacare) funding dispute",
        workersAffected: 850000,
        estimatedCost: 2000000000,
        
        dailyEvents: [
            { day: 1, date: "Oct 1, 2013", event: "Shutdown begins - Congress fails to pass budget", keyVote: "House 228-201" },
            { day: 1, date: "Oct 1, 2013", event: "800,000 workers furloughed immediately", keyVote: null },
            { day: 2, date: "Oct 2, 2013", event: "House Republicans demand Obamacare defunding", keyVote: null },
            { day: 5, date: "Oct 5, 2013", event: "WWII Memorial closed - veterans protest", keyVote: null },
            { day: 8, date: "Oct 8, 2013", event: "First missed paycheck for federal workers", keyVote: null },
            { day: 10, date: "Oct 10, 2013", event: "CDC flu monitoring suspended", keyVote: null },
            { day: 14, date: "Oct 14, 2013", event: "Senate leaders begin negotiations", keyVote: null },
            { day: 16, date: "Oct 16, 2013", event: "Deal reached - government reopens", keyVote: "Senate 81-18, House 285-144" }
        ],
        
        departmentImpacts: {
            "NRO": {
                name: "National Reconnaissance Office",
                workersAffected: 2800,
                furloughedWorkers: 2450,
                essentialWorkers: 350,
                dailyCost: 850000,
                totalCost: 13600000,
                impact: "Satellite operations reduced to minimum safe staffing. Intelligence collection priorities severely constrained."
            },
            "HHS": {
                name: "Health & Human Services",
                workersAffected: 52000,
                furloughedWorkers: 40000,
                essentialWorkers: 12000,
                dailyCost: 11000000,
                totalCost: 176000000,
                impact: "CDC disease surveillance limited. Medicare claims processing backlog of 100,000+ claims. Nursing home inspections delayed affecting 450 facilities.",
                subImpacts: {
                    "CDC": { programs: "Flu surveillance suspended", affected: 280 },
                    "Medicare": { backlog: 100000, delays: "7-14 days" },
                    "ConvalescentCare": { facilities: 450, inspections: "Delayed" }
                }
            }
        },
        
        economicImpact: {
            directCosts: {
                backpay: 2000000000,
                contractors: 0,
                reopeningCosts: 100000000
            },
            indirectCosts: {
                lostGDP: 1500000000,
                nationalParks: 450000000,
                permitDelays: 200000000
            },
            total: 2000000000,
            perDay: 125000000
        }
    }
};

// NRO-Specific Analysis Data
const nroAnalysis = {
    overview: {
        name: "National Reconnaissance Office",
        type: "Intelligence Agency",
        parent: "Department of Defense",
        mission: "Design, build, launch, and maintain America's intelligence satellites",
        founded: 1961,
        budget: 15000000000,
        workforce: 3100,
        contractors: 40000
    },
    
    shutdownVulnerability: {
        rating: "CRITICAL",
        securityClearances: "Top Secret / SCI",
        continuityRisk: "Extremely High",
        missionCritical: true
    },
    
    shutdownImpacts: {
        "2018-2019": {
            totalDays: 35,
            workersAffected: 3100,
            furloughed: 2800,
            working: 300,
            contractorsAffected: 15000,
            missionImpact: "SEVERE",
            satellitePrograms: {
                delayed: 8,
                suspended: 3,
                costOverruns: 250000000
            },
            securityClearances: {
                suspendedProcessing: 850,
                expiredDuringShutdown: 120,
                reinstatementCost: 45000000
            }
        },
        "2013": {
            totalDays: 16,
            workersAffected: 2800,
            furloughed: 2450,
            contractorsAffected: 8000,
            missionImpact: "HIGH"
        }
    },
    
    personalStories: [
        {
            role: "Intelligence Analyst",
            yearsOfService: 12,
            shutdownExperience: "2018-2019 shutdown",
            impact: "Missed mortgage payment, had to use food bank for first time in my life. Security clearance renewal delayed 4 months, putting promotion on hold.",
            family: "Spouse and 2 children",
            financialLoss: 15000
        }
    ]
};

// Health/HHS Industry Analysis
const healthcareAnalysis = {
    overview: {
        department: "Health & Human Services",
        budget: 1400000000000,
        employees: 79000,
        beneficiaries: 140000000,
        programs: ["Medicare", "Medicaid", "ACA", "FDA", "CDC", "NIH"]
    },
    
    convalescentCareImpact: {
        nationalStatistics: {
            facilities: 15600,
            residents: 1400000,
            workers: 1700000,
            averageCost: 8000,
            federalInspectors: 1200
        },
        
        shutdownEffects: {
            "2018-2019": {
                facilitiesAffectedByDelays: 890,
                inspectionsPostponed: 890,
                complianceIssues: 230,
                estimatedResidentRisk: 67000,
                workerConcerns: 12000,
                averageInspectionDelay: 45,
                costToFacilities: 34000000
            },
            "2013": {
                facilitiesAffectedByDelays: 450,
                inspectionsPostponed: 450,
                averageInspectionDelay: 20
            }
        },
        
        specificRisks: [
            "Delayed health and safety inspections",
            "Suspended Medicare/Medicaid certification surveys",
            "Postponed complaint investigations",
            "Delayed abuse and neglect reporting processing",
            "Staffing adequacy reviews suspended"
        ]
    },
    
    medicareImpact: {
        "2018-2019": {
            beneficiaries: 60000000,
            claimsBacklog: 2300000,
            paymentDelays: "15-45 days",
            providerImpact: 350000,
            estimatedCost: 450000000
        }
    },
    
    medicaidImpact: {
        "2018-2019": {
            beneficiaries: 75000000,
            enrollmentProcessingDelays: 450000,
            claimProcessingBacklog: 1100000,
            statePartnershipDisruption: 52
        }
    },
    
    personalStories: [
        {
            role: "Convalescent Care Nurse",
            facility: "Long-term care facility",
            shutdownExperience: "2018-2019 shutdown",
            impact: "Medicare payment delays meant our facility struggled with cash flow. We were worried about layoffs. Inspection delays left safety concerns unaddressed for weeks.",
            concern: "Patient safety and facility financial stability"
        }
    ]
};

// Financial Impact Calculator Data
const financialCalculator = {
    costFactors: {
        backpayRate: 85000, // Average federal salary
        contractorLossRate: 3000, // Daily loss per contractor
        gdpImpactRate: 0.1, // % of GDP per day
        permitDelayRate: 35000000, // Daily permit delays
        tourismLossRate: 15000000 // Daily tourism revenue loss
    },
    
    calculateShutdownCost: function(days, workers, contractors) {
        const backpay = (workers * (this.costFactors.backpayRate / 365)) * days;
        const contractorLoss = contractors * this.costFactors.contractorLossRate * days;
        const gdpLoss = (21000000000000 * this.costFactors.gdpImpactRate / 365) * days;
        const permitDelays = this.costFactors.permitDelayRate * days;
        const tourismLoss = this.costFactors.tourismLossRate * days;
        
        return {
            backpay: backpay,
            contractorLoss: contractorLoss,
            gdpLoss: gdpLoss,
            permitDelays: permitDelays,
            tourismLoss: tourismLoss,
            total: backpay + contractorLoss + gdpLoss + permitDelays + tourismLoss
        };
    }
};

// Comparative Analysis Data
const comparativeAnalysis = {
    byPresident: {
        "Trump": { shutdowns: 2, totalDays: 38, avgDuration: 19, totalCost: 11000000000 },
        "Obama": { shutdowns: 1, totalDays: 16, avgDuration: 16, totalCost: 2000000000 },
        "Clinton": { shutdowns: 2, totalDays: 26, avgDuration: 13, totalCost: 1400000000 },
        "Reagan": { shutdowns: 8, totalDays: 14, avgDuration: 1.75, totalCost: 500000000 }
    },
    
    byParty: {
        "Republican": { shutdowns: 14, totalDays: 72, avgCost: 800000000 },
        "Democrat": { shutdowns: 8, totalDays: 96, avgCost: 1200000000 }
    },
    
    byCause: {
        "Immigration": { count: 2, days: 38, cost: 11000000000 },
        "Healthcare": { count: 1, days: 16, cost: 2000000000 },
        "Budget": { count: 6, days: 35, cost: 1500000000 },
        "Defense": { count: 3, days: 8, cost: 400000000 }
    }
};
