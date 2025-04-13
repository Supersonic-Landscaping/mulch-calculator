(function() {
  // Run code when DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Select all target elements
    var calculators = document.getElementsByClassName("supersonic-mulch-calculator");

    // Iterate through each found element
    for (var i = 0; i < calculators.length; i++) {
      // Get custom title, or default if not provided
      var titleText = calculators[i].getAttribute("data-title") || "Mulch Calculator";

      // Create widget HTML
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

      // Attach event listener for the calculate button
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

          // Calculation:
          // 1. Convert depth from inches to feet.
          // 2. Calculate volume in cubic feet.
          // 3. Convert cubic feet to cubic yards (1 cubic yard = 27 cubic feet).
          var volumeCubicFeet = area * (depth / 12);
          var volumeCubicYards = volumeCubicFeet / 27;

          // Display result rounded to two decimals.
          resultEl.innerText = "You need approximately " + volumeCubicYards.toFixed(2) + " cubic yards of mulch.";
        });
      })(i);
    }
  });
})();
