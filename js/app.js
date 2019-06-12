/* eslint-disable no-unused-vars */
'use strict';

var times = ['6am' , '7am' ,'8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm', '8pm'];

var locations = ['First and Pike' , 'Seattle Airport' , 'Seattle Center' , 'Capitol Hill' , 'Alki'];


function Store(name, minCustomers, maxCustomers, avgCookiesPerCustomer ){

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
// create functions that do one task at a time.....
//This will give us a random nummber between the min number of customers and max number of customers

Store.prototype.getRandomInt = function(maxCustomers, minCustomers) {

  return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);

},

Store.generateCookiesSold = function (object) {
  for (var i = 0; i< times.length; i++){
    var cookies = Math.floor(object.getRandomInt(object.maxCustomers, object.minCustomers) * object.avgCookiesPerCustomer);
    object.hourlyCookiesArray.push(cookies);
    object.totalCookiesSold += cookies;
  }

};

var firstAndPike = new Store('first and pike', '23', '65', '6.3');
var seattleAirport = new Store('Seattle Airport' , '3' , '24' , '1.2');
var seattleCenter = new Store('Seattle Center', '11', '38', '3.7');
var capitolHill = new Store('Capitol Hill', '2', '16', '4.6');
var alki =new Store('Alki', '2', '16', '4.6');

console.log(Store.list);

//creating a table that acceses the values in the array....

var renderTimes = function () {
  var tableHead = document.getElementById('timeData');
  var tableRow = document.createElement('tr');

  for (var i = 0; i<times.length; i++) {
    var cell = document.createElement('td');
    cell.textContent = times[i];
    tableRow.appendChild(cell);
    tableHead.appendChild(tableRow);
  }
};


Store.prototype.render = function () {
  var tableBody = document.getElementById('storeData');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = this.name;
  tableRow.appendChild(cell);
  cell = document.createElement('td');
  cell.textContent = this.hourlyCookiesArray;
  tableRow.appendChild(cell);
  cell = document.createElement('td');
  cell.textContent = this.totalCookiesSold;
  tableRow.appendChild(cell);
  tableBody.appendChild(tableRow);
};

for (var i = 0; i<Store.list.length; i++) {
  Store.list[i].render();
}
renderTimes(times);
