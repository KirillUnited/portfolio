$(function() {
    $('.vegas-container').vegas({
        slides: [
            { src: 'assets/img/slide-img1.jpg', transition: [ 'swirlLeft' ]},
            { src: 'assets/img/slide-img2.jpg', transition: [ 'swirlRight' ]},
            { src: 'assets/img/slide-img3.jpg', transition: [ 'swirlLeft' ]}
        ],
        timer: false,
        animation: ['kenburns']
    });
});

/* Hide mobile menu after clicking on a link
-----------------------------------------------*/
$('.navbar-collapse a').click(function(){
	$(".navbar-collapse").collapse('hide');
});

/* scroll and active link
-----------------------------------------------*/
jQuery(window).scroll(function(){
	var $sections = $('section');
	$sections.each(function(i,el){
		var top  = $(el).offset().top-100;
		var bottom = top +$(el).height();
		var scroll = $(window).scrollTop();
		var id = $(el).attr('id');
		if( scroll > top && scroll < bottom){
			$('li').removeClass('active');
			$('a[href="#'+id+'"]').parent().addClass('active');
		}
	})
});
$(function() {
	$('.navbar-default a, .container-home a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 49
		}, 1000);
		event.preventDefault();
	});
});

// owl-carousel

$(document).ready(function() {
      $(".owl-carousel").owlCarousel({
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          slideSpeed: 300,
          itemsDesktop : [1199,2],
          itemsTablet: [768,1],
          itemsTabletSmall: [985,2],
          itemsMobile : [479,1],
      });
    });

/* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();
