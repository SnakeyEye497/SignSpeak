$(document).ready(function()
{  // When the document is ready, execute the following code
    $(window).scroll(function()
    {// When the window is scrolled, execute the following code
        if (this.scrollY > 20)
        {// If the vertical scroll position is greater than 20 pixels from the top
            $('.navbar').addClass("sticky");                    // Add the "sticky" class to the navbar
        }
        else
        { // Otherwise
            $('.navbar').removeClass("sticky");                 // Remove the "sticky" class from the navbar
        }

        if (this.scrollY > 500)
        {// If the vertical scroll position is greater than 500 pixels from the top
            $('.scroll-up-btn').addClass("show");               // Add the "show" class to the scroll-up-btn
        }
        else
        {// Otherwise
            $('.scroll-up-btn').removeClass("show");             // Remove the "show" class from the scroll-up-btn
        }
    });

    $('.scroll-up-btn').click(function()
    {    // When the scroll-up-btn is clicked, execute the following code
        $('html').animate({scrollTop: 0});                      // Animate scrolling to the top of the page

        $('html').css("scrollBehavior", "auto");                // Disable smooth scrolling temporarily
    });

    $('.navbar .menu li a').click(function()
    {
        // When a link inside the navbar menu is clicked, execute the following code
        $('html').css("scrollBehavior", "smooth");              // Enable smooth scrolling
    });

    $('.menu-btn').click(function()
    {
        // When the menu button is clicked, execute the following code
        $('.navbar .menu').toggleClass("active");               // Toggle the "active" class on the navbar menu

        $('.menu-btn i').toggleClass("active");                 // Toggle the "active" class on the menu button icon
    });

    var typed = new Typed(".typing",
    {
        // Initialize a typed.js instance with the class "typing"
        strings: ["Mute one support", "Mute one support", "Mute one support", "Mute one support", "Mute one support"],      // Set the strings to be typed
        typeSpeed: 100,                                         // Set the typing speed
        backSpeed: 60,                                          // Set the backspacing speed
        loop: true                                              // Enable looping
    });

    var typed = new Typed(".typing-2",
    {
        // Initialize a typed.js instance with the class "typing"
        strings: ["Mute one support", "Mute one support", "Mute one support", "Mute one support", "Mute one support"],      // Set the strings to be typed
        typeSpeed: 100,                                         // Set the typing speed
        backSpeed: 60,                                          // Set the backspacing speed
        loop: true                                              // Enable looping
    });

    $('.carousel').owlCarousel(
    {
        // Initialize Owl Carousel for elements with the class "carousel"
        margin: 10,                                              // Set the margin between items
        loop: true,                                              // Enable looping
        autoplay: true,                                          // Enable autoplay
        autoplayTimeOut: 2000,                                   // Set the autoplay timeout
        autoplayHoverPause: true,                                // Pause autoplay on hover
        responsive:
        {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
        // Responsive settings for different screen sizes
    });
});