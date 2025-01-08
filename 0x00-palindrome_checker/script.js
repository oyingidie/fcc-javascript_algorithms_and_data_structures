const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const validateUserInput = () => {
  if (!textInput.value.trim()) {
    result.classList.add("hide");
    alert("Please input a value.");
  } else {
    result.innerHTML = `<p>Ooops! Wanna try again?</p>`;
    result.classList.remove("hide");
  }
};

/*
const isPalindrome = () => {
  const userInput = textInput.value;
  const requiredPattern = /[a-z0-9]/gi;

  if (requiredPattern.test(userInput)) {
    const cleanString = userInput.toLowerCase().match(requiredPattern).join("");
    const reversedString = userInput
      .toLowerCase()
      .match(requiredPattern)
      .reverse()
      .join("");

    if (cleanString === reversedString) {
      result.innerHTML = `<p>${userInput} is a palindrome.</p>`;
    } else {
      result.innerHTML = `<p>${userInput} is not a palindrome.</p>`;
    }

    result.classList.remove("hide");
    textInput.value = "";
  } else {
    validateUserInput();
  }
};
*/
