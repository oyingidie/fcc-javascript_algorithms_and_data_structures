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

