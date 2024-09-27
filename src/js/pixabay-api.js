import { loader } from '../main';
import { searchInput } from '../main';
const API_KEY = '35615577-2bf6ed1d70f9a1c328f0e4a49';
const BASE_URL = 'https://pixabay.com/api/';
import { search } from '../main';
const input = document.querySelector('input');
export let searchTerm = search;
import { form } from '../main';

import { renderGallery } from './render-functions';

const options = {
  method: 'GET',
};

export function fetchGallery(search) {
  const query = search;
  if (!query) {
    console.error('Поисковый запрос не определен');
    return Promise.reject(new Error('Поисковый запрос не определен'));
  }

  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      loader.classList.add('loader');
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .catch(error => {
      console.log('Ошибка:', error);
    });
}
