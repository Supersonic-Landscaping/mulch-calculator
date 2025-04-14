(function() {
  // Function to inject the stylesheet dynamically if not already present.
  function injectStylesheet() {
    if (!document.getElementById("smc-stylesheet")) {
      var link = document.createElement("link");
      link.id = "smc-stylesheet";
      link.rel = "stylesheet";
      link.href = "https://raw.githubusercontent.com/Supersonic-Landscaping/mulch-calculator/main/style.css";
      document.head.appendChild(link);
    }
  }
  
  // Immediately inject the stylesheet.
  injectStylesheet();

  // Wait for the DOM to be fully loaded.
  document.addEventListener("DOMContentLoaded", function() {
    // Get all elements designated to host the mulch calculator widget.
    var calculators = document.getElementsByClassName("supersonic-mulch-calculator");

    // Loop through each instance of the calculator.
    for (var i = 0; i < calculators.length; i++) {
      // Get custom title; default to "Mulch Calculator" if not provided.
      var titleText = calculators[i].getAttribute("data-title") || "Mulch Calculator";
      // Get the custom labor price attribute; default to $40 if not provided.
      var laborPriceStr = calculators[i].getAttribute("data-labor-price");
      var laborPrice = (laborPriceStr && !isNaN(parseFloat(laborPriceStr))) ? parseFloat(laborPriceStr) : 40.0;
      
      // Inject the widget HTML.
      calculators[i].innerHTML = `
        <div class="smc-widget">
          <h3>${titleText}</h3>
          <div class="smc-field">
            <label>Width (ft):</label>
            <input type="number" id="smc-width-${i}" placeholder="Enter width">
          </div>
          <div class="smc-field">
            <label>Length (ft):</label>
            <input type="number" id="smc-length-${i}" placeholder="Enter length">
          </div>
          <div class="smc-field">
            <label>Mulch Depth (in):</label>
            <input type="number" id="smc-depth-${i}" placeholder="Enter mulch depth" value="3">
          </div>
          <button id="smc-calc-${i}">Calculate</button>
          <p id="smc-result-${i}"></p>
          <p id="smc-cost-${i}"></p>
          <p class="smc-disclaimer">*Note: This estimate includes only labor costs. Mulch material price is not included.</p>
          <p class="smc-credit">
            Tool by <a href="https://supersoniclandscaping.com" target="_blank">Supersonic Landscaping</a>
          </p>
        </div>
      `;
      
      // Attach an event listener to the calculate button.
      (function(index) {
        var calcButton = document.getElementById("smc-calc-" + index);
        calcButton.addEventListener("click", function() {
          var width = parseFloat(document.getElementById("smc-width-" + index).value);
          var length = parseFloat(document.getElementById("smc-length-" + index).value);
          var depth = parseFloat(document.getElementById("smc-depth-" + index).value);
          var resultEl = document.getElementById("smc-result-" + index);
          var costEl = document.getElementById("smc-cost-" + index);
          
          // Validate the inputs.
          if (isNaN(width) || isNaN(length) || isNaN(depth) || width <= 0 || length <= 0 || depth <= 0) {
            resultEl.innerText = "Please enter valid numbers for width, length, and depth.";
            costEl.innerText = "";
            return;
          }
          
          // Calculate area in square feet.
          var area = width * length;
          
          // Calculate volume:
          // - Convert depth from inches to feet.
          // - Compute volume in cubic feet: area * (depth in feet).
          // - Convert to cubic yards (1 cubic yard = 27 cubic feet).
          var volumeCubicFeet = area * (depth / 12);
          var volumeCubicYards = volumeCubicFeet / 27;
          
          // Calculate labor cost using the custom labor price.
          var laborCost = volumeCubicYards * laborPrice;
          
          // Display the results.
          resultEl.innerText = "Mulch volume required: " + volumeCubicYards.toFixed(2) + " cubic yards.";
          costEl.innerText = "Estimated labor cost: $" + laborCost.toFixed(2);
        });
      })(i);
    }
  });
})();


