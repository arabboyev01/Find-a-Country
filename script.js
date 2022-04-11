"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector("#countries");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search");


const getCountry = function (country) {
const requests = new XMLHttpRequest();
requests.open("GET", `https://restcountries.com/v2/name/${country}`);
requests.send();

console.log(requests.responseText);
requests.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  const html = `<article class="country">
          <img class="country__img" src="${data.flag}"> 
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
  console.log(html);
});
};

searchBtn.addEventListener("click", function(e) {
    e.preventDefault();
    getCountry(searchInput.value);
})

///////////////////////////////////////
