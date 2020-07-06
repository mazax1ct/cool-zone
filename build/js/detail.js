var slider_1 = $('.js-detail-slider-1');
var slider_1_qnt = slider_1.find('.detail__images-slide').length;

var slider_2 = $('.js-detail-slider-2');

var slider_3 = $('.js-detail-slider-3');
var slider_3_qnt = slider_3.find('.add-slider__slide').length;

function detailHideProgress() {
  if($('body').width() < 600) {
    if(slider_3_qnt < 2) {
      $('.progress[data-progress="3"]').addClass('hidden');
    } else {
      $('.progress[data-progress="3"]').removeClass('hidden');
    }
  }

  if($('body').width() > 599) {
    if(slider_3_qnt < 3) {
      $('.progress[data-progress="3"]').addClass('hidden');
    } else {
      $('.progress[data-progress="3"]').removeClass('hidden');
    }
  }

  if($('body').width() < 1300) {
    if(slider_1_qnt < 2) {
      $('.progress[data-progress="1"]').addClass('hidden');
    } else {
      $('.progress[data-progress="1"]').removeClass('hidden');
    }
  }

  if($('body').width() > 1299) {
    if(slider_1_qnt < 3) {
      $('.detail__images-nav').addClass('hidden');
    } else {
      $('.detail__images-nav').removeClass('hidden');
    }
  }

  if($('body').width() > 1399) {
    if(slider_3_qnt < 5) {
      $('.progress[data-progress="3"]').addClass('hidden');
    } else {
      $('.progress[data-progress="3"]').removeClass('hidden');
    }
  }

  if($('body').width() > 2499) {
    if(slider_3_qnt < 6) {
      $('.progress[data-progress="3"]').addClass('hidden');
    } else {
      $('.progress[data-progress="3"]').removeClass('hidden');
    }
  }
}

function sizesTable() {
  $('.js-tab').removeClass('is-active');
  $('.js-tab[data-href="tab_3"]').addClass('is-active');
  $('.detail-tab').removeClass('is-active');
  $('.detail-tab[data-target="tab_3"]').addClass('is-active');
  var offsetTop = $('.js-tab[data-href="tab_3"]').offset().top - 60;
  $('html, body').animate({scrollTop:offsetTop}, '500');
}

$(document).ready(function () {
  if(window.location.hash) {
    var hash = window.location.hash.substring(1);
    if(hash == 'size_table') {
      setTimeout(function() {
        sizesTable();
      },300);
    }
  }

  //убираем прогресс-бар если недостаточно элементов
  detailHideProgress();

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
          breakpoint: 1299,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
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
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1399,
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

    slider_3.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      setProgress(nextSlide, slider_3);
    });

    setProgress(0, slider_3);
  }
});

$(window).resize(function() {
  //убираем прогресс-бар если недостаточно элементов
  detailHideProgress();
});

$(window).on("orientationchange", function(event) {
  //убираем прогресс-бар если недостаточно элементов
  detailHideProgress();
});

//переключение табов
$(document).on('click', '.js-tab', function () {
  $('.js-tab').removeClass('is-active');
  $(this).addClass('is-active');
  $('.detail-tab').removeClass('is-active');
  $('.detail-tab[data-target="'+$(this).attr("data-href")+'"]').addClass('is-active');
  var offsetTop = $('.detail__tabs-nav').offset().top - 60;
  $('html, body').animate({scrollTop:offsetTop}, '500');
  //апдейтим slick после того как он был скрыт
  slider_2.slick('setPosition');
  slider_3.slick('setPosition');
  return false;
});

//переключение на таблицу размеров и скролл к ней
$(document).on('click', '.js-sizes-table', function () {
  sizesTable();
  return false;
});
