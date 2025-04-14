(function() {
  // Log to ensure the script is loaded
  console.log("Hello World test script loaded.");

  // Wait for DOMContentLoaded event before processing
  document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class "supersonic-mulch-calculator"
    var elements = document.getElementsByClassName("supersonic-mulch-calculator");

    for (var i = 0; i < elements.length; i++) {
      // Inject "Hello World" into each element, styled with a border and padding
      elements[i].innerHTML = `
        <div style="border: 2px solid #27ae60; padding: 16px; border-radius: 5px; text-align: center; font-family: Arial, sans-serif;">
          Hello World!
        </div>
      `;
    }
  });
})();


