// JavaScript code to interact with the HTML page
document.addEventListener("DOMContentLoaded", function () {
    // This function runs when the document is fully loaded

    // Example: Change the text color of the "Hello, World!" heading
    const heading = document.querySelector("h1");
    heading.style.color = "blue";
});

    // Get references to the elements you want to manipulate
    var heading = document.getElementById("myHeading");
    var button = document.getElementById("myButton");

    // Add a click event listener to the button
    button.addEventListener("click", function () {
        heading.innerHTML = "Hello, DOM is manipulated!";
    });


