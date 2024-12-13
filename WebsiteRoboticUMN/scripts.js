// Expand the light-grey section and display hover text on hover
function showText(element) {
    const lightGreyPart = element.querySelector('.light-grey');
    const hoverText = lightGreyPart.querySelector('.hover-text');
    lightGreyPart.style.left = 'calc(100% + 300px)'; // Slide to the right
    lightGreyPart.style.width = '500px';            // Extend width
    hoverText.style.visibility = 'visible';         // Make text visible
    hoverText.style.opacity = '1';                  // Fade in effect
}

// Reset the light-grey section and hide hover text on mouse out
function hideText(element) {
    const lightGreyPart = element.querySelector('.light-grey');
    const hoverText = lightGreyPart.querySelector('.hover-text');
    lightGreyPart.style.left = '100%';              // Reset position
    lightGreyPart.style.width = '300px';            // Reset width
    hoverText.style.visibility = 'hidden';          // Hide text
    hoverText.style.opacity = '0';                  // Fade out effect
}

// Dynamically update the current time and date
function updateDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const date = now.toDateString();
    document.getElementById('datetime').innerHTML = `
        <h1>${hours}:${minutes}</h1>
        <p>${date}</p>
    `;
}

// Automatically update the time and date every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display immediately on page load

// Show a popup with additional information
function showPopup(element) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const hoverText = element.querySelector('.hover-text').innerText;
    popupText.innerText = hoverText; // Display hover text in the popup
    popup.style.display = 'block';  // Show the popup
}

// Hide the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';   // Hide the popup
}
