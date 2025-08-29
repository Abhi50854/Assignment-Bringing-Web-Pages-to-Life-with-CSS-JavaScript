// -------------------------------
// Part 2: Functions, Scope & Return Values
// -------------------------------

// Global message
let globalMessage = "Result:";

// Function with parameter & return value
function square(num) {
  return num * num;
}

// Function demonstrating local vs global scope
function calculateSquare(value) {
  let localResult = square(value); // uses square()
  document.getElementById("functionOutput").innerText = 
    `${globalMessage} ${value}² = ${localResult}`;
}

// -------------------------------
// Part 3: Combining CSS + JS
// -------------------------------

const box = document.getElementById("jsBox");
const animateBtn = document.getElementById("animateBtn");

// Reusable function to toggle CSS animation
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

// Event listener triggers CSS animation via JS
animateBtn.addEventListener("click", () => {
  toggleAnimation(box, "animate");
});
