const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const change = document.getElementById("change-due");
const priceDisplay = document.getElementById("price-display");
const cashInDrawerDisplay = document.getElementById("cid-display");
const confirmChangeDialog = document.getElementById("confirm-change-dialog");
const completeBtn = document.getElementById("complete-btn");

let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

priceDisplay.textContent = `$${price.toFixed(2)}`;
//updateDrawerDisplay();
