$(function() {
    $('.vegas-container').vegas({
        slides: [
            { src: 'assets/img/blog.jpg'},
            { src: 'assets/img/about-bg.jpg'},
            { src: 'assets/img/contact-bg.jpg'}
        ],
        timer: false,
        transition: ['fade']
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

 // bxslider
 $(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    controls: false,
    auto: true,
    autoHover: true,
    speed: 500,
    startSlide: 0,
    captions: false,
    slideWidth: 920,
    items: 2,
    responsive: true,
  });
});

// owlCarousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 2,
    autoplay: true,
    autoplayTimeout: 4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
});