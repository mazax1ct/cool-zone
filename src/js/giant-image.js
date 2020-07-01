function imageResize () {
  if($('.giant-image__image').height() < $('.giant-image').height()) {
    $('.giant-image__image').addClass('small');
  }
}

$(window).resize(function() {
  imageResize();
});

$(window).on("orientationchange", function(event) {
  imageResize();
});

$(document).on('click', '.js-giant-image', function () {
  $('body').addClass('giant-is-open');
  imageResize();
  setTimeout(function() {
    $('.giant-image').addClass('is-open');
  },300);


  if($('.giant-image__image').height() > $('.giant-image').height()) {
    $('.giant-image__image').css("margin-top", "0");
    $('body').mousemove(function(e) {
      var offTop = $('.giant-image').offset().top;
      var amountMovedY = ((e.pageY - offTop) * -1 / 0.5);
      $('.giant-image__image').css('margin-top', amountMovedY);
    });
  }

  return false;
});

$(document).on('click', '.js-giant-image-close', function () {
  $('.giant-image').removeClass('is-open');
  setTimeout(function() {
    $('body').removeClass('giant-is-open');
    $('.giant-image__image').removeClass('small').css("margin-top", "0");
  },300);
  return false;
});
