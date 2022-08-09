import './css/styles.css';
import { input, listEl, cardEl } from './refs';
import checkBeforeResult from './checkBeforeResult';
import fetchCountries from './fetchCountries';
import Notiflix from 'notiflix';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;



input.addEventListener('input', debounce(onInputRender, DEBOUNCE_DELAY));


function onInputRender(e) {
  const value = e.target.value.toLowerCase().trim();
  if (!value) {
    listEl.innerHTML = '';
    cardEl.innerHTML = '';
    return;
  }
  fetchCountries(value)
    .then(checkBeforeResult)
    .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'))
};