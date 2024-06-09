/* import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
function createSwiper(containerClass) {
  console.log(document.querySelector(`.${containerClass}`))
  return new Swiper(`.${containerClass}`, {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 16,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    }
  });
}

if (window.matchMedia("(max-width: 767px)").matches) {
  createSwiper('swiper-brands');
  createSwiper('swiper-technika');
  createSwiper('swiper-price');
} */