import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

if (window.matchMedia("(max-width: 767px)").matches) {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
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
}