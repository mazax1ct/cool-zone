//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > h.height()) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
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
  } else {
    /*$('.js-root').hover(
      function() {
        $(this).find('.sub-menu').stop(true, true).slideDown(400);
      }, function() {
        $(this).find('.sub-menu').stop(true, true).slideUp(400);
      }
    );*/
  }

  //кастомный скролл в мини-корзине
  $('.js-custom-scroll').each(function(index, element) {
    new SimpleBar(element, { autoHide: false })
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
$(document).on('mouseover', '.js-cart-open', function () {
  $('.mini-cart').addClass('is-open');
  $('body').addClass('overlay');
  return false;
});

//закрытие корзины
$(document).on('click', '.js-cart-close', function () {
  $('.mini-cart').removeClass('is-open');
  contentOverlay();
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

//сортировка в каталоге
$(document).on('click', '.js-catalog-sort-open', function () {
  contentOverlay ();
  $('.catalog-sort').toggleClass('is-open');
  return false;
});

$(document).on('click', '.js-catalog-sort', function () {
  $('.catalog-sort__var').removeClass('is-active');
  $(this).addClass('is-active');
  $('.catalog-sort__value').text($(this).text());
  return false;
});
