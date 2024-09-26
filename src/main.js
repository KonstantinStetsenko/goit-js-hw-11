import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { fetchGallery } from './js/pixabay-api';
import { searchTerm } from './js/pixabay-api';
export let search = '';
const loader = document.querySelector('.loader');

export const form = document.querySelector('form');
const searchInput = document.getElementById('searchInput');
export let arrData = []; // Массив данных
document.addEventListener('DOMContentLoaded', function () {
  loader.classList.remove('loader');
});

// Обработчик события при отправке формы

// loader.classList.remove('loader');
form.addEventListener('submit', event => {
  loader.classList.add('loader');
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  // Показываем loader

  // Получаем значение из поля ввода
  const search = searchInput.value;

  if (!search) {
    loader.classList.remove('loader');
    // Если поле пустое, не показываем loader
    return;
  }

  loader.classList.add('loader'); // Показываем loader
  // iziToast.warning();
  fetchGallery(search)
    .then(response => {
      loader.classList.add('loader');
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#ffa500',
          messageSize: 16,
          messageColor: '#FFF',
          iconColor: '',
          titleColor: '#ffa500',
          icon: 'info-outline',
          titleSize: 16,
          messageLineHeight: 24,
          position: 'topRight',
        });

        loader.classList.remove('loader');
        return;
      }
      loader.classList.remove('loader');
      arrData = data.hits; // Сохраняем данные

      renderGallery(arrData);
    })
    .catch(error => {
      console.log('Ошибка:', error);
    });
  searchInput.value = '';
  // loader.classList.remove('loader');
});

import { renderGallery } from './js/render-functions';
export const userConteinerUL = document.querySelector('.users-list');
