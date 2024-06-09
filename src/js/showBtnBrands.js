const swiperWrapperBrands = document.querySelector('.swiper-wrapper');
document.querySelector('.swiper-menu__toggle-button').addEventListener('click', function () {
  swiperWrapperBrands.classList.toggle('swiper-menu__slides-wrapper--expanded');
});