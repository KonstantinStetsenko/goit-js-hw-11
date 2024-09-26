import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
let Lightbox = new SimpleLightbox('.gallery a ', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

import { arrData } from '../main';

const userContainerUL = document.querySelector('.users-list');

export function renderGallery() {
  userContainerUL.innerHTML = '';

  // Если массив данных пуст, выводим сообщение
  if (arrData.length === 0) {
    console.log('Нет данных для отображения');

    return;
  }

  // Создаем разметку для элементов
  const markup = arrData
    .map(data2 => {
      return `<li class="list-photo">
                <div class="gallery">
                  <a href="${data2.largeImageURL}" class="gallery-item">
                    <img src="${data2.webformatURL}" alt="${data2.tags}" loading="lazy" />
                  </a>
                </div>
                <div class="container-total">
                  <div class="item">
                    <h2 class="head-photo">likes</h2>
                    <p class="total-photo">${data2.likes}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">views</h2>
                    <p class="total-photo">${data2.views}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">comments</h2>
                    <p class="total-photo">${data2.comments}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">downloads</h2>
                    <p class="total-photo">${data2.downloads}</p>
                  </div>
                </div>
              </li>`;
    })
    .join('');

  // Вставляем разметку в контейнер
  userContainerUL.insertAdjacentHTML('beforeend', markup);
  Lightbox.refresh();
}
