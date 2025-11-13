document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dynamic-link").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default navigation
  
        let pageUrl = this.getAttribute("data-page");
        let contentArea = document.getElementById("content-area");
  
        // Fetch and load content dynamically
        fetch(pageUrl)
          .then(response => response.text())
          .then(data => {
            contentArea.innerHTML = data;
            window.history.pushState({ path: pageUrl }, "", pageUrl); // Update browser history
          })
          .catch(error => console.error("Error loading page:", error));
      });
    });
  
    // Handle browser back/forward navigation
    window.addEventListener("popstate", function (event) {
      if (event.state && event.state.path) {
        fetch(event.state.path)
          .then(response => response.text())
          .then(data => {
            document.getElementById("content-area").innerHTML = data;
          })
          .catch(error => console.error("Error loading page:", error));
      }
    });
  });
  