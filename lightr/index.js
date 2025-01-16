let body = document.getElementById("body");
let h1 = document.getElementById("h1");
let inputEnter = document.getElementById("inputenter"); // Assuming an input element with this ID
let responseEnter = document.getElementById("responseenter"); // Assuming a container for responses

h1.addEventListener('click', () => {
    // Create a new div or p (not body, as body is already the root element of the document)
    let newElement = document.createElement("div");
    // Get the value from the input field
    let inputValue = inputEnter.value;
    // Add the input value as text content
    newElement.textContent = inputValue;
    // Append the new element to the response container
    responseEnter.appendChild(newElement);
});
