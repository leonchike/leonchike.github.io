jQuery(document).ready(function($){
	var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if(windowsize < 465) {
        	console.log('here');
        	$('#client_tiles').addClass('smallCarousel');
			$(function() {
			  var carousel1 = $('#client_tiles').carousel({
			      itemWidth: 220, // The width of your images.
			      itemHeight: 170, // The height of your images.
			      startIndex: 0,
			      distance: 30,
			      preload: false,
			      selectByClick: true,
			      gradientOverlayVisible: false,
			      enableMouseWheel: false,
			      unselectedItemAlpha: 0.4
			  });
			});
		} else {
			console.log('here2');
			if($('#client_tiles').hasClass('smallCarousel')) {
				$('#client_tiles').removeClass('smallCarousel');
			}
			$(function() {
			  var carousel2 = $('#client_tiles').carousel({
			      itemWidth: 360, // The width of your images.
			      itemHeight: 370, // The height of your images.
			      startIndex: 0,
			      distance: 50,
			      preload: false,
			      selectByClick: true,
			      gradientOverlayVisible: false,
			      enableMouseWheel: false,
			      unselectedItemAlpha: 0.4
			  });
			});
		}
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});