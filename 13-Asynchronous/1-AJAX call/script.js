'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/// old way
const getCountryData = function (country){
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
request.send();

request.addEventListener('load', function(){
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = `
     <article class="country">
    <img src="${data.flags.png}" class="country__img" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
   </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
})
};
getCountryData('india');
getCountryData('China');
getCountryData('pakistan');

///////
//promises & fetch API
//modern way
// const request = new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// request.send();
const request = fetch('https://restcountries.com/v3.1/name/india');
console.log(request);

//pending : before the future value is available
//settled : asynchronous task has finished :- fulfilled or rejected
const renderCountry = function (data,className = ''){
  const html = `
     <article class="country">
    <img src="${data.flags.png}" class="country__img" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
    </div>
   </article>
  `;
}
const getCountryDatas = function(country){
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(response => response.json())
  .then(data => renderCountry(data[0]));
};
getCountryDatas('india');

