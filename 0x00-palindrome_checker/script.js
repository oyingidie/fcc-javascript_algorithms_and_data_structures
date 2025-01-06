const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const confirmUserInput = () => {
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

const palindrome = () => {
  let userInput = textInput.value;
  confirmUserInput();

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

checkButton.addEventListener("click", palindrome);
