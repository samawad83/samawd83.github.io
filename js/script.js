$(document).ready(function(){
	
	'use strict'; 

	// image loaded portfolio init
    $('.grid').imagesLoaded(function() {
        $('.portfolio-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
    });        

	function resizeHobbies() {
		var tallest = 0;
		var hobbies = $('.single-hobbie');

		if ($(window).width() < 992) {
			for (var i = 0; i < hobbies.length; i++) {
				if ($(hobbies[i]).height() > tallest) {
					tallest = $(hobbies[i]).height();
				}
			}

			hobbies.height(tallest);
		} else {
			hobbies.height('auto');
		}
	}

	resizeHobbies();

	$(window).on('resize', function() {
		resizeHobbies();
	});
	
	$(window).scroll(function(event) {
		$('.me-image > img').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.about-me-info').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.inner-head').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.service').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.about-text-block').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.heading2').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.my-education-sec').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.my-work-sec').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.my-skills > .progress > .progress-bar').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated slideInLeft'); 
			} 
		});

		$('.slider-history').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.history-button').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.testimonials').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.blog').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.wanna-touch').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.main-footer').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		$('.my-name-who').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

		

		$('.my-skills > .progress > .progress-bar').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
			  el.addClass('animated fadeIn'); 
			} 
		});

	});
	
	// Get Header Height //
	var stick = $('.inner-page header').height();
	$('.theme-layout').css({
	    'padding-top': stick
	});

	/*** FIXED Menu APPEARS ON SCROLL DOWN ***/	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
		$('header').addClass('sticky');
		}
		else{
		$('header').removeClass("sticky");
		$('header').addClass('');
		}
	});	

	/*** SMOOTH SCROLLING ***/	
	$(function() {
		$('a[href*=#]:not([href=#])').on('click', function(){
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top
				}, 1000);
				}
			}
		});
	});    


	var lastId,
		topMenu = $('nav'),
		topMenuHeight = topMenu.outerHeight()+15,
		// All list items
		menuItems = topMenu.find('a'),
		scrollItems = menuItems.map(function(){
		var item = $($(this).attr('href'));
		if (item.length) { return item; }
		});
		$(window).scroll(function(){
		// Get container scroll position
		var fromTop = $(this).scrollTop()+topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function(){
		if ($(this).offset().top < fromTop)
		return this;
		});
		// Get the id of the current element
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
		lastId = id;
		// Set/remove active class
		menuItems
		.parent().removeClass('active')
		.end().filter('[href=#'+id+']').parent().addClass('active');
		}                   
	});
	
	$('.navTrigger').on('click', function(){
	  $(this).toggleClass('active');
	  $('.resume-header').toggleClass('show-menu');
	});	
	
	/*=================== Parallax ===================*/   
	$('.parallax').scrolly({bgParallax: true});
	
});


$(window).load(function(){
	$('.page-loading').fadeOut();
});