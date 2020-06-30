var slider_1 = $('.js-detail-slider-1');

var slider_2 = $('.js-detail-slider-2');

var slider_3 = $('.js-detail-slider-3');

//прогресс-бар
function setProgress(index, slider) {
  var calc = ((index + 1) / (slider.slick('getSlick').slideCount)) * 100;

  $('.progress[data-progress="'+ slider.attr("data-progress") +'"]').css('background-size', `${calc}% 100%`).attr('aria-valuenow', calc);
}

$(document).ready(function () {
  //главный слайдер картинок
  if (slider_1.length) {
    slider_1.slick({
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      appendArrows: $('.detail__images-nav'),
      prevArrow: '<button class="button-prev" title="Назад"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_prev" /></svg></button>',
      nextArrow: '<button class="button-next" title="Вперед"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_next" /></svg></button>',
      draggable: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });

    slider_1.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      setProgress(nextSlide, slider_1);
    });

    setProgress(0, slider_1);
  }

  //слайдер в табе "описание"
  if (slider_2.length) {
    slider_2.slick({
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      prevArrow: '<button class="button-prev" title="Назад"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_prev" /></svg></button>',
      nextArrow: '<button class="button-next" title="Вперед"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_next" /></svg></button>',
      draggable: true
    });

    slider_2.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      setProgress(nextSlide, slider_2);
    });

    setProgress(0, slider_2);
  }

  //слайдер в табе "детали"
  if (slider_3.length) {
    slider_3.slick({
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: '<button class="button-prev" title="Назад"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_prev" /></svg></button>',
      nextArrow: '<button class="button-next" title="Вперед"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_next" /></svg></button>',
      draggable: true,
      responsive: [
        {
          breakpoint: 599,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1399,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 2499,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        }
      ]
    });

    slider_3.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      setProgress(nextSlide, slider_3);
    });

    setProgress(0, slider_3);
  }
});

$(document).on('click', '.js-tab', function () {
  $('.js-tab').removeClass('is-active');
  $(this).addClass('is-active');
  $('.detail-tab').removeClass('is-active');
  $('.detail-tab[data-target="'+$(this).attr("data-href")+'"]').addClass('is-active');
  //апдейтим slick после того как он был скрыт
  slider_2.slick('setPosition');
  slider_3.slick('setPosition');
});
