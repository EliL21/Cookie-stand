'use strict';
console.log('hello world');

// *********** GLOBALS **************
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let eachStore = [];
let table = document.getElementById('table');
//  ********** DOM WINDOWS **************

// STEP 1: WINDOW INTO DOM
// TODO: STORE IN ARRAY
// TODO: CREATE FOR LOOP WHERE COOKIES FOR EACH HOUR FOR EACH LOCATION USING avgSale 6.3 and randomCus GENERATED

// ********** HELPER FUNCTIONS / UTILITIES *************
// math.rdm from MDN website
function Cookies(name, min, max, avgSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.cookiePurchase = [];
  this.total = 0;



}

Cookies.prototype.randomCustomer = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

};

Cookies.prototype.coookiesales = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiesNeeded = Math.floor(this.randomCustomer() * this.avgSale);
    console.log(cookiesNeeded);
    this.avgSale.push(cookiesNeeded);
    this.total = Math.floor(this.total + cookiesNeeded);

  }
};
Cookies.prototype.render = function () {
  console.log('inside render');
  // this.cookiesales();
  //**** Doc manipulation ******

  let trElem = document.createElement('tr');
  table.appendChild(trElem);


  let nameElem = document.createElement('td');
  nameElem.textContent = this.name;
  trElem.appendChild(nameElem);

  for (let i = 0; i < hours.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookiePurchase[i];
    trElem.appendChild(tdElem);
  }

  let totalHours = document.createElement('td');
  totalHours.textContent = this.total;
  trElem.appendChild(totalHours);
};

function header() {
  let table = document.getElementById('table');

  let trElem = document.createElement('tr');
  table.appendChild(trElem);

  let thead = document.createElement('thead');
  trElem.appendChild(thead);

  let nameElem = document.createElement('th');
  nameElem.textContent = 'Stores';
  thead.appendChild(nameElem);

  for (let i = 0; i < hours.length; i++) {
    let hourElem = document.createElement('th');
    hourElem.textContent = hours[i];
    thead.appendChild(hourElem);
  }

  let totalHours = document.createElement('th');
  totalHours.textContent = 'Total';
  thead.appendChild(totalHours);
}

// // ********** EXECUTABLE CODE ******************
let Seattle = new Cookies('Seattle', 23, 65, 6.3);
let Tokyo = new Cookies('Tokyo', 3, 24, 1.2);
let Dubai = new Cookies('Dubai', 11, 38, 3.7);
let Paris = new Cookies('Paris', 20, 38, 2.3);
let Lima = new Cookies('Lima', 2, 16, 4.6);

eachStore.push(Seattle, Tokyo, Dubai, Paris, Lima);

function renderALL() {
  for (let i = 0; i < eachStore.length; i++)
    eachStore[i].render();
}

header();
renderALL();
