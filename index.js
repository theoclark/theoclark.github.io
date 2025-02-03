document.addEventListener("DOMContentLoaded", function() {

  // Function to load a section
  function loadSection(filePath, elementId, callback) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
          // Call the callback function (for dynamic content update) if provided
          if (callback) callback(element);
        }
      })
      .catch(error => {
        console.error('Error loading section:', error);
      });
  }

  loadSection('/sections/header.html', 'header', function() {});
  loadSection('/sections/navbar.html', 'navbar', function() {});
  loadSection('/sections/footer.html', 'footer', function() {
    // Once the footer is loaded, update the year dynamically
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = currentYear;
    }
  });

});
