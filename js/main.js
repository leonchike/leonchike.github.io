;(function ($) {
  'use strict';
  var content  = $('#homePage').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {
          
          // Set the duration of our animation
          duration: 250,
          
          // Alterations to the page
          render: function () {

            // Quickly toggles a class and restarts css animations
            content.toggleAnimationClass('is-exiting');
          }
        }
      }).data('smoothState'); // makes public methods available
})(jQuery);


;(function ($) {
  'use strict';
  var $body    = $('html, body'), // Define jQuery collection 
      content  = $('#homePage').smoothState({
        onStart : {
          duration: 250,
          render: function () {
            content.toggleAnimationClass('is-exiting');
            
            // Scroll user to the top
            $body.animate({ 'scrollTop': 0 });

          }
        }
      }).data('smoothState');
})(jQuery);



// Contents of functions.js
;(function($) {
  'use strict';
  var $body = $('html, body'),
      content = $('#scoring').smoothState({
        // Runs when a link has been activated
        onStart: {
          duration: 250, // Duration of our animation
          render: function (url, $container) {
            // toggleAnimationClass() is a public method
            // for restarting css animations with a class
            content.toggleAnimationClass('is-exiting');
            // Scroll user to the top
            $body.animate({
              scrollTop: 0
            });
          }
        }
      }).data('smoothState');
      //.data('smoothState') makes public methods available
})(jQuery);

;(function ($) {
  'use strict';
  var content  = $('#scoring').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {
          
          // Set the duration of our animation
          duration: 250,
          
          // Alterations to the page
          render: function () {

            // Quickly toggles a class and restarts css animations
            content.toggleAnimationClass('is-exiting');
          }
        }
      }).data('smoothState'); // makes public methods available
})(jQuery);


;(function ($) {
  'use strict';
  var $body    = $('html, body'), // Define jQuery collection 
      content  = $('#scoring').smoothState({
        onStart : {
          duration: 250,
          render: function () {
            content.toggleAnimationClass('is-exiting');
            
            // Scroll user to the top
            $body.animate({ 'scrollTop': 0 });

          }
        }
      }).data('smoothState');
})(jQuery);



// Contents of functions.js
;(function($) {
  'use strict';
  var $body = $('html, body'),
      content = $('#scoring').smoothState({
        // Runs when a link has been activated
        onStart: {
          duration: 250, // Duration of our animation
          render: function (url, $container) {
            // toggleAnimationClass() is a public method
            // for restarting css animations with a class
            content.toggleAnimationClass('is-exiting');
            // Scroll user to the top
            $body.animate({
              scrollTop: 0
            });
          }
        }
      }).data('smoothState');
      //.data('smoothState') makes public methods available
})(jQuery);