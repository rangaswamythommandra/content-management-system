const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.querySelector(".container");

// Function to display a message and redirect to the index.html page
function showMessageAndRedirect(message) {
    alert(message); // Display a simple alert message (you can use a modal or custom message display)
    window.location.href = "index.html"; // Redirect to index.html
}

// Event listener for login form submission
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    showMessageAndRedirect("Login successful! Redirecting to homepage.");
});

// Event listener for signup form submission
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    showMessageAndRedirect("Signup successful! Redirecting to homepage.");
});

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});
