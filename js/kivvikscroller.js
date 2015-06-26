function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop() + 100;
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.phoneScreen').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('phoneScreenTranslate');
        } else {
            $(this).removeClass('phoneScreenTranslate');
        }
    });

    $('video').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).get(0).play();
        }
        $(this).attr('loop','loop');
    });

});

$(document).ready(function() {
    $('#mcAfeeImg').addClass('translateMcAfee');
    $('#BIT265Img').addClass('translate265BIT');
    $('#ArchivingImg').addClass('translateArchiving');
    $('#phoneSurveyCompliance').addClass('translateSurveyScreen');

    $('.mcAfeeLine').addClass('lineTransitions');
    $('.Line265').addClass('lineTransitions');
    $('.awsLine').addClass('lineTransitions');
    $('.complianceLine').addClass('lineTransitions');

    $('.mcAfeeLogo').addClass('lineTransitions');
    $('.Logo265').addClass('lineTransitions');
    $('.awsLogo').addClass('lineTransitions');
    $('.complianceLogo').addClass('lineTransitions');
});