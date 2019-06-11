/* eslint-disable no-unused-vars */
'use strict';

var times = ['6am' , '7am' ,'8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm', '8pm'];

var locations = ['First and Pike' , 'Seattle Airport' , 'Seattle Center' , 'Capitol Hill' , 'Alki'];


var store1 ={
  name : 'First and Pike',
  minCustomers : 23,
  maxCustomers : 65,
  avgCookiesPerCustomer : 6.3,
  totalCOokiesSold:[],
  totalCookies : 0,

  getRandomInt: function() {

    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);

  },

  cookiesPerhour : function() {
    return Math.floor(this.getRandomInt(this.minCustomers, this.maxCustomers) * this.avgCookiesPerCustomer);

  },
  render : function() {
    var divElement = document.getElementById('store data');
    var storeName = document.createElement('h3');
    storeName.textContent + this.name;
    divElement.appendChild(storeName);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);

    for (var i = 0; i< times.length; i++){
      console.log(`${times[i]} : ${this.cookiesPerhour()}`);
      var hourData = document.createElement('li');
      var cookiesSoldPerhour = this.cookiesPerhour();
      hourData.textContent = `${times[i]} : ${cookiesSoldPerhour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookies += cookiesSoldPerhour;
      console.log(this.totalCOokiesSold);

    }

    var totalSoldToday = document.createElement('li');
    totalSoldToday.textContent = `Total : ${this.totalCookies} cookies`;
    storeData.appendChild(totalSoldToday);


  }
};

store1.render();


// var store2 ={
//   name : 'Seattle Airport',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiesPerCustomer : 1.2,
//   cookiesSoldPerHour :[],
//   render : function() {
//     Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//   }
// };

// var store3 ={
//   name : 'Seattle Center',
//   minCustomers : 11,
//   maxCustomers : 38,
//   avgCookiesPerCustomer : 3.7,
//   cookiesSoldPerHour :[],
//   render : function() {
//     Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//   }
// };

// var store4 ={
//   name : 'Capitol Hill',
//   minCustomers : 2,
//   maxCustomers : 16,
//   avgCookiesPerCustomer : 4.6,
//   cookiesSoldPerHour :[],


//   render : function() {
//     Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//   }
// };

// var store5 ={
//   name : 'Alki',
//   minCustomers : 2,
//   maxCustomers : 16,
//   avgCookiesPerCustomer : 4.6,
//   cookiesSoldPerHour :[],


//   render : function() {
//     Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//   }

