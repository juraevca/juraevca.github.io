$(document).ready(function() {
    $('#theme').click(function() {
        $('html').toggleClass('dark');
        if ($("html").hasClass("dark")) {
            localStorage.setItem("color-theme", "dark");
          } else {
            localStorage.setItem("color-theme", "light");
          }
    });

    $('#menu a').click(function() {
        $('#menu a').removeClass('active');
        $(this).addClass('active');
    });
});


var currentActive = $('nav ul:first-child a');

$(window).on('scroll', function() {
    // Iterate through sections to check their respective offsets relative to the top of the window
    $('section').each(function() {
      var sectionTop = $(this).offset().top - 250;
      var id = $(this).attr('id');

      // If window scroll position is greater than or equal to sectionTop
      if ($(window).scrollTop() >= sectionTop) {
        // Set active class to corresponding menu item (use cached value if possible)
        if (currentActive.attr('href') !== '#' + id) {
          currentActive.removeClass('selfactive');
          currentActive = $('a[href="#' + id + '"]');
          currentActive.addClass('selfactive');
        }
      }
    });
  });