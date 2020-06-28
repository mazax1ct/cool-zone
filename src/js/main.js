//функция навешивания класса на шапку и фильтр каталога
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > h.height()/2) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
  if($(".catalog-topbar").length) {
    var f = $(".catalog-topbar");
    var fOffsetTop = f.offset().top;
    if(($(window).scrollTop() + $(".header.scrolled").height()) > fOffsetTop) {
      $(".catalog-topbar__float").addClass('scrolled');
    } else {
      $(".catalog-topbar__float").removeClass('scrolled');
    }
  }
};

//проверка на тач-устройства
function isTouchDevice () {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

//оверлей контентной области
function contentOverlay () {
  $('body').toggleClass('overlay');
}

//переменная для слайдера быстрого просмотра
var fastLookSlider;

//переменная для проверки открытия корзины
var cartOpen = false;

//переменная для проверки открытия фильтра
var filterOpen = false;

//переменная для проверки открытия сортировки
var sortOpen = false;

$(document).ready(function () {
  //запуск функции навешивания класса на шапку
  resize_scroll();

  //меню второго уровня
  if(isTouchDevice() === true) {
    $('.js-root').click(function() {
      $(this).find('.main-menu__link').toggleClass('is-active');
      var sub = $(this).find('.sub-menu');
      sub.slideToggle();
      return true;
    });
  }

  //кастомный скролл в мини-корзине
  $('.js-custom-scroll').each(function(index, element) {
    new SimpleBar(element, { autoHide: false })
  });

  //слайдер в попапе быстрого просмотра
  fastLookSlider = new Swiper ('.js-fast-look-slider', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие главного меню
$(document).on('click', '.js-menu-opener', function () {
  $('body').addClass('menu-is-open');
  $('.header__menu-block').addClass('is-open');
  setTimeout(
    "$('.header__mobile-duplicate, .header__menu').addClass('is-open');",
    200
  );
  return false;
});

//закрытие главного меню
$(document).on('click', '.js-menu-closer', function () {
  $('.header__mobile-duplicate, .header__menu').removeClass('is-open');
  setTimeout(
    "$('.header__menu-block').removeClass('is-open'); $('body').removeClass('menu-is-open');",
    200
  );
  return false;
});

//открытие/закрытие поиска
$(document).on('click', '.js-search-toggler', function () {
  $(this).toggleClass('is-active');
  $('.search-bar__form').toggleClass('is-open');
  if($(this).hasClass('is-active')) {
    $('.search-bar__input').focus();
    $('.search-bar__dropdown').addClass('is-open');
  } else {
    $('.search-bar__input').val('').blur();
    $('.search-bar__dropdown').removeClass('is-open');
  }
  return false;
});

//выбор варианта для поиска
$(document).on('click', '.js-search-option', function () {
  $('.search-bar__input').val($(this).text());
  return false;
});

//открытие корзины
/*$(document).on('mouseover', '.js-cart-open', function () {
  if(filterOpen == true || sortOpen == true) { //закрываем сортировку и фильтр
    $('body').removeClass('overlay cart-is-open filter-is-open');
    $('.catalog-sort').removeClass('is-open');
    $('.js-filter-toggler').removeClass('is-active');
    $('.filter-block').removeClass('is-open');
    filterOpen = false;
    sortOpen = false;
  }
  cartOpen = true;
  $('.mini-cart').addClass('is-open');
  $('body').addClass('overlay cart-is-open');
  return false;
});*/

$(document).on('mouseover', '.js-cart-open', function () {
  if(filterOpen == true || sortOpen == true) { //закрываем сортировку и фильтр
    $('.catalog-sort').removeClass('is-open');
    $('.js-filter-toggler').removeClass('is-active');
    $('.filter').removeClass('fadeIn');
    setTimeout(function() {
      $('body').removeClass('filter-is-open');
      filterOpen = false;
    },300);
    sortOpen = false;
  }
  if(cartOpen == false) {
    $('body').addClass('overlay cart-is-open');
    setTimeout(function() {
      $('body').addClass('overlay-fadeIn');
      setTimeout(function() {
        $('.mini-cart').addClass('fadeIn');
        cartOpen = true;
      },300);
    },100);
  }
  return false;
});

//закрытие корзины
/*$(document).on('click', '.js-cart-close', function () {
  $('.mini-cart').removeClass('is-open');
  $('body').removeClass('overlay cart-is-open');
  cartOpen = false;
  return false;
});*/

$(document).on('click', '.js-cart-close', function () {
  if(cartOpen == true) {
    $('.mini-cart').removeClass('fadeIn');
    setTimeout(function() {
      $('body').removeClass('overlay-fadeIn');
      setTimeout(function() {
        $('body').removeClass('overlay cart-is-open');
        cartOpen = false;
      },300);
    },100);
  }
  return false;
});

//закрытие корзины
$(document).on('mouseenter', '.page-content, .main-menu, .footer', function () {
  if(cartOpen == true) {
    $('.mini-cart').removeClass('fadeIn');
    setTimeout(function() {
      $('body').removeClass('overlay-fadeIn');
      setTimeout(function() {
        $('body').removeClass('overlay cart-is-open');
        cartOpen = false;
      },300);
    },100);
  }
});

//сортировка в каталоге
$(document).on('click', '.js-catalog-sort-open', function () {
  if(filterOpen == true || cartOpen == true) { //закрываем корзину и фильтр
    $('.js-filter-toggler').removeClass('is-active');
    $('.filter').removeClass('fadeIn');
    $('.mini-cart').removeClass('fadeIn');
    setTimeout(function() {
      $('body').removeClass('cart-is-open filter-is-open');
      filterOpen = false;
      cartOpen = false;
    },300);
  }
  if(sortOpen == false) {
    $('body').addClass('overlay');
    setTimeout(function() {
      $('body').addClass('overlay-fadeIn');
      setTimeout(function() {
        $('.catalog-sort').addClass('is-open');
        sortOpen = true;
      },300);
    },100);
  } else {
    $('.catalog-sort').removeClass('is-open');
    setTimeout(function() {
      $('body').removeClass('overlay-fadeIn');
      setTimeout(function() {
        $('body').removeClass('overlay');
        sortOpen = false;
      },300);
    },100);
  }
  return false;
});

$(document).on('click', '.js-catalog-sort', function () {
  $('.catalog-sort__var').removeClass('is-active');
  $(this).addClass('is-active');
  $('.catalog-sort__value').text($(this).text());
  return false;
});

//открытие/закрытие фильтра
$(document).on('click', '.js-filter-toggler', function () {
  if(cartOpen == true || sortOpen == true) { //закрываем корзину и сортировку
    $('.mini-cart').removeClass('fadeIn');
    $('.catalog-sort').removeClass('is-open');
    setTimeout(function() {
      $('body').removeClass('cart-is-open');
      cartOpen = false;
    },300);
    sortOpen = false;
  }
  if(filterOpen == false) {
    $('body').addClass('overlay filter-is-open');
    $('.js-filter-toggler').addClass('is-active');
    setTimeout(function() {
      $('body').addClass('overlay-fadeIn');
      if($('body').width() > 1199) {
        var f = $(".catalog-topbar");
        var fOffsetTop = f.offset().top;
        $('.filter').height($(window).height() - fOffsetTop - 50 - 30);
      }
      setTimeout(function() {
        $('.filter-block').addClass('is-open');
        $('.filter').addClass('fadeIn');
        filterOpen = true;
      },300);
    },100);
  } else {
    $('.filter').removeClass('fadeIn');
    $('.filter-block').removeClass('is-open');
    setTimeout(function() {
      $('body').removeClass('overlay-fadeIn');
      setTimeout(function() {
        $('body').removeClass('overlay filter-is-open');
        $('.js-filter-toggler').removeClass('is-active');
        filterOpen = false;
      },300);
    },100);
  }
  return false;
});

//открытие/закрытие раздела фильтра
$(document).on('click', '.js-filter-section-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).parent().next('.filter__section-dropdown').slideToggle();
  return false;
});

//открытие/закрытие меню в футере для мобил
$(document).on('click', '.js-footer-dropdown-toggler', function () {
  if($('body').width() < 768) {
    $(this).toggleClass('is-active');
    $(this).next('.footer__section-dropdown').slideToggle();
    return false;
  }
});

//попап быстрого просмотра
$(document).on('click', '.js-fast-look', function () {
  $.fancybox.open(
    [
      {
    		src  : $(this).attr('data-src'),
        opts: {
          hash: false,
          arrows: false,
          infobar: false,
      		afterShow: function() {
            fastLookSlider.update();
      		}
        }
    	}
    ], {
    	loop : false
  });
});

//закрытие попапа
$(document).on('click', '.js-popup-close', function () {
  $.fancybox.close();
  return false;
});
