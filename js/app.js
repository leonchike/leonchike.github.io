$( document ).ready(function() {


  var scrollToSignup = function() {
    $.smoothScroll({
      easing: 'swing',

      // speed can be a number or 'auto'
      // if 'auto', the speed will be calculated based on the formula:
      // (current scroll position - target scroll position) / autoCoeffic
      speed: 500,

      // autoCoefficent: Only used when speed set to "auto".
      // The higher this number, the faster the scroll speed
      autoCoefficient: 2,

      // $.fn.smoothScroll only: whether to prevent the default click action
      preventDefault: true,
      scrollTarget: '#homeSignUpSection'
    });
    return false;
  }

 $('.bizMenuSignUp').click(scrollToSignup);

 $('#signUpBtnHome').click(scrollToSignup);

});