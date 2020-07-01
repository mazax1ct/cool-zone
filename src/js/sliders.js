//сопутствующие товары, бестселлеры
var slider_4 = $('.js-slider-type1');
var slider_4_qnt = slider_4.find('.slider__slide').length;

//вы недавно смотрели
var slider_5 = $('.js-slider-type2');
var slider_5_qnt = slider_5.find('.slider__slide').length;

function hideProgress() {
  if($('body').width() < 992) {
    if(slider_4_qnt < 3) {
      $('.progress[data-progress="4"]').addClass('hidden');
    } else {
      $('.progress[data-progress="4"]').removeClass('hidden');
    }

    if(slider_5_qnt < 3) {
      $('.progress[data-progress="5"]').addClass('hidden');
    } else {
      $('.progress[data-progress="5"]').removeClass('hidden');
    }
  }

  if($('body').width() > 991) {
    if(slider_4_qnt < 4) {
      $('.progress[data-progress="4"]').addClass('hidden');
    } else {
      $('.progress[data-progress="4"]').removeClass('hidden');
    }

    if(slider_5_qnt < 4) {
      $('.progress[data-progress="5"]').addClass('hidden');
    } else {
      $('.progress[data-progress="5"]').removeClass('hidden');
    }
  }

  if($('body').width() > 1199) {
    if(slider_5_qnt < 5) {
      $('.progress[data-progress="5"]').addClass('hidden');
    } else {
      $('.progress[data-progress="5"]').removeClass('hidden');
    }
  }

  if($('body').width() > 2499) {
    if(slider_4_qnt < 5) {
      $('.progress[data-progress="4"]').addClass('hidden');
    } else {
      $('.progress[data-progress="4"]').removeClass('hidden');
    }

    if(slider_5_qnt < 6) {
      $('.progress[data-progress="5"]').addClass('hidden');
    } else {
      $('.progress[data-progress="5"]').removeClass('hidden');
    }
  }
}

$(document).ready(function () {
  //убираем прогресс-бар если недостаточно элементов
  hideProgress();

  if (slider_4.length) {
    slider_4.slick({
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      appendArrows: $('.slider-block__nav[data-nav="4"]'),
      prevArrow: '<button class="button-prev" title="Назад"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_prev" /></svg></button>',
      nextArrow: '<button class="button-next" title="Вперед"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_next" /></svg></button>',
      draggable: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 2499,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    });

    slider_4.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      setProgress(nextSlide, slider_4);
    });

    setProgress(0, slider_4);
  }

  if (slider_5.length) {
    slider_5.slick({
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      appendArrows: $('.slider-block__nav[data-nav="5"]'),
      prevArrow: '<button class="button-prev" title="Назад"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_prev" /></svg></button>',
      nextArrow: '<button class="button-next" title="Вперед"><svg class="icon" aria-hidden="true"><use xlink:href="#slider_next" /></svg></button>',
      draggable: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 2499,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }
      ]
    });

    slider_5.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      setProgress(nextSlide, slider_5);
    });

    setProgress(0, slider_5);
  }
});

$(window).resize(function() {
  //убираем прогресс-бар если недостаточно элементов
  hideProgress();
});

$(window).on("orientationchange", function(event) {
  //убираем прогресс-бар если недостаточно элементов
  hideProgress();
});
