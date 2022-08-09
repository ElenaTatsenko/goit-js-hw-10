export default function renderCard(params, card) {
  const markup = params
    .map(
      ({
        name: { official },
        capital,
        population,
        flags: { svg },
        languages,
      }) => 
        `<div class="country-info__card"><img src="${svg}" alt="flag" width="30">
    <h1 class="country-info__main-title">${official}</h1></div>
    <ul class="country-info__list">
    <li class="country-info__item">
     <h2 class="country-info___title">Capital:</h2>
    <p class="country-info___description">${capital}</p>
    </li>
    <li class="country-info__item">
        <h2 class="country-info___title">Population:</h2>
     <p class="country-info___description">${population}</p>
    </li>
    <li class="country-info__item">
    <h2 class="country-info___title">Languages:</h2>
     <p class="country-info___description">${Object.values(languages)}</p></li>
    </ul>`
    )
    .join('');
  console.log(card)
  return (card.innerHTML = markup);
}

//function createCard(item) {
 //    return `<div class="country-info__card"><img src="${item.svg}" alt="flag" width="30">
 //   <h1 class="country-info__main-title">${item.official}</h1></div>
//    <ul class="country-info__list">
 //   <li class="country-info__item">
 //    <h2 class="country-info___title">Capital:</h2>
 //   <p class="country-info___description">${item.capital}</p>
 //   </li>
 //   <li class="country-info__item">
 //       <h2 class="country-info___title">Population:</h2>
 //    <p class="country-info___description">${item.population}</p>
//    </li>
//    <li class="country-info__item">
//    <h2 class="country-info___title">Languages:</h2>
//     <p class="country-info___description">${Object.values(item.languages)}</p></li>
 //   </ul>`
//}
//function genCont(array) {
//  array.reduce((acc, item) => acc + createCard(item), "")
//}

//export default function renderCard(array) {
//  const markup = genCont(array);
 // card.insertAdjacentHTML("beforeend", markup)
//}