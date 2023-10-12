/* 
Inspiration: 
1. https://dribbble.com/shots/20496031-Discover-rare-Indian-treasure-NFTs-Landing-Page
*/

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
