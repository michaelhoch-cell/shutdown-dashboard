# 🏛️ US Government Shutdown Dashboard

An interactive web dashboard for tracking and analyzing United States government shutdowns, both historical and current.

**Developed by Dark Wolf Solutions**

## 🌟 Features

### Real-Time Status Monitoring
- Current government operational status display
- Last updated timestamp
- Visual status indicators

### Historical Data Analysis
- Comprehensive database of all 22 government shutdowns since 1976
- Interactive timeline visualization
- Detailed statistics and key metrics

### Interactive Visualizations
- **Timeline Chart**: Duration of shutdowns over time with contextual information
- **Department Impact Chart**: Federal employees affected by department
- **Duration Distribution**: Analysis of shutdown lengths
- **Frequency Analysis**: Shutdowns by decade

### Comprehensive Statistics
- Total number of shutdowns
- Longest shutdown duration (35 days, 2018-2019)
- Economic impact estimates
- Federal workers affected

### Detailed Information
- Sortable table of major shutdowns
- President, party affiliation, and primary issues
- Contextual information about government shutdowns
- Economic and social impact data

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/michaelhoch-cell/shutdown-dashboard.git
cd shutdown-dashboard
```

2. Open the dashboard:
```bash
# Simply open index.html in your web browser
# On macOS:
open index.html

# On Linux:
xdg-open index.html

# On Windows:
start index.html
```

Or use a simple HTTP server for the best experience:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then open http://localhost:8000 in your browser
```

## 📁 Project Structure

```
shutdown-dashboard/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── app.js             # Dashboard functionality and chart initialization
├── data.js            # Historical shutdown data
├── README.md          # Documentation
└── .gitignore         # Git ignore rules
```

## 🎨 Customization

### Adding New Shutdown Data

Edit `data.js` and add a new entry to the `shutdownData` array:

```javascript
{
    year: 2024,
    startDate: "Month Day, Year",
    endDate: "Month Day, Year",
    duration: X,
    president: "President Name",
    party: "Political Party",
    issue: "Primary issue description",
    workersAffected: 800000,
    cost: 11000000000,
    departments: ["Department 1", "Department 2"]
}
```

### Updating Current Status

To change the current status indicator in `index.html`, modify the status section:

```html
<div class="status-indicator">
    <span class="status-icon">⚠️</span>  <!-- Change icon -->
    <span class="status-text">Government is Currently Shutdown</span>  <!-- Change text -->
</div>
```

### Styling

All visual styling is in `styles.css`. Key CSS variables for easy customization:

```css
:root {
    --primary-color: #1e3a8a;      /* Main brand color */
    --secondary-color: #3b82f6;    /* Accent color */
    --accent-color: #ef4444;       /* Alert/warning color */
    --success-color: #10b981;      /* Success indicators */
}
```

## 📊 Data Sources

This dashboard compiles data from reputable sources including:
- Congressional Research Service (CRS)
- Government Accountability Office (GAO)
- Congressional Budget Office (CBO)
- Historical congressional records
- Public federal agency reports

## 🔧 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality
- **Chart.js (v4.4.0)**: Data visualization library
- **Responsive Design**: Mobile-first approach

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is for informational and educational purposes. Data presented is compiled from public sources.

## 📧 Contact

**Dark Wolf Solutions**

For questions, issues, or suggestions, please open an issue on GitHub.

## 🙏 Acknowledgments

- Congressional Research Service for historical data
- Chart.js team for the excellent visualization library
- All contributors and users of this dashboard

## 📈 Future Enhancements

Potential features for future releases:
- Real-time API integration for current status
- Export functionality (PDF, CSV)
- Comparison tools between different shutdowns
- Economic impact calculator
- Congressional voting record integration
- Email/SMS alerts for shutdown notifications

---

**Last Updated**: November 2024

*This dashboard is maintained as an open-source project for public information and education.*
