$(window).on('load', function() {
	$('.loader').fadeOut();
	$('.loader-inner').delay(350).fadeOut('slow');
});


$('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav:false,
    dots:false,
    responsive:{
        500:{
            margin:10,
            stagePadding: 100,
        },
        768:{
            margin:30,
            stagePadding: 200,
        },

        1366:{
            margin:40,
            stagePadding: 350,
        },
        
    }
});

(function () {
    var scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
})();