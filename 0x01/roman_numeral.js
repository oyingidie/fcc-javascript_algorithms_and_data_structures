const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertInput = (num) => {
  let romanNumeral = "";

  const conversionChart = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  for (const letter in conversionChart) {
    const chartValue = conversionChart[letter];

    while (num >= chartValue) {
      num -= chartValue;
      romanNumeral += letter;
    }
  }

  return romanNumeral;
};

const getRomanNumeral = () => {
  const userInput = parseInt(number.value);
/*
  if (!number.value || isNaN(userInput)) {
    output.innerHTML = `<p>Please enter a valid number</p>`;
    return;
  }
*/
  if (userInput <= 0) {
    output.innerHTML = `<p>Please enter a number greater than or equal to 1</p>`;
  } else if (userInput > 3999) {
    output.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`;
  } else {
    output.innerHTML = `<p>${convertInput(userInput)}</p>`;
  }

  output.classList.remove("hide");
};

convertButton.addEventListener("click", getRomanNumeral);

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getRomanNumeral();
  }
});

// number.addEventListener("input", resetChecker);
