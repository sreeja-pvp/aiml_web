function toggleReadMore(button) {
    // Get the associated 'more-content' div relative to the button
    const moreContent = button.previousElementSibling;
    
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
      moreContent.style.display = "block";
      button.innerText = "Read Less";
    } else {
      moreContent.style.display = "none";
      button.innerText = "Read More";
    }
  }
  