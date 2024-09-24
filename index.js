import{S as c,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n=document.querySelector(".users-list"),a=document.querySelector("input");document.querySelector(".gallery");let u=new c(".gallery a ",{captions:!0,captionsData:"alt",captionDelay:250});function m(){document.querySelector("form").addEventListener("submit",r=>{r.preventDefault();const l=a.value;n.innerHTML="",a.value="",p(l).then(s=>{const t=s.map(o=>`
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
          `).join("");n.insertAdjacentHTML("beforeend",t),u.refresh()})})}function p(i){if(!i.trim())return d.warning({message:"Введите поисковый запрос.",backgroundColor:"#FF851B",messageSize:16,messageColor:"#FFF",iconColor:"",titleColor:"#FAFAFB",icon:"warning-outline",titleSize:16,messageLineHeight:24}),Promise.resolve([])}fetchSearch(OPTIONS.q);m();
//# sourceMappingURL=index.js.map
