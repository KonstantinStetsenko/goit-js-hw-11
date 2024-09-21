/* empty css                      */import{S as d,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="35615577-2bf6ed1d70f9a1c328f0e4a49",h="https://pixabay.com/api/",l=document.querySelector(".users-list"),c=document.querySelector("input");document.querySelector(".gallery");let m=new d(".gallery a ",{captions:!0,captionsData:"alt",captionDelay:250});function f(){document.querySelector("form").addEventListener("submit",i=>{i.preventDefault();const r=c.value;l.innerHTML="",c.value="",g(r).then(s=>{const t=s.map(o=>`
          <li class="list-photo">
<div class="gallery">
    <a href="${o.largeImageURL}" class="gallery-item">
          <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
</div>
              <div class="container-total">
               <div class="item">
                <h2 class="head-photo">likes</h2>
                <p class="total-photo">${o.likes}</p>
                 </div>
                  <div class="item">
                <h2 class="head-photo">views</h2>
                 <p class="total-photo">${o.views}</p>
                </div>
                  <div class="item">
                <h2 class="head-photo">comments</h2>
                <p class="total-photo">${o.comments}</p>
                </div>
                  <div class="item">
                 <h2 class="head-photo">downloads</h2>
                 <p class="total-photo">${o.downloads}</p>
                 </div>
              </div>
               </div>
             </li>
          `).join("");l.insertAdjacentHTML("beforeend",t),m.refresh()})})}function p(){document.querySelector(".loader").classList.add("hidden")}function g(n){if(!n.trim())return a.warning({message:"Введите поисковый запрос.",backgroundColor:"#FF851B",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#FAFAFB",icon:"warning-outline",titleSize:16,messageLineHeight:24}),Promise.resolve([]);const i={q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return fetch(`${h}?key=${u}&q=${n}`,{method:"POST",body:i}).then(r=>{if(!r.ok)throw new Error("Что-то пошло не так");return r.json()}).then(r=>{p();const s=r.hits;return s.length===0&&a.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#0074D9",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#FAFAFB",icon:"info-outline",titleSize:16,messageLineHeight:24}),s})}f();
//# sourceMappingURL=index.js.map
