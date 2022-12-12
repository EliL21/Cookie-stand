'use strict';


// *********** GLOBALS **************
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let eachStore = [];
let table = document.getElementById('eachStore');
let form = document.getElementById('form');
// ******** Constructor ******************
// form.addEventListener('submit',handlesubmit);


// function handlesubmit(event){
//   event.preventdefault();
//   console.log('formsubmitted');
//   let location = event.target.
// }



function Cookies(name, min, max, avgSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.cookiePurchase = [];
  this.total = 0;



}

// ******* PROTOTYPES***********
Cookies.prototype.randomCustomer = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

};

Cookies.prototype.coookiesales = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiesNeeded = Math.floor(this.randomCustomer() * this.avgSale);
    console.log(cookiesNeeded);
    this.cookiePurchase.push(cookiesNeeded);
    console.log(this.cookiePurchase);
    this.total = Math.floor(this.total + cookiesNeeded);
  }
};

Cookies.prototype.render = function () {
  console.log('inside render');
  // let tableElem =document.createElement('table');
  // mainElem.appendChild(tableElem);

  let trElem = document.createElement('tr');


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
  table.appendChild(trElem);
};

function header() {
  let theadElem = document.createElement('thead');
  table.appendChild(theadElem);

  let trElem = document.createElement('tr');
  theadElem.appendChild(trElem);

  let nameElem = document.createElement('th');
  nameElem.textContent = 'Stores';
  trElem.appendChild(nameElem);

  for (let i = 0; i < hours.length; i++) {
    let hourElem = document.createElement('th');
    hourElem.textContent = hours[i];
    trElem.appendChild(hourElem);
  }

  let totalHours = document.createElement('th');
  totalHours.textContent = 'Total';
  trElem.appendChild(totalHours);
}

// // ********** EXECUTABLE CODE ******************
let Seattle = new Cookies('Seattle', 23, 65, 6.3);
let Tokyo = new Cookies('Tokyo', 3, 24, 1.2);
let Dubai = new Cookies('Dubai', 11, 38, 3.7);
let Paris = new Cookies('Paris', 20, 38, 2.3);
let Lima = new Cookies('Lima', 2, 16, 4.6);
eachStore.push(Seattle, Tokyo, Dubai, Paris, Lima);

function renderALL() {
  for (let i = 0; i < eachStore.length; i++) {

    eachStore[i].coookiesales();
    eachStore[i].render();
    console.log(eachStore);
  }
}

header();
renderALL();
