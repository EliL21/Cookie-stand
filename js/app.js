'use strict';

// *********** GLOBALS **************
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let eachStore = [];
//  ********** DOM WINDOWS **************

// STEP 1: WINDOW INTO DOM

// ********** HELPER FUNCTIONS / UTILITIES *************
// math.rdm from MDN website

function averageCookie(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);

}

// ********** OBJECT LITERALS ***************
let seattle = {
  name: 'Seattle'
  hours: 0,
  min: 23,
  max: 65,
  avgSale: 6.3,
  averageCookie = [];
  averageCookie: function () {
    this.avgSale = averageCookie(23, 65);
    
  }
}
let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgSale: 1.2,
  getPurchase: function () {
    this.avgSale = averageCookie(3, 24)
  }
}
let dubai = {
  name: 'Dubai'
  min: 3,
  max: 38,
  avgSale: 3.7,
  getPurchase: function () {
    this.avgSale = averageCookie(3, 24)
  }
}
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avgSale: 2.3,
  getPurchase: function () {
    this.avgSale = averageCookie(3, 24)
  }
}
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avgSale: 4.6,
  getPurchase: function () {
    this.avgSale = averageCookie(3, 24)
  }
}
// ****** DOM MANIPULATION ********
//  STEP 2: Create an element
render:

// ********** EXECUTABLE CODE *******************
tokyo.averageCookie();
for (.eachStore)
console.log(tokyo);