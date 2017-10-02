jQuery(document).ready(function($) { 
	/**
	* BloggerHero JS
	*/
	$('body').on( 'click', '.ripple-effect', function(e){
		// Ignore default behavior
		e.preventDefault();

		// Cache the selector
		var the_dom = $(this);

		// Get the limit for ripple effect
		var limit = the_dom.attr( 'data-ripple-limit' );

		// Get custom color for ripple effect
		var color = the_dom.attr( 'data-ripple-color' );
		if( typeof color == 'undefined' ){
			var color = 'rgba(255, 255, 255, 0.3)';
		}

		// Get ripple radius
		var radius = the_dom.attr( 'data-ripple-wrap-radius' );
		if( typeof radius == 'undefined' ){
			var radius = 0;
		}

		// Get the clicked element and the click positions
		if( typeof limit == 'undefined' ){	
			var the_dom_limit = the_dom;
		} else {
			var the_dom_limit = the_dom.closest( limit );
		}

		var the_dom_offset = the_dom_limit.offset();		
		var click_x = e.pageX;
		var click_y = e.pageY;

		// Get the width and the height of clicked element
		var the_dom_width = the_dom_limit.outerWidth();
		var the_dom_height = the_dom_limit.outerHeight();

		// Draw the ripple effect wrap
		var ripple_effect_wrap = $('<span class="ripple-effect-wrap"></span>');
		ripple_effect_wrap.css({
			'width' 			: the_dom_width,
			'height'			: the_dom_height,
			'position' 			: 'absolute',
			'top'			 	: the_dom_offset.top,
			'left'	 			: the_dom_offset.left,
			'z-index' 			: 100,
			'overflow' 			: 'hidden',
			'background-clip'	: 'padding-box',
			'-webkit-border-radius' : radius,
			'border-radius'		: radius
		});

		// Adding custom class, it is sometimes needed for customization
		var ripple_effect_wrap_class = the_dom.attr( 'data-ripple-wrap-class' );

		if( typeof ripple_effect_wrap_class != 'undefined' ){
			ripple_effect_wrap.addClass( ripple_effect_wrap_class );
		}

		// Append the ripple effect wrap
		ripple_effect_wrap.appendTo('body');
		
		// Determine the position of the click relative to the clicked element
		var click_x_ripple = click_x - the_dom_offset.left;
		var click_y_ripple = click_y - the_dom_offset.top;
		var circular_width = 1000;
		
		// Draw the ripple effect
		var ripple = $('<span class="ripple"></span>');
		ripple.css({
			'width' 						: circular_width,
			'height'						: circular_width,
			'background'					: color,
			'position'						: 'absolute',
			'top'							: click_y_ripple - ( circular_width / 2 ),
			'left'							: click_x_ripple - ( circular_width / 2 ),
			'content'						: '',
		    'background-clip' 				: 'padding-box',
		    '-webkit-border-radius'     	: '50%',
		    'border-radius'             	: '50%',
		    '-webkit-animation-name'		: 'ripple-animation',
		    'animation-name'              	: 'ripple-animation',
		    '-webkit-animation-duration'  	: '2s',
		    'animation-duration'          	: '2s',
		    '-webkit-animation-fill-mode' 	: 'both',
		    'animation-fill-mode'         	: 'both'  			
		});
		$('.ripple-effect-wrap:last').append( ripple );

		// Remove rippling component after half second
		setTimeout( function(){
			ripple_effect_wrap.fadeOut(function(){
				$(this).remove();
			});
		}, 500 );	

		// Get the href
		var href = the_dom.attr('href');

		// Safari appears to ignore all the effect if the clicked link is not prevented using preventDefault()
		// To overcome this, preventDefault any clicked link
		// If this isn't hash, redirect to the given link
		if( typeof href != 'undefined' && href.substring(0, 1) != '#' ){
			setTimeout( function(){
				window.location = href;
			}, 200 );
		}

		// Ugly manual hack to fix input issue
		if( the_dom.is('input') || the_dom.is('button') ){
			setTimeout( function(){
				the_dom.removeClass('ripple-effect');
				the_dom.trigger('click');
				the_dom.addClass('ripple-effect');
			}, 200 );
		}

	});	
});

(function(e){function u(s,o){var u,a,f;if((u=e(s))[t]==0)return n;a=u[i]()[r];switch(o.anchor){case"middle":f=a-(e(window).height()-u.outerHeight())/2;break;default:case r:f=Math.max(a,0)}return typeof o[i]=="function"?f-=o[i]():f-=o[i],f}var t="length",n=null,r="top",i="offset",s="click.scrolly",o=e(window);e.fn.scrolly=function(i){var o,a,f,l,c=e(this);if(this[t]==0)return c;if(this[t]>1){for(o=0;o<this[t];o++)e(this[o]).scrolly(i);return c}l=n,f=c.attr("href");if(f.charAt(0)!="#"||f[t]<2)return c;a=jQuery.extend({anchor:r,easing:"swing",offset:0,parent:e("body,html"),pollOnce:!1,speed:1e3},i),a.pollOnce&&(l=u(f,a)),c.off(s).on(s,function(e){var t=l!==n?l:u(f,a);t!==n&&(e.preventDefault(),a.parent.stop().animate({scrollTop:t},a.speed,a.easing))})}})(jQuery);
