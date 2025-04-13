# Supersonic Mulch Calculator Widget

Welcome to the **Supersonic Mulch Calculator Widget** repository! This simple, embeddable JavaScript widget is designed to calculate how much mulch is needed for a given area and depth. It’s created specifically for use on all our landscaping clients’ websites, helping them deliver value to their visitors while showcasing our expertise. Every instance of the widget proudly includes a credit link to [Supersonic Landscaping](https://supersoniclandscaping.com) to ensure our brand is recognized.

## Table of Contents

- [Features](#features)
- [Installation & Hosting](#installation--hosting)
- [Usage](#usage)
- [Customization](#customization)
- [Technical Details](#technical-details)
- [Versioning and Deployment](#versioning-and-deployment)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Features

- **Easy Integration for Client Websites:**  
  Designed for use on our landscaping clients’ websites to boost engagement and user experience.
- **Ultra-Simple Calculation:**  
  Simply enter area (in square feet) and mulch depth (in inches) to determine the needed volume in cubic yards.
- **Uneditable Credit Link:**  
  The widget automatically appends an uneditable credit link ("Tool by Supersonic Landscaping") to maintain our brand’s visibility.
- **Customization Through Data Attributes:**  
  Clients can customize the title text using a `data-title` attribute while keeping the widget’s structure and credit intact.
- **Lightweight & Responsive:**  
  Developed with plain JavaScript and minimal CSS to ensure fast load times and mobile-friendly design.

## Installation & Hosting

### Hosting Options

- **GitHub Pages:**  
  Host this widget directly from this repository using GitHub Pages for a stable, free URL.
  
- **CDN via jsDelivr:**  
  For fast delivery, use jsDelivr with a URL like:  
  `https://cdn.jsdelivr.net/gh/yourusername/mulch-calculator-widget/mulch-calculator.js`  
  *(Replace `yourusername` with your actual GitHub username.)*

## Usage

To integrate the Supersonic Mulch Calculator Widget into your website, simply:

1. **Add a Target `<div>`:**  
   Place the following HTML where you want the calculator to appear:
   ```html
   <div class="supersonic-mulch-calculator" data-title="Calculate Your Mulch Needs"></div>
   ```

2. **Include the Widget Script:**  
   Add the following script tag, typically just before the closing `</body>` tag:
   ```html
   <script src="https://cdn.jsdelivr.net/gh/yourusername/mulch-calculator-widget/mulch-calculator.js"></script>
   ```
   This script will automatically detect the target `<div>`, inject the interactive calculator, and append the credit link to [Supersonic Landscaping](https://supersoniclandscaping.com).

## Customization

- **Custom Title:**  
  Clients can customize the widget’s title using the `data-title` attribute. For example:
  ```html
  <div class="supersonic-mulch-calculator" data-title="How Much Mulch Do I Need?"></div>
  ```
- **Styling:**  
  Basic styling is provided via `styles.css`. You may override these styles on your own website if needed, but please keep the credit link intact.

**Note:**  
The credit ("Tool by Supersonic Landscaping") is embedded in the widget and cannot be removed or modified, ensuring brand consistency across all installations.

## Technical Details

- **Calculation Logic:**
  - **Input:**  
    - Area in square feet  
    - Mulch depth in inches  
  - **Calculation Process:**  
    1. Convert depth from inches to feet: `depth / 12`  
    2. Calculate volume in cubic feet: `volume = area * (depth / 12)`  
    3. Convert cubic feet to cubic yards: `cubicYards = volume / 27`
  - **Output:**  
    The widget displays the number of cubic yards required (rounded to 2 decimal places).

- **Code Structure:**  
  The JavaScript is wrapped in an IIFE to avoid conflicts with other site scripts and runs on `DOMContentLoaded`.

## Versioning and Deployment

- **Versioning:**  
  We follow [Semantic Versioning](https://semver.org/). Please update the version number according to any new changes (e.g., v1.0.0, v1.1.0, etc.).
- **Deployment:**  
  Push your changes to this repository and deploy via GitHub Pages. For production usage, reference the CDN URL (e.g., via jsDelivr).

## Contributing

Contributions are welcome! If you:
- Spot any bugs,
- Want to suggest new features, or
- Have improvements to share,
  
feel free to open an issue or submit a pull request.

## Support

For support or questions regarding the widget, please:
- Open an issue in this repository, or
- Contact us at [support@supersonicsites.com](mailto:support@supersonicsites.com).

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

Thank you for using the Supersonic Mulch Calculator Widget—empowering our landscaping clients with great tools and showcasing our expertise in every installation. Visit [Supersonic Landscaping](https://supersoniclandscaping.com) for more information and services.
