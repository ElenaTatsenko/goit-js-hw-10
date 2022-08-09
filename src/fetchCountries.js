
export default function fetchCountries(name) {
  const variables = 'name,capital,population,flags,languages';
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=${variables}`).then(response => response.json());
}