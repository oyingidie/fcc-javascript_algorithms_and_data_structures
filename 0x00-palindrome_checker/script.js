const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const confirmInput = () => {
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
  confirmInput();

  const cleanString = getAlphamericText(textInput.value).join("");
  const reversedString = reverseTextInput(textInput.value).join("");

  if (cleanString === reversedString) {
    result.innerHTML = `<p>${textInput.value} is a palindrome.</p>`;
  } else {
    result.innerHTML = `<p>${textInput.value} is not a palindrome.</p>`;
  }

  result.classList.remove("hide");
  textInput.value = "";
};

checkButton.addEventListener("click", palindrome)
