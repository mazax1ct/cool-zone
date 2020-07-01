//прогресс-бар
function setProgress(index, slider) {
  var calc = ((index + 1) / (slider.slick('getSlick').slideCount)) * 100;
  

  $('.progress[data-progress="'+ slider.attr("data-progress") +'"]').css('background-size', `${calc}% 100%`).attr('aria-valuenow', calc);
}
