import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { API_KEY, BASE_URL } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import { hideLoader } from './js/render-functions';
export function getPhoto(searchTerm) {
  if (!searchTerm.trim()) {
    iziToast.warning({
      message: 'Введите поисковый запрос.',
      backgroundColor: '#FF851B',
      messageSize: 16,
      messageColor: '#FFF',
      iconColor: '',
      titleColor: '#FAFAFB',
      icon: 'warning-outline',
      titleSize: 16,
      messageLineHeight: 24,
    });
    return Promise.resolve([]); // Возвращаем пустой массив
  }

  const OPTIONS = {
    q: searchTerm,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  //   iziToast.show();
  function fetchSearch(searchQuary) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchTerm}`, {
      method: 'POST',
      body: OPTIONS,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Что-то пошло не так');
        }
        return response.json();
      })
      .then(data2 => {
        hideLoader();
        const arrData = data2.hits;
        if (arrData.length === 0) {
          // Массив пустой, выведите сообщение
          iziToast.show({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#0074D9',
            messageSize: 16,
            messageColor: '#FFF',
            iconColor: '',
            titleColor: '#FAFAFB',
            icon: 'info-outline',
            titleSize: 16,
            messageLineHeight: 24,
          });
        }

        return arrData;
      });
  }
}

fetchSearch(OPTIONS.q);
renderGallery();
