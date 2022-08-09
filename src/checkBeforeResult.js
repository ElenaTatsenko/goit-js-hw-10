import Notiflix from 'notiflix';
import renderCard from './renderCard';
import renderList from './renderList';
import { listEl, cardEl } from './refs';


export default function checkBeforeResult(list) {
  if (list.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (1 < list.length & list.length <= 10) {
    listEl.innerHTML = '';
    cardEl.innerHTML = '';
    renderList(list, listEl);
  } else {
    listEl.innerHTML = '';
    cardEl.innerHTML = '';
    renderCard(list, cardEl);
    return;
  }
}