$(document).ready(function () {
  //слайдер картинок
  new Swiper ('.js-detail-slider', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2
    }
  }
  });
});

$(document).on('click', '.js-tab', function () {
  $('.js-tab').removeClass('is-active');
  $(this).addClass('is-active');
  $('.detail-tab').removeClass('is-active');
  $('.detail-tab[data-target="'+$(this).attr("data-href")+'"]').addClass('is-active');
});
