
export default function fetchCountries(name) {
  const params = 'name,capital,population,flags,languages';
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=${params}`).then(response => response.json());
}