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
