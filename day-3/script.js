const mainWrapper = document.getElementById("wrapper");

//GET 12 RANDOM COUNTRIES.
//a. get all countries.
//b. get 12 random.
//filter properties?
//c. those 12 in an array are my data.

//RENDER.
//a. .map() el array.

async function getCountry() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (response.ok) {
      const jsonResponse = await response.json();
      //   console.log(jsonResponse);
      return jsonResponse;
    }
    throw new Error("The request to get the countries info failed!");
  } catch (error) {
    console.log(error);
  }
}

async function filterData(dataFetcher) {
  const allCountries = await dataFetcher();
  let twelveRandomCountries = [];

  for (let i = 0; i < 12; i++) {
    let randomNum = Math.floor(Math.random() * 250);
    twelveRandomCountries.push(allCountries[randomNum]);
  }

  let filtered12Countries = twelveRandomCountries.map((fullFledgedCountry) => {
    const {
      name: { common: commonName, official: officialName },
      flags: { svg: flag },
      area,
      population,
      subregion,
    } = fullFledgedCountry;

    const [capital] = fullFledgedCountry.capital;

    let filteredCountry = {
      commonName,
      officialName,
      capital,
      flag,
      area,
      population,
      subregion,
    };

    return filteredCountry;
  });
  //   console.log(filtered12Countries);
  return filtered12Countries;
}

async function renderData(dataFetcher, dataFilterer) {
  const selectedCountries = await dataFilterer(dataFetcher);

  let cardsHTML = selectedCountries.map((country) => {
    return `<article class="card">
          <img src="${country.flag}" alt="${country.commonName}" />
          <div class="card__content">
            <div class="country__info">
              <h2>${country.commonName}</h2>
              <h4>Capital: ${country.capital}</h4>
            </div>
            <p>
              ${country.officialName} is a beautiful country in ${country.subregion}. There are ${country.population} people.
            </p>
            <h4>Area: ${country.area} km2</h4>
            <p class="card_link">
              <a
                href="https://en.wikipedia.org/w/index.php?search=${country.commonName}&title=Special%3ASearch&go=Go"
                target="_blank">Read more</a
              >
            </p>
          </div>
        </article>`;
  });
  mainWrapper.innerHTML = cardsHTML.join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderData(getCountry, filterData);
});
