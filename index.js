import{S as u,i as h}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();document.querySelector(".gallery");let f=new u(".gallery a ",{captions:!0,captionsData:"alt",captionDelay:250});function m(){if(n.length===0){console.log("Нет данных для отображения");return}const i=n.map(e=>`<li class="list-photo">
                <div class="gallery">
                  <a href="${e.largeImageURL}" class="gallery-item">
                    <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
                  </a>
                </div>
                <div class="container-total">
                  <div class="item">
                    <h2 class="head-photo">likes</h2>
                    <p class="total-photo">${e.likes}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">views</h2>
                    <p class="total-photo">${e.views}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">comments</h2>
                    <p class="total-photo">${e.comments}</p>
                  </div>
                  <div class="item">
                    <h2 class="head-photo">downloads</h2>
                    <p class="total-photo">${e.downloads}</p>
                  </div>
                </div>
              </li>`).join("");l.insertAdjacentHTML("beforeend",i),f.refresh()}const p="35615577-2bf6ed1d70f9a1c328f0e4a49",g="https://pixabay.com/api/";document.querySelector("input");function y(i){const e=i;return e?fetch(`${g}?key=${p}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(s.classList.add("loader"),!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{console.log("Ошибка:",r)}):(console.error("Поисковый запрос не определен"),Promise.reject(new Error("Поисковый запрос не определен")))}const l=document.querySelector(".users-list"),s=document.querySelector(".loader"),v=document.querySelector("form"),d=document.getElementById("searchInput");let n=[];document.addEventListener("DOMContentLoaded",function(){s.classList.remove("loader")});function L(){l&&(l.innerHTML="")}v.addEventListener("submit",i=>{s.classList.add("loader"),i.preventDefault();const e=d.value;if(!e){s.classList.remove("loader");return}s.classList.add("loader"),L(),y(e).then(r=>{if(r.hits.length===0){h.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ffa500",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#ffa500",icon:"info-outline",titleSize:16,messageLineHeight:24,position:"topRight"}),s.classList.remove("loader");return}s.classList.remove("loader"),n=r.hits,m()}),d.value="",s.classList.remove("loader")});
//# sourceMappingURL=index.js.map
