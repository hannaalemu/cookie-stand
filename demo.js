
/* eslint-disable no-unused-vars */
'use strict';

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var firstAndPike = new Store('first and pike', '23', '65', '6.3');
function Store(name, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalCookiesSold = 0;
  this.hourlyCookiesArray = [];
  // eslint-disable-next-line no-undef
  Store.list.push(this);

  Store.generateCookiesSold(this);
}
Store.list = [];

Store.prototype.getRandomInt = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
},

Store.generateCookiesSold = function (object) {
  for (var i = 0; i < times.length; i++) {
    var cookies = Math.floor(object.getRandomInt() * object.avgCookiesPerCustomer);
    object.hourlyCookiesArray.push(cookies);
    object.totalCookiesSold += cookies;
  }

};

Store.prototype.render = function () {
  var tableBody = document.getElementById('storeData');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = this.name;
  tableRow.appendChild(cell);

  for (var i = 0; i < this.hourlyCookiesArray.length; i++) {
    cell = document.createElement('td');
    cell.textContent = this.hourlyCookiesArray[i];
    tableRow.appendChild(cell);
  }


  cell = document.createElement('td');
  cell.textContent = this.totalCookiesSold;
  tableRow.appendChild(cell);

  tableBody.appendChild(tableRow);
};

var renderTimes = function () {
  var tableHead = document.getElementById('timeData');
  var tableRow = document.createElement('tr');

  var cell = document.createElement('td');
  cell.textContent = '';
  tableRow.appendChild(cell);

  for (var i = 0; i < times.length; i++) {
    cell = document.createElement('td');
    cell.textContent = times[i];
    tableRow.appendChild(cell);
    tableHead.appendChild(tableRow);
  }

  cell = document.createElement('td');
  cell.textContent = 'Daily Total';
  tableRow.appendChild(cell);

};


var firstAndPike = new Store('first and pike', '23', '65', '6.3');
var seattleAirport = new Store('Seattle Airport', '3', '24', '1.2');
var seattleCenter = new Store('Seattle Center', '11', '38', '3.7');
var capitolHill = new Store('Capitol Hill', '2', '16', '4.6');
var alki = new Store('Alki', '2', '16', '4.6');

//Render head of table...
renderTimes(times);
//render body of table..
for (var i = 0; i < Store.list.length; i++) {

  Store.list[i].render();
}


//creating events
var form = document.getElementById('myForm');
//document.getElementById('addStore').onclick;
form.addEventListener ('submit' , addNewStore);


function addNewStore (event) {
  event.preventDefault();
  // console.log(event);
  //console.log(event.target.name.value);
  var newName = event.target.name.value;
  var newMinCustomers =event.target.minCust.value;
  var newMaxCustomers =event.target.maxCust.value;
  var newAvgCookiesPerCustomer =event.target.avgCookie.value;

  new Store(newName, newMinCustomers, newMaxCustomers, newAvgCookiesPerCustomer );
  //console.log(Store.list);
  Store.list[Store.list.length-1].render();
}

