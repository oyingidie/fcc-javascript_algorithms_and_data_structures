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


//calculate change to be returned
const returnChange = (changeDue, cid) => {
  const changeReturned = [];
  let remainingChange = changeDue;
  let currentCashInDrawer = JSON.parse(JSON.stringify(cid));

};


const confirmPurchase = () => {
  const cashReceived = parseFloat(cashInput.value);
  const changeDue = parseFloat((cashReceived - price).toFixed(2));

  let totalCashInDrawer = cid.reduce((acc, [, amount]) => acc + amount, 0);
  totalCashInDrawer = parseFloat(totalCashInDrawer.toFixed(2));

  if (cashReceived < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cashReceived === price) {
    confirmChangeDialog.showModal();
    change.textContent = "No change due - customer paid with exact cash";
  } else if (totalCashInDrawer < changeDue) {
    confirmChangeDialog.showModal();
    change.textContent = "Status: INSUFFICIENT_FUNDS";
  } else {
    const drawer = returnChange(changeDue, cid);

    if (drawer === null) {
      change.textContent = "Status: INSUFFICIENT_FUNDS";
    } else if (drawer.totalChange === changeDue && drawer.remainingCash === 0) {
      change.textContent = `Status: CLOSED ${displayChange(
        drawer.returnedChange
      )}`;
      cid = cid.map(([unit]) => [unit, 0]);
      //updateDrawerDisplay();
    } else {
      change.textContent = `Status: OPEN ${displayChange(
        drawer.returnedChange
      )}`;
      cid = drawer.availableCash;
      //updateDrawerDisplay();
    }
  }
};

purchaseBtn.addEventListener("click", () => {
  confirmPurchase();
});
