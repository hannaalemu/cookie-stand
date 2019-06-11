/* eslint-disable no-unused-vars */
'use strict';

var times = ['6am' , '7am' ,'8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm', '8pm'];

var locations = ['First and Pike' , 'Seattle Airport' , 'Seattle Center' , 'Capitol Hill' , 'Alki'];

var table = document.getElementById('locations');
for (let i=0; i < locations.length; i++) {
  // eslint-disable-next-line no-redeclare
  var newItem = document.createElement('li');

  newItem.textContent = locations[i];

  table.appendChild(newItem);

}

var timeList = document.getElementById('customers');
for (let i=0; i < times.length; i++) {
  // eslint-disable-next-line no-redeclare
  var newItem = document.createElement('li');

  newItem.textContent = times[i];

  timeList.appendChild(newItem);

}

var firstAndPike = {

  minCustomers : 23,
  maxCustomers : 65,
  avgCookiesPerCustomer : 6.3,

  getRandomInt: function() {

    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);

  }
};

console.log(firstAndPike.getRandomInt());


var seattleAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,


  getRandomInt : function () {
    return Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }


};

console.log(seattleAirport.getRandomInt());

var seattleCenter = {
  minCustomers : 11,
  maxCustomers : 38,
  avgCookiesPerCustomer : 3.7,

  getRandomInt : function () {
    return Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }

};
console.log(seattleCenter.getRandomInt());

var capitolHill = {
  minCustomers : 20,
  maxCustomers : 38,
  avgCookiesPerCustomer : 2.3,

  getRandomInt : function () {
    return Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }

};

console.log(capitolHill.getRandomInt());

var alki = {
  minCustomers : 2,
  maxCustomers : 16,
  avgCookiesPerCustomer : 4.6,

  getRandomInt : function () {
    return Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }

};

console.log(alki.getRandomInt());

var custNumsAll = document.getElementById('customerNum');
custNumsAll.textContent =alki.getRandomInt();






