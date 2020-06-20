//проверка на тач-устройства
function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

$(document).ready(function () {
  if(isTouchDevice() === true) {
    $('.js-root').click(function() {
      $(this).find('.main-menu__link').toggleClass('is-active');
      var sub = $(this).find('.sub-menu');
      sub.slideToggle();
      return true;
    });
  } else {
    $('.js-root').hover(
      function() {
        $(this).find('.sub-menu').stop(true, true).slideDown(400);
      }, function() {
        $(this).find('.sub-menu').stop(true, true).slideUp(400);
      }
    );
  }
});

//открытие меню
$(document).on('click', '.js-menu-opener', function () {
  $('.header__menu-block').addClass('is-open');
  $('body').addClass('menu-is-open');
  return false;
});

//закрытие меню
$(document).on('click', '.js-menu-closer', function () {
  $('.header__menu-block').removeClass('is-open');
  $('body').removeClass('menu-is-open');
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
    $('.search-bar__input').blur();
    $('.search-bar__dropdown').removeClass('is-open');
  }
  return false;
});

//выбор варианта для поиска
$(document).on('click', '.js-search-option', function () {
  $('.search-bar__input').val($(this).text());
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
