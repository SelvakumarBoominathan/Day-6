// RESt countries data fetch

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = function () {
  if (xhr.status === 200) {
    const countriesData = JSON.parse(xhr.responseText);




    //Get all the countries from Asia continent/region using Filter function
    const asianCountries = countriesData.filter((country) => country.region === "Asia");
    const asianCountrynames = asianCountries.map((country) => country.name.common);
    console.log("Countries in Asia:", asianCountrynames);



    //Get all the countries with a population of less than 2 lakhs using Filter function
    const lessThan2LakhPopulation = countriesData.filter((country) => country.population < 200000);
    const countryNames = lessThan2LakhPopulation.map((country) => country.name.common);
    console.log("Countries with population less than 2 lakhs:", countryNames);



    //Print the following details name, capital, flag, using forEach function
    countriesData.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.png);
      console.log("---------------------------");
    });




    //Print the total population of countries using reduce function
    const totalPopulation = countriesData.reduce((acc, country) => acc + country.population, 0);
    console.log("Total Population of Countries:", totalPopulation);




    //Print the country that uses US dollars as currency
    const USDCountries = countriesData
      .filter((country) => country.currencies && country.currencies.USD)
      .map((country) => country.name.common);

    console.log("Countries using US Dollars:", USDCountries);
  }
};
xhr.send();  // to send request