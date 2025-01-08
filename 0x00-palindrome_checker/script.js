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
