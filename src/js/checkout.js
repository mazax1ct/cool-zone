//скролл к форме аторизации
$(document).on('click', '.js-go-checkout', function () {
  var offsetTop = $('.checkout__left').offset().top - 60;
  $('html, body').animate({scrollTop:offsetTop}, '500');
  return false;
});

//открытие корзины на мобильных
$(document).on('click', '.js-mobile-cart-opener', function () {
  $('body').addClass('mobile-cart-is-open');
  $('.cart__list-block--floated').addClass('is-open');
  return false;
});

//закрытие коризны на мобильных
$(document).on('click', '.cart__list-block--floated.is-open .cart__qnt', function () {
  $('body').removeClass('mobile-cart-is-open');
  $('.cart__list-block--floated').removeClass('is-open');
  return false;
});

//переключение табов
$(document).on('click', '.js-order-tab', function () {
  $('.js-order-tab').removeClass('is-active');
  $(this).addClass('is-active');
  $('.order-tab').removeClass('is-active');
  $('.order-tab[data-target="'+$(this).attr("data-href")+'"]').addClass('is-active');
  return false;
});

$(document).on('click', '.js-scroll-to', function () {

  if($('body').width() < 992){
    var offsetTop = $($(this).attr('href')).offset().top - 60;
    $('html, body').animate({scrollTop:offsetTop}, '500');
  } else {
    var pOT = $('.checkout__left').offset().top;
    var offsetTop = $($(this).attr('href')).offset().top;
    console.log(pOT, offsetTop);
    $('.checkout__left').animate({scrollTop: offsetTop - pOT}, '500');
  }

  return false;
});

//расчет высоты блока с товарами
function cartListHeight() {
  if($('body').width() > 991) {
    var containerH = $('.checkout__right').innerHeight();
    var topH = $('.cart__top').innerHeight();
    var botH = 0;
    if ($('.cart__bottom').length) {
      botH = $('.cart__bottom').innerHeight();
    }
    var innerH = $('.cart__list-block .cart__qnt').innerHeight();
    $('.cart__list').height(containerH - topH - botH - innerH - 30);
  } else {
    $('.cart__list').height('');
  }
}

$(document).ready(function () {
  cartListHeight();

  //кастомный скролл
  if($('body').width() > 991) {
    new SimpleBar($('.js-cart-custom-scroll')[0], { autoHide: false });
  }

  new SimpleBar($('.js-posts-list')[0], { autoHide: false });
});

$(window).resize(function() {
  cartListHeight();
});

$(window).on("orientationchange", function(event) {
  cartListHeight();

  if($('body').width() > 991) {
    new SimpleBar($('.js-cart-custom-scroll')[0], { autoHide: false });
  }
});
