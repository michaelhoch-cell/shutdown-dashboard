// Historical Government Shutdown Data
const shutdownData = [
    {
        year: 2018,
        startDate: "December 22, 2018",
        endDate: "January 25, 2019",
        duration: 35,
        president: "Trump",
        party: "Republican",
        issue: "Border wall funding",
        workersAffected: 800000,
        cost: 11000000000,
        departments: ["Homeland Security", "Justice", "Agriculture", "Commerce", "Interior", "Treasury", "HUD", "Transportation", "State"]
    },
    {
        year: 2018,
        startDate: "January 20, 2018",
        endDate: "January 22, 2018",
        duration: 3,
        president: "Trump",
        party: "Republican",
        issue: "DACA and immigration",
        workersAffected: 692000,
        cost: null,
        departments: ["Multiple agencies"]
    },
    {
        year: 2013,
        startDate: "October 1, 2013",
        endDate: "October 16, 2013",
        duration: 16,
        president: "Obama",
        party: "Democrat",
        issue: "Affordable Care Act funding",
        workersAffected: 850000,
        cost: 2000000000,
        departments: ["All agencies"]
    },
    {
        year: 1995,
        startDate: "December 16, 1995",
        endDate: "January 6, 1996",
        duration: 21,
        president: "Clinton",
        party: "Democrat",
        issue: "Medicare, education, environment spending",
        workersAffected: 284000,
        cost: null,
        departments: ["Multiple agencies"]
    },
    {
        year: 1995,
        startDate: "November 14, 1995",
        endDate: "November 19, 1995",
        duration: 5,
        president: "Clinton",
        party: "Democrat",
        issue: "Budget disagreements",
        workersAffected: 800000,
        cost: null,
        departments: ["Multiple agencies"]
    },
    {
        year: 1990,
        startDate: "October 6, 1990",
        endDate: "October 9, 1990",
        duration: 3,
        president: "Bush Sr.",
        party: "Republican",
        issue: "Budget deficit reduction",
        workersAffected: 2800,
        cost: null,
        departments: ["Limited impact"]
    },
    {
        year: 1987,
        startDate: "December 18, 1987",
        endDate: "December 20, 1987",
        duration: 3,
        president: "Reagan",
        party: "Republican",
        issue: "Contra aid disagreements",
        workersAffected: null,
        cost: null,
        departments: ["Limited impact"]
    },
    {
        year: 1986,
        startDate: "October 17, 1986",
        endDate: "October 18, 1986",
        duration: 1,
        president: "Reagan",
        party: "Republican",
        issue: "Various spending disputes",
        workersAffected: null,
        cost: null,
        departments: ["Limited impact"]
    },
    {
        year: 1984,
        startDate: "October 4, 1984",
        endDate: "October 5, 1984",
        duration: 2,
        president: "Reagan",
        party: "Republican",
        issue: "Water projects and civil rights",
        workersAffected: null,
        cost: null,
        departments: ["Limited impact"]
    },
    {
        year: 1983,
        startDate: "November 10, 1983",
        endDate: "November 14, 1983",
        duration: 4,
        president: "Reagan",
        party: "Republican",
        issue: "Education funding",
        workersAffected: null,
        cost: null,
        departments: ["Limited impact"]
    },
    {
        year: 1982,
        startDate: "December 17, 1982",
        endDate: "December 21, 1982",
        duration: 4,
        president: "Reagan",
        party: "Republican",
        issue: "MX missile funding",
        workersAffected: null,
        cost: null,
        departments: ["Limited impact"]
    },
    {
        year: 1981,
        startDate: "November 20, 1981",
        endDate: "November 23, 1981",
        duration: 3,
        president: "Reagan",
        party: "Republican",
        issue: "Budget reconciliation",
        workersAffected: null,
        cost: null,
        departments: ["Limited impact"]
    }
];

// Department impact data for visualization
const departmentImpactData = {
    labels: [
        "Homeland Security",
        "Justice",
        "Agriculture",
        "Commerce",
        "Interior",
        "Treasury",
        "Transportation",
        "State",
        "HUD"
    ],
    data: [42000, 86000, 38000, 41000, 52000, 52000, 36000, 11000, 8000] // Approximate employees affected in 2019
};

// Shutdown frequency by decade
const decadeData = {
    labels: ["1976-1980", "1981-1990", "1991-2000", "2001-2010", "2011-2020"],
    data: [5, 8, 3, 0, 6]
};

// Export data for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { shutdownData, departmentImpactData, decadeData };
}
