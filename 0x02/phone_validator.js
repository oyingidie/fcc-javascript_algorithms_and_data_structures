const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const validateNumber = () => {
  const phoneNumber = userInput.value;

  if (!phoneNumber) {
    alert("Please provide a phone number");
    return;
  }
};
