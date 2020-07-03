$(document).on('click', '.js-go-checkout', function () {
  var offsetTop = $('.checkout__left').offset().top - 60;
  $('html, body').animate({scrollTop:offsetTop}, '500');
  return false;
});

function cartListHeight() {
  var containerH = $('.checkout__right').innerHeight();
  var topH = $('.cart__top').innerHeight();
  var innerH = $('.cart__list-block .cart__qnt').innerHeight();
  $('.cart__list').height(containerH - topH - innerH - 30);
}

$(document).ready(function () {
  if($('body').width() > 991) {
    cartListHeight();
  }
});

$(window).resize(function() {
  if($('body').width() > 991) {
    cartListHeight();
  }
});

$(window).on("orientationchange", function(event) {
  if($('body').width() > 991) {
    cartListHeight();
  }
});
