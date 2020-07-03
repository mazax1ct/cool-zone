$(document).on('click', '.js-go-checkout', function () {
  var offsetTop = $('.checkout__left').offset().top - 60;
  $('html, body').animate({scrollTop:offsetTop}, '500');
  return false;
});

function cartListHeight() {
  if($('body').width() > 991) {
    var containerH = $('.checkout__right').innerHeight();
    var topH = $('.cart__top').innerHeight();
    var botH = $('.cart__bottom').innerHeight();
    var innerH = $('.cart__list-block .cart__qnt').innerHeight();
    $('.cart__list').height(containerH - topH - botH - innerH - 30);
  } else {
    $('.cart__list').height('');
  }
}

$(document).ready(function () {
  cartListHeight();

  $('.js-cart-custom-scroll').each(function(index, element) {
    new SimpleBar(element, { autoHide: false })
  });
});

$(window).resize(function() {
  cartListHeight();
});

$(window).on("orientationchange", function(event) {
  cartListHeight();
});
