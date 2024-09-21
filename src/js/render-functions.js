import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhoto } from '../main';

const userConteinerUL = document.querySelector('.users-list');

const input = document.querySelector('input');
const gallery = document.querySelector('.gallery');
let Lightbox = new SimpleLightbox('.gallery a ', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderGallery() {
  const form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = input.value; // Получаем поисковый запрос от пользователя
    userConteinerUL.innerHTML = ''; // Очищаем контейнер перед новым запросом
    input.value = '';

    getPhoto(searchTerm).then(data => {
      const originalArray = data;

      const arrDataHTML = originalArray
        .map(
          data1 => `
          <li class="list-photo">
<div class="gallery">
    <a href="${data1.largeImageURL}" class="gallery-item">
          <img src="${data1.webformatURL}" alt="${data1.tags}" loading="lazy" />
</div>
              <div class="container-total">
               <div class="item">
                <h2 class="head-photo">likes</h2>
                <p class="total-photo">${data1.likes}</p>
                 </div>
                  <div class="item">
                <h2 class="head-photo">views</h2>
                 <p class="total-photo">${data1.views}</p>
                </div>
                  <div class="item">
                <h2 class="head-photo">comments</h2>
                <p class="total-photo">${data1.comments}</p>
                </div>
                  <div class="item">
                 <h2 class="head-photo">downloads</h2>
                 <p class="total-photo">${data1.downloads}</p>
                 </div>
              </div>
               </div>
             </li>
          `
        )
        .join('');
      userConteinerUL.insertAdjacentHTML('beforeend', arrDataHTML);
      Lightbox.refresh();
    });
  });
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}
