$(document).ready(function() {
$('.nav-menu').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $($href).offset();

    $('html').animate({ scrollTop: $anchor.top });
    console.log($href);
    return false;
});
});
