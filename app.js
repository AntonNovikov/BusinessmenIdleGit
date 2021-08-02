var i = 0;
var iTwo = 0;
var count = 0;
var contTwo = 0;
var amountBusymen = 1;
var amountOffice = 0;

var countMoney = document.getElementById("countMoney");
var myBarOne = document.getElementById("myBarOne");
var myBarTwo = document.getElementById("myBarTwo");

var countBusyMen = document.getElementById("countBusyMen");

var countOffice = document.getElementById("countOffice");
var autoBtn = document.getElementById("autoBtn");

var autoBtnTwo = document.getElementById("autoBtnTwo");

var earnBtn = document.getElementById("earnBtnOne");

var earnBtnTwo = document.getElementById("earnBtnTwo");
let autoOneCheck = 0;
let autoTwoCheck = 0;
function earnMoney() {
  if (i == 0) {
    i = 1;
    var width = 1;
    let id = setInterval(frame, 1);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        if (autoOneCheck) earnMoney();
        count += amountBusymen;
        countMoney.innerHTML = count + "$";
      } else {
        width++;
        myBarOne.style.width = width + "%";
        countMoney.innerHTML = count + "$";
      }
    }
  }
}

function startOfficeWork() {
  if (amountOffice === 0) return;
  if (iTwo == 0) {
    iTwo = 1;
    var width = 1;
    let id = setInterval(frame, 3);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        iTwo = 0;
        if (autoTwoCheck) startOfficeWork();
        amountBusymen += amountOffice;
        countOffice.innerText = amountOffice;
        countBusyMen.innerText = amountBusymen;
      } else {
        width++;
        myBarTwo.style.width = width + "%";
        countBusyMen.innerText = amountBusymen;
        countOffice.innerHTML = amountOffice;
      }
    }
  }
}

function buyBusymen() {
  if (count >= 10) {
    count -= 10;
    amountBusymen++;
    countMoney.innerText = count + "$";
    countBusyMen.innerText = amountBusymen;
  }
}

function buyOffice() {
  if (amountBusymen >= 10) {
    amountBusymen -= 10;
    amountOffice++;
    countBusyMen.innerText = amountBusymen;
    countOffice.innerText = amountOffice;
    startOfficeWork();
  }
}

const priseAutoOne = 10;
const priseAutoTwo = 1000;

function autoOne() {
  if (count >= priseAutoOne) {
    count -= priseAutoOne;
    autoOneCheck = 1;
    earnMoney();
    earnBtn.innerText = "Auto";

    autoBtn.style.visibility = "hidden";
  }
}

function autoTwo() {
  if (count >= priseAutoTwo) {
    count -= priseAutoTwo;
    autoTwoCheck = 1;
    startOfficeWork();
    earnBtnTwo.innerText = "Auto";
    autoBtnTwo.style.visibility = "hidden";
  }
}
