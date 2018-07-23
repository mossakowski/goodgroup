$(window).scroll(function() {
  var y = $(window).scrollTop();
  var precentsWidth;
  if(y<=100) {
    y/=2;
    precentsWidth = 100 - y;
    $('.header-logo').attr('width',precentsWidth + '%');
  }
});
