$(document).ready(function() {
    // This function will be executed when the user scrolls the page.
    $(window).scroll(function(e) {
        // Get the position of the location where the navbar starts.
        var navbar_anchor = $(".navbar_anchor").offset().top;
         
        // Check if the user has scrolled and the current position is after the navbar start location and if its not already fixed at the top 
        if ($(this).scrollTop() >= navbar_anchor && $('.navbar').css('position') != 'fixed') 
        {    // Change the CSS of the navbar to hilight it and fix it at the top of the screen.
            $('.navbar').css({
                'position': 'fixed',
                'top': '0px'
            });
            // Changing the height of the navbar anchor to that of navbar so that there is no change in the overall height of the page.
            $('.navbar_anchor').css('height', '60px');
        } 
        else if ($(this).scrollTop() < navbar_anchor && $('.navbar').css('position') != 'relative') 
        {    // If the user has scrolled back to the location above the navbar anchor place it back into the content.
             
            // Change the height of the navbar anchor to 0 and now we will be adding the navbar back to the content.
            $('.navbar_anchor').css('height', '0px');
             
            // Change the CSS and put it back to its original position.
            $('.navbar').css({
                'position': 'relative'
            });
        }
    });
});

