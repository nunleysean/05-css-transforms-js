// Select the Magic 8-Ball and answer elements
const magicBall = document.getElementById("magicBall");
const answer = document.getElementById("answer");

// List of possible answers
const answers = [
  "Yes", "No", "Maybe", "Ask again later", "Definitely", "I don't think so"
];

// Function to get a random answer
function getRandomAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

// Add a click event listener to the Magic 8-Ball
magicBall.addEventListener("click", function () {
  // Clear the current answer
  answer.textContent = "";

  // Add the shake class to the Magic 8-Ball
  magicBall.classList.add("shake");

  // Wait for the shake animation to finish (0.7s) before showing the answer
  setTimeout(function () {
    // Remove the shake class
    magicBall.classList.remove("shake");

    // Set a random answer
    answer.textContent = getRandomAnswer();
  }, 700);
});
