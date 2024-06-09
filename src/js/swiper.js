import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function createSwiper(containerClass) {
  return new Swiper(`.${containerClass}`, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 16,

    // If we need pagination
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
}