const selectionBtn = document.getElementById("selection-btn");
const countryName = document.getElementById("country-name");
const countryCapital = document.getElementById("country-capital");
const countryDescription = document.getElementById("country-description");

async function getCountry() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/alpha/col");
    if (response.ok) {
      const jsonResponse = await response.json();

      return jsonResponse;
    }
    throw new Error("The request to get the country info failed!");
  } catch (error) {
    console.log(error);
  }
}

async function filterData(dataFetcher) {
  const data = await dataFetcher();
  console.log(data);
  console.log(data[0].fifa);
  const {
    name: { official: officialName },
    capital,
    population,
  } = data[0];
  return { officialName, capital, population };
}

async function renderData(dataFilterer, dataFetcher) {
  const filteredData = await dataFilterer(dataFetcher);

  countryName.textContent = filteredData.officialName;
  countryCapital.textContent = filteredData.capital[0];
  countryDescription.textContent = `The ${filteredData.officialName} is a country located in South America. It has ${filteredData.population}. The capital is ${filteredData.capital[0]}.`;
  console.log(filteredData.officialName, filteredData.capital[0]);
}

selectionBtn.addEventListener("click", () => {
  renderData(filterData, getCountry);
});
