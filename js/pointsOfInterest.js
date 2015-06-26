jQuery(document).ready(function($){
	//open interest point descriptio

	var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if(windowsize < 1110) {
			$('.firstTooltip .cd-more-info').removeClass('cd-right');
			$('.secondTooltip .cd-more-info').removeClass('cd-right');
			$('.thirdTooltip .cd-more-info').removeClass('cd-left');
			$('.fourthTooltip .cd-more-info').removeClass('cd-left');
			$('.cd-more-info').addClass('cd-bottom');
			$('.cd-more-info').removeClass('cd-right');
			$('.cd-more-info').removeClass('cd-left');
		} else {
				$('.cd-more-info').removeClass('cd-bottom');
				$('.firstTooltip .cd-more-info').removeClass('cd-bottom');
				$('.secondTooltip .cd-more-info').removeClass('cd-bottom');
				$('.thirdTooltip .cd-more-info').removeClass('cd-bottom');
				$('.fourthTooltip .cd-more-info').removeClass('cd-bottom');
				$('.firstTooltip .cd-more-info').addClass('cd-right');
				$('.secondTooltip .cd-more-info').addClass('cd-right');
				$('.thirdTooltip .cd-more-info').addClass('cd-left');
				$('.fourthTooltip .cd-more-info').addClass('cd-left');

		}
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

	$('.firstTooltip').hover(function(){
		var selectedPoint = $('.firstSinglePoint');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open').addClass('visited');
		} else {
			selectedPoint.addClass('is-open').siblings('.firstSinglePoint.is-open').removeClass('is-open').addClass('visited');
		}
	});

	$('.secondTooltip').hover(function(){
		var selectedPoint = $('.secondSinglePoint');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open').addClass('visited');
		} else {
			selectedPoint.addClass('is-open').siblings('.secondSinglePoint.is-open').removeClass('is-open').addClass('visited');
		}
	});

	$('.thirdTooltip').hover(function(){
		var selectedPoint = $('.thirdSinglePoint');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open').addClass('visited');
		} else {
			selectedPoint.addClass('is-open').siblings('.thirdSinglePoint.is-open').removeClass('is-open').addClass('visited');
		}
	});

	$('.fourthTooltip').hover ( function(){
		var selectedPoint = $('.fourthSinglePoint');
		if( selectedPoint.hasClass('is-open') ) {
			selectedPoint.removeClass('is-open').addClass('visited');
		} else {
			selectedPoint.addClass('is-open').siblings('.fourthSinglePoint.is-open').removeClass('is-open').addClass('visited');
		}
	});

});