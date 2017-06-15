var menuConfig = {
	button: '.mainButton',
	menu: '.mailMenu',
	subEl: '.sub-menu',
	siteW: 900,
};

$(document).ready(function() {
	
	menuResizeble();

	$(menuConfig.button).on('click', function(event) {
		if ($(this).hasClass('single')) {
			setTimeout( function () {
				[].slice.call( document.querySelectorAll( '.si-icons-default > .si-icon' ) ).forEach( function( el ) {
					var svgicon = new svgIcon( el, svgIconConfig );
				} );
				$(menuConfig.button + ' span svg:last-of-type').attr('class', 'last');
				$(menuConfig.button + ' span svg:first-of-type').attr('class', 'first');
				$(menuConfig.button + ' .last').hide();
				$(menuConfig.button + '.single').removeClass('single');
			} ,100);
		};
		if ($(menuConfig.menu).is(':visible')) {
			$(menuConfig.menu).clearQueue();
			$(menuConfig.menu).slideUp(400);
			$(menuConfig.button).removeClass('clicked');
		} else {
			$(menuConfig.menu).clearQueue();
			$(menuConfig.menu).slideDown(400);
			$(menuConfig.button).addClass('clicked');
		}
	});

	$(menuConfig.menu + ' > li').hover(function() {
		if ($(window).width() > menuConfig.siteW) {
			if ($(this).has(menuConfig.subEl)) {
				$(menuConfig.menu + ' > li ' + menuConfig.subEl).stop(true, true);
				$(this).find(menuConfig.subEl).slideDown(400);
			};
		};
	}, function() {
		if ($(window).width() > menuConfig.siteW) {
			if ($(this).has(menuConfig.subEl)) {
				$(menuConfig.menu + ' > li ' + menuConfig.subEl).stop(true, true);
				$(this).find(menuConfig.subEl).slideUp(400);
			};
		};
	});

	$(menuConfig.menu + ' > li').on('click', function(event) {
		if ($(this).has(menuConfig.subEl)) {
			sub = $(this).find(menuConfig.subEl);
			if ($(window).width() < menuConfig.siteW) {
				if (sub.is(':visible')) {
					sub.slideUp(400);
				} else {
					sub.slideDown(400);
				}
			}
		};
	});

	$(window).resize(function(event) {
		menuResizeble();
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

function menuResizeble () {
	if ($(window).width() > menuConfig.siteW) {
		
		if ($(menuConfig.button).length > 0) {
			$(menuConfig.menu).css({'display': 'table'});
			$(menuConfig.menu + ' ' + menuConfig.subEl).css({'display': 'none'});
			$(menuConfig.button).addClass('fromLarge');
		}

	} else {

		if ($(menuConfig.button).length > 0) {

			parent = $(menuConfig.button);
			if ($(menuConfig.button).hasClass('fromLarge')) {
				if ($(menuConfig.button).hasClass('clicked')) {
					if ($(menuConfig.button).find('.first').css('display') === 'none') {
						$(menuConfig.button).find('.last').hide();
						$(menuConfig.button).find('.first').show();
					} else if ($(menuConfig.button).find('.last').css('display') === 'none') {
						$(menuConfig.button).find('.last').show();
						$(menuConfig.button).find('.first').hide();
					}
					parent.removeClass('clicked');
				};
				$(menuConfig.menu).css({'display': 'none'});
				parent.removeClass('fromLarge');
			};
			
		}

	}
}