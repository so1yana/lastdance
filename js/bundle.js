!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6);var i=document.querySelector(".page"),r=document.querySelector(".page__burger"),c=document.querySelector(".modal-bg"),s=document.querySelector(".modal-feedback"),o=document.querySelector(".modal-call"),a=document.querySelector(".modal-close-button-container"),d=document.querySelectorAll(".circle-button-chat"),l=document.querySelectorAll(".circle-button-call"),u=document.querySelector(".burger-backdrop"),v=document.querySelector(".circle-button-burger"),b=document.querySelector(".circle-button-close"),m=document.querySelectorAll(".expand-button"),p=document.querySelector(".service__text-text"),f=document.querySelector(".brands__swiper"),_=document.querySelector(".equipment__swiper"),g=document.querySelectorAll(".service__slide-button"),L=document.querySelectorAll(".burger__nav-item"),h=function(){c.classList.remove("modal-bg--hidden"),s.classList.remove("modal--hidden"),a.classList.remove("circle-button--hidden"),i.classList.add("modal--active")},w=function(){s.classList.add("modal--hidden"),c.classList.add("modal-bg--hidden"),a.classList.add("circle-button--hidden"),i.classList.remove("modal--active")},y=function(){c.classList.remove("modal-bg--hidden"),o.classList.remove("modal--hidden"),a.classList.remove("circle-button--hidden"),i.classList.add("modal--active")},S=function(){o.classList.add("modal--hidden"),c.classList.add("modal-bg--hidden"),a.classList.add("circle-button--hidden"),i.classList.remove("modal--active")},q=function(){r.classList.remove("burger--hidden"),u.classList.remove("burger-backdrop--hidden"),i.classList.add("burger--active")},k=function(){r.classList.add("burger--hidden"),u.classList.add("burger-backdrop--hidden"),i.classList.remove("burger--active")};c.addEventListener("click",(function(e){s.classList.contains("modal--hidden")&&S(),o.classList.contains("modal--hidden")&&w()})),u.addEventListener("click",(function(e){window.screen.width>=1440||this===e.target&&k()})),v.addEventListener("click",q),b.addEventListener("click",k),a.addEventListener("click",(function(){s.classList.contains("modal--hidden")&&S(),o.classList.contains("modal--hidden")&&w()}));for(var x=0;x<d.length;x++)d[x].addEventListener("click",h);for(var E=0;E<l.length;E++)l[E].addEventListener("click",y);for(var C=function(){window.screen.width>=1440?q():k()},M=function(e){e.addEventListener("click",(function(){for(var t=0;t<g.length;t++){var n=g[t];n.classList.contains("service__slide-button--active")&&n.classList.remove("service__slide-button--active")}e.classList.add("service__slide-button--active")}))},P=0;P<g.length;P++)M(g[P]);for(var j=function(e){e.addEventListener("click",(function(){for(var t=0;t<L.length;t++){var n=L[t];n.classList.contains("burger__nav-item--active")&&n.classList.remove("burger__nav-item--active")}e.classList.add("burger__nav-item--active")}))},O=0;O<L.length;O++)j(L[O]);var A=function(e){var t=this.querySelector(".expand-button__text").textContent,n="Показать все";this.classList.contains("service__expand-button")?(n="Читать далее",p.classList.toggle("service__text--cutted")):this.classList.contains("brands__expand-button")?f.classList.toggle("brands__swiper--cutted"):this.classList.contains("equipment__expand-button")&&_.classList.toggle("equipment__swiper--cutted"),this.querySelector(".expand-button__text").textContent="Читать далее"===t||"Показать все"===t?"Скрыть":n,this.querySelector(".expand-button__icon").classList.toggle("expand-button__icon--reverse")};window.matchMedia("(min-width:1440px)").addListener(C),C();for(var B=0;B<m.length;B++)m[B].addEventListener("click",A);console.log("Works!")},function(e,t,n){},function(e,t){new Swiper(".brands__swiper",{freeMode:!1,slidesPerView:"auto",spaceBetween:0,grabCursor:!1,preventClicks:!0,pagination:{el:".swiper-pagination",clickable:!0}})},function(e,t){new Swiper(".equipment__swiper",{freeMode:!1,slidesPerView:"auto",spaceBetween:0,grabCursor:!1,preventClicks:!0,pagination:{el:".swiper-pagination",clickable:!0}})},function(e,t){new Swiper(".service__swiper",{freeMode:!1,slidesPerView:"auto",spaceBetween:0,grabCursor:!1,preventClicks:!0,focusableElements:"div",direction:"horizontal"})},function(e,t){new Swiper(".prices__swiper",{freeMode:!1,slidesPerView:"auto",spaceBetween:0,grabCursor:!1,preventClicks:!0,pagination:{el:".swiper-pagination",clickable:!0}})}]);
//# sourceMappingURL=bundle.js.map