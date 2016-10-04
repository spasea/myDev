$(document).ready(function() {
	
	$('.footer').magic();

	sitew = 980;

	resizeble();

	$('.mainMenuButton').on('click', function(event) {
		if ($(this).hasClass('single')) {
			setTimeout( function () {
				[].slice.call( document.querySelectorAll( '.si-icons-default > .si-icon' ) ).forEach( function( el ) {
					var svgicon = new svgIcon( el, svgIconConfig );
				} );
				$('.mainMenuButton span svg:last-of-type').attr('class', 'last');
				$('.mainMenuButton span svg:first-of-type').attr('class', 'first');
				$('.mainMenuButton .last').hide();
				$('.mainMenuButton.single').removeClass('single');
			} ,100);
		};
		if ($('.mailMenu').is(':visible')) {
			$('.mailMenu').clearQueue();
			$('.mailMenu').slideUp(400);
			$('.mainMenuButton').removeClass('clicked');
		} else {
			$('.mailMenu').clearQueue();
			$('.mailMenu').slideDown(400);
			$('.mainMenuButton').addClass('clicked');
		}
	});

	$('.mailMenu > li').hover(function() {
		if ($(window).width() > sitew) {
			if ($(this).has('.sub-menu')) {
				$('.mailMenu > li .sub-menu').stop(true, true);
				$(this).find('.sub-menu').slideDown(400);
			};
		};
	}, function() {
		if ($(window).width() > sitew) {
			if ($(this).has('.sub-menu')) {
				$('.mailMenu > li .sub-menu').stop(true, true);
				$(this).find('.sub-menu').slideUp(400);
			};
		};
	});

	$('.mailMenu > li').on('click', function(event) {
		if ($(this).has('.sub-menu')) {
			sub = $(this).find('.sub-menu');
			if ($(window).width() < sitew) {
				if (sub.is(':visible')) {
					sub.slideUp(400);
				} else {
					sub.slideDown(400);
				}
			}
		};
	});

	$(window).resize(function(event) {
		resizeble();
	});

});

var svgIconConfig = {
hamburgerCross : {
	url : 'svg/hamburger.svg',
	animation : [
	{ 
		el : 'path:nth-child(1)', 
		animProperties : { 
			from : { val : '{"path" : "m 5.0916789,20.818994 53.8166421,0"}' }, 
			to : { val : '{"path" : "M 12.972944,50.936147 51.027056,12.882035"}' }
		} 
	},
	{ 
		el : 'path:nth-child(2)', 
		animProperties : { 
			from : { val : '{"transform" : "s1 1", "opacity" : 1}', before : '{"transform" : "s0 0"}' }, 
			to : { val : '{"opacity" : 0}' }
		} 
	},
	{ 
		el : 'path:nth-child(3)', 
		animProperties : { 
			from : { val : '{"path" : "m 5.0916788,42.95698 53.8166422,0"}' }, 
			to : { val : '{"path" : "M 12.972944,12.882035 51.027056,50.936147"}' }
		} 
	}
	]
}}
setTimeout( function () {
	[].slice.call( document.querySelectorAll( '.si-icons-default > .si-icon' ) ).forEach( function( el ) {
		var svgicon = new svgIcon( el, svgIconConfig );
	} );
} ,100);

function resizeble () {
	if ($(window).width() < 550) {

	} else {

	}

	if ($(window).width() < 1000) {
		
	} else {
		
	}

	if ($(window).width() > 1000) {
		
		if ($('.mainMenuButton').length > 0) {
			$('.mailMenu').css({'display': 'table'});
			$('.mailMenu .sub-menu').css({'display': 'none'});
			$('.mainMenuButton').addClass('fromLarge');
			
		}

	} else {

		if ($('.mainMenuButton').length > 0) {

			parent = $('.mainMenuButton');
			if ($('.mainMenuButton').hasClass('fromLarge')) {
				if ($('.mainMenuButton').hasClass('clicked')) {
					if ($('.mainMenuButton').find('.first').css('display') === 'none') {
						$('.mainMenuButton').find('.last').hide();
						$('.mainMenuButton').find('.first').show();
						//console.log('first is hidden');
					} else if ($('.mainMenuButton').find('.last').css('display') === 'none') {
						$('.mainMenuButton').find('.last').show();
						$('.mainMenuButton').find('.first').hide();
						//console.log('last is hidden');
					}
					parent.removeClass('clicked');
				};
				$('.mailMenu').css({'display': 'none'});
				parent.removeClass('fromLarge');
			};
			
		}

	}

}