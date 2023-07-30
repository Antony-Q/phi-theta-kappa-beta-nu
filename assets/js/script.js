$(document).ready(function () {
    // Function to update the navbar based on screen size
    function updateNavbar() {
      if ($(window).width() < 992) {
        $('.navbar-collapse').addClass('collapse');
        $('.navbar-toggler').show();
      } else {
        $('.navbar-collapse').removeClass('collapse');
        $('.navbar-toggler').hide();
      }
    }
  
    // Call the function on page load and window resize
    $(window).on('load resize', updateNavbar);
  
    // Toggle the collapsed class when the toggler button is clicked
    $('.navbar-toggler').on('click', function () {
      $('.navbar-collapse').toggleClass('collapse');
    });
  });
  