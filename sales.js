var bracnh1div = document.getElementById("branch1");
var bracnh2div = document.getElementById("branch2");
var bracnh3div = document.getElementById("branch3");

var branch1Costumers = [];
var branch2Costumers = [];
var branch3Costumers = [];
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

var finalArrayB1 = [];
var finalArrayB1 = [];
var finalArrayB1 = [];

function assigneValues(branch, branchdiv) {
  var h3 = document.createElement("h3");
  var h3Text = document.createTextNode(branch.name);
  h3.appendChild(h3Text);
  branchdiv.appendChild(h3);
  var sum = 0;
  var ul = document.createElement("ul");
  for (var i = 0; i < branch.numberOfCostumers.length; i++) {
    var li = document.createElement("li");
    var text = document.createTextNode(
      `${houersArray[i]} : ${branch.numberOfCostumers[i]} cookies`
    );
    li.appendChild(text);
    ul.appendChild(li);
    sum += branch.numberOfCostumers[i];
  }
  var text = document.createTextNode(`Total : ${sum} cookies`);
  var li = document.createElement("li");
  li.appendChild(text);
  ul.appendChild(li);
  branchdiv.appendChild(ul);
}
generateNumbers();

function randomNumber() {
  var min = 1;
  var max = 200;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateNumbers() {
  for (var i = 0; i < houersArray.length; i++) {
    branch1Costumers.push(randomNumber());
    branch2Costumers.push(randomNumber());
    branch3Costumers.push(randomNumber());
  }
}

var branch1 = {
  name: "Amman",
  numberOfCostumers: branch1Costumers,
  maxNumber: function () {
    return Math.max.apply(null, this.numberOfCostumers);
  },
  minNumber: function () {
    return Math.min.apply(null, this.numberOfCostumers);
  },
  averageSale: function () {
    var total = 0;
    for (var i = 0; i < this.numberOfCostumers.length; i++) {
      total += this.numberOfCostumers[i];
    }
    return (total / this.numberOfCostumers.length).toFixed(2);
  },
};
assigneValues(branch1, bracnh1div);

var branch2 = {
  name: "Zarqa",
  numberOfCostumers: branch2Costumers,
  maxNumber: function () {
    return Math.max.apply(null, this.numberOfCostumers);
  },
  minNumber: function () {
    return Math.min.apply(null, this.numberOfCostumers);
  },
  averageSale: function () {
    var total = 0;
    for (var i = 0; i < this.numberOfCostumers.length; i++) {
      total += this.numberOfCostumers[i];
    }
    return (total / this.numberOfCostumers.length).toFixed(2);
  },
};
assigneValues(branch2, bracnh2div);

var branch3 = {
  name: "Irbid",
  numberOfCostumers: branch3Costumers,
  maxNumber: function () {
    return Math.max.apply(null, this.numberOfCostumers);
  },
  minNumber: function () {
    return Math.min.apply(null, this.numberOfCostumers);
  },
  averageSale: function () {
    var total = 0;
    for (var i = 0; i < this.numberOfCostumers.length; i++) {
      total += this.numberOfCostumers[i];
    }
    return (total / this.numberOfCostumers.length).toFixed(2);
  },
};
assigneValues(branch3, bracnh3div);
