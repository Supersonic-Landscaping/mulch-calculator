(function() {
  // Function to inject the stylesheet dynamically if not already present
  function injectStylesheet() {
    if (!document.getElementById("smc-stylesheet")) {
      var link = document.createElement("link");
      link.id = "smc-stylesheet";
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/gh/Supersonic-Landscaping/mulch-calculator-widget/styles.css";
      document.head.appendChild(link);
    }
  }
  
  // Immediately inject the stylesheet
  injectStylesheet();

  // Wait for the DOM to load before initializing the widget
  document.addEventListener("DOMContentLoaded", function() {
    // Select all elements designated for the mulch calculator widget
    var calculators = document.getElementsByClassName("supersonic-mulch-calculator");

    // Loop through each target element and inject widget markup
    for (var i = 0; i < calculators.length; i++) {
      // Get a custom title from the data attribute, or default if not provided
      var titleText = calculators[i].getAttribute("data-title") || "Mulch Calculator";
      
      // Inject HTML content into the div
      calculators[i].innerHTML = `
        <div class="smc-widget">
          <h3>${titleText}</h3>
          <div class="smc-field">
            <label>Area (sq ft):</label>
            <input type="number" id="smc-area-${i}" placeholder="Enter area">
          </div>
          <div class="smc-field">
            <label>Mulch Depth (in):</label>
            <input type="number" id="smc-depth-${i}" placeholder="Enter depth">
          </div>
          <button id="smc-calc-${i}">Calculate</button>
          <p id="smc-result-${i}"></p>
          <p class="smc-credit">
            Tool by <a href="https://supersoniclandscaping.com" target="_blank">Supersonic Landscaping</a>
          </p>
        </div>
      `;
      
      // Attach event listener to the calculate button
      (function(index) {
        var calcButton = document.getElementById("smc-calc-" + index);
        calcButton.addEventListener("click", function() {
          var area = parseFloat(document.getElementById("smc-area-" + index).value);
          var depth = parseFloat(document.getElementById("smc-depth-" + index).value);
          var resultEl = document.getElementById("smc-result-" + index);
          
          // Validate input
          if (isNaN(area) || isNaN(depth) || area <= 0 || depth <= 0) {
            resultEl.innerText = "Please enter valid numbers for both area and depth.";
            return;
          }
          
          // Calculate volume: convert depth from inches to feet, then convert cubic feet to cubic yards.
          var volumeCubicFeet = area * (depth / 12);
          var volumeCubicYards = volumeCubicFeet / 27;
          
          // Display the result rounded to two decimals.
          resultEl.innerText = "You need approximately " + volumeCubicYards.toFixed(2) + " cubic yards of mulch.";
        });
      })(i);
    }
  });
})();

