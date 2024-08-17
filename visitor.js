// Visitor counter script
document.addEventListener("DOMContentLoaded", function() {
    // Get the counter element
    var counterElement = document.getElementById('visitor-counter');

    // Get the current count from localStorage, or start at 0
    var count = localStorage.getItem('visitorCount') || 0;

    // Increment the count
    count++;

    // Update the counter element
    counterElement.textContent = 'Visitor Count: ' + count;

    // Save the new count back to localStorage
    localStorage.setItem('visitorCount', count);
});
