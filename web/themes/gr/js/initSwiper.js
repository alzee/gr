const swiper1 = new Swiper('.swiper.slide1', {
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper.slide2', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
});
