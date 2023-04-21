function showLoade() {
    const loader = document.getElementById("loader");
    console.log(loader);
    loader.style.display = "flex";
}

// Hide the loader
function hideLoade() {
    document.getElementById("loader").style.display = "none";
}

// Hide the loader when the image has finished loading
window.addEventListener("load", function () {
    hideLoade();
});
// Example usage
// showLoade(); 
// Show the loader
  // Load your content here
