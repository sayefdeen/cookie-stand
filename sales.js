"use strict";

// Selectors Start
var brancheTable = document.getElementById("sales-table");
var openingHours = document.getElementsByClassName("content");
var createTable = document.createElement("table");
var submit = document.querySelector("#location-form");

submit.addEventListener("submit", function () {
  // console.log(event.target.branchname.value);
  // console.log(event.target.maxnumber.value);
  // console.log(event.target.minnumber.value);
  // console.log(event.target.averagenumber.value);
  event.preventDefault();
  var selectTable = document.getElementsByTagName("table");
  var branchName = event.target.branchname.value;
  var maxSales = event.target.maxnumber.value;
  var minSales = event.target.minnumber.value;
  var averageSales = event.target.averagenumber.value;
  var alreadyHere = false;
  for (var i = 0; i < arrayOfObjects.length; i++) {
    if (branchName.toLowerCase() === arrayOfObjects[i].name.toLowerCase()) {
      alert(`${arrayOfObjects[i].name} already exist as a branch`);
      alreadyHere = true;
      break;
    }
  }
  if (!alreadyHere) {
    var newBranch = new Branches(branchName, maxSales, minSales, averageSales);
    // arrayOfObjects.push(newBranch);
    selectTable[0].innerHTML = " ";
    renderTable();
  }
});

// Selectors Ends
// Arrays Start
var arrayOfObjects = [];
var houersArray = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
// Arrays Ends
// Functions Starts

function generateNumbers(max, min) {
  var Array = [];
  for (var i = 0; i < houersArray.length; i++) {
    Array.push(randomNumber(max, min));
  }
  return Array;
}
function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// functions ends

function Branches(name, maxSales, minSales, averageSale) {
  this.name = name;
  this.numberOfCostumers = generateNumbers(maxSales, minSales);
  this.maxSales = maxSales;
  this.minSales = minSales;
  this.averageSale = averageSale;
  arrayOfObjects.push(this);
}

Branches.prototype.maxNumber = function () {
  return Math.max.apply(null, this.numberOfCostumers);
};
Branches.prototype.minNumber = function () {
  return Math.min.apply(null, this.numberOfCostumers);
};
Branches.prototype.averageSale = function () {
  var total = 0;
  for (var i = 0; i < this.numberOfCostumers.length; i++) {
    total += this.numberOfCostumers[i];
  }
  return (total / this.numberOfCostumers.length).toFixed(2);
};
var branch1 = new Branches("Seattle", 125, 5, 2.7);
// arrayOfObjects.push(branch1);
var branch2 = new Branches("Tokyo", 225, 25, 3.6);
// arrayOfObjects.push(branch2);
var branch3 = new Branches("Dubai", 350, 100, 6.5);
// arrayOfObjects.push(branch3);
var branch4 = new Branches("Paris", 400, 10, 3.2);
// arrayOfObjects.push(branch4);
var branch5 = new Branches("Lima", 500, 60, 3.5);
// arrayOfObjects.push(branch5);

function headerTimes() {
  createTable.setAttribute("border", "1");
  var newRow = document.createElement("tr");
  var title = document.createElement("th");
  title.textContent = "Branches Names";
  newRow.appendChild(title);
  createTable.appendChild(newRow);
  for (var i = 0; i < houersArray.length; i++) {
    var tableHead = document.createElement("th");
    var headText = document.createTextNode(`${houersArray[i]}`);
    tableHead.appendChild(headText);
    newRow.appendChild(tableHead);
  }
  var total = document.createElement("th");
  total.textContent = "Daily Location Total";
  newRow.appendChild(total);
  createTable.appendChild(newRow);
}

function assigneValues() {
  // assigne table content.
  for (var i = 0; i < arrayOfObjects.length; i++) {
    var row = document.createElement("tr");
    var data = document.createElement("td");
    data.textContent = arrayOfObjects[i].name;
    row.appendChild(data);
    var sum = 0;
    for (var j = 0; j < arrayOfObjects[0].numberOfCostumers.length; j++) {
      var content = document.createElement("td");
      content.textContent = arrayOfObjects[i].numberOfCostumers[j];
      row.appendChild(content);
      sum += arrayOfObjects[i].numberOfCostumers[j];
    }
    var sumResult = document.createElement("td");
    sumResult.textContent = sum;
    row.appendChild(sumResult);
    createTable.appendChild(row);
  }
  // assigne total values
}

function footerTotal() {
  var totalRow = document.createElement("tr");
  var total = document.createElement("td");
  total.textContent = "Total";
  totalRow.appendChild(total);
  var totalNumber = 0;
  for (var i = 0; i < houersArray.length; i++) {
    var numberOfCookies = 0;
    var content = document.createElement("td");
    for (var j = 0; j < arrayOfObjects.length; j++) {
      numberOfCookies += arrayOfObjects[j].numberOfCostumers[i];
    }
    totalNumber += numberOfCookies;
    content.textContent = numberOfCookies;
    totalRow.appendChild(content);
  }
  var finalnumber = document.createElement("td");
  finalnumber.textContent = totalNumber;
  totalRow.appendChild(finalnumber);
  createTable.appendChild(totalRow);
  brancheTable.appendChild(createTable);
}

function renderTable() {
  headerTimes();
  assigneValues();
  footerTotal();
}
renderTable();
