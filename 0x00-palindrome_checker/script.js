const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const validateUserInput = () => {
  if (!textInput.value.trim()) {
    result.innerHTML = "";
    alert("Please input a value.");
    return;
  }
};

const getAlphamericText = (str) => {
  const regex = /[a-z0-9]/g;
  return str.toLowerCase().match(regex);
};

const reverseTextInput = (str) => {
  return getAlphamericText(str).reverse();
};

const isPalindrome = () => {
  let userInput = textInput.value;
  validateUserInput();

  const cleanString = getAlphamericText(userInput).join("");
  const reversedString = reverseTextInput(userInput).join("");

  if (cleanString === reversedString) {
    result.innerHTML = `<p>${userInput} is a palindrome.</p>`;
  } else {
    result.innerHTML = `<p>${userInput} is not a palindrome.</p>`;
  }

  result.classList.remove("hide");
  textInput.value = "";
};

checkButton.addEventListener("click", isPalindrome);

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    isPalindrome();
  }
});
