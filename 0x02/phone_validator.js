const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const isValidLength = (str) => str.length >= 10 || str.length <= 14;

const isValidFormat = (str) => {
  const formatRegex = /^(?:1\s?)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  return str.match(formatRegex);
};

const validateNumber = () => {
  const phoneNumber = userInput.value;

  if (!phoneNumber) {
    alert("Please provide a phone number");
    return;
  }

  if (isValidLength(phoneNumber) && isValidFormat(phoneNumber)) {
    results.innerHTML += `<p>Valid US number: ${phoneNumber}</p>`;
  } else {
    results.innerHTML += `<p>Invalid US number: ${phoneNumber}</p>`;
  }
};

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validateNumber();
  }
});

checkButton.addEventListener("click", validateNumber);

clearButton.addEventListener("click", () => {
  results.innerHTML = "";
});
