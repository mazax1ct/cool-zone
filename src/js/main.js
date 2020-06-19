$(document).ready(function () {

});

$(document).on('click', '.js-footer-dropdown-toggler', function () {
  if($('body').width() < 768) {
    $(this).toggleClass('is-active');
    $(this).next('.footer__section-dropdown').slideToggle();
    return false;
  }
});
