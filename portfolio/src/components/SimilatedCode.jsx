import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;

.code {
  background-color: transparent;
  padding: 20px;
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 1.5;
}

.code code {
  display: block;
  color:#BCC9F1 ;
  font-size: 8px;
}

/* .code .function {
  color: #c678dd;
}

.code .class {
  color: #61afef;
}

.code .comment {
  color: #5c6370;
}

.code .number {
  color: #d19a66;
}

.code .method {
  color: #e06c75;
}

.code .keyword {
  color: #c678dd;
}

.code .string {
  color: #98c379;
} */

`


export const SimulatedCode = () => {
  const code = `
  const cities = [
    { name: "New York", population: 8175133, country: "USA", region: "North America" },
    { name: "Los Angeles", population: 3792621, country: "USA", region: "North America" },
    { name: "Chicago", population: 2695598, country: "USA", region: "North America" },
    { name: "London", population: 8787892, country: "UK", region: "Europe" },
    { name: "Tokyo", population: 13929286, country: "Japan", region: "Asia" },
    { name: "Beijing", population: 21516000, country: "China", region: "Asia" },
    { name: "Cairo", population: 20484965, country: "Egypt", region: "Africa" },
    { name: "São Paulo", population: 12325232, country: "Brazil", region: "South America" },
    { name: "Sydney", population: 5312163, country: "Australia", region: "Oceania" },
    { name: "Moscow", population: 12655050, country: "Russia", region: "Europe" },
  ];
  
  function getPopulationByRegion(region) {
    const citiesInRegion = cities.filter(city => city.region === region);
    const populationSum = citiesInRegion.reduce((acc, city) => acc + city.population, 0);
    return populationSum;
  }
  
  function getLargestCityInCountry(country) {
    const citiesInCountry = cities.filter(city => city.country === country);
    const largestCity = citiesInCountry.reduce((max, city) => (city.population > max.population ? city : max));
    return largestCity;
  }
  
  const totalPopulation = cities.reduce((acc, city) => acc + city.population, 0);
  
  console.log("Total population:", totalPopulation);
  console.log("Population in North America:", getPopulationByRegion("North America"));
  console.log("Population in Europe:", getPopulationByRegion("Europe"));
  
  const largestCityUSA = getLargestCityInCountry("USA");
  console.log("Largest city in USA:", largestCityUSA.name);
  
  const largestCityBrazil = getLargestCityInCountry("Brazil");
  console.log("Largest city in Brazil:", largestCityBrazil.name);
  
  `
  return(
    <Container>
      <pre className="code">
        <code>
          {code}
        </code>
      </pre>
    </Container>
  )
}