$(document).ready(function() {
    $("#nav-placeholder").load("./utilities/nav.html", function() {
        $("#sidebar").mCustomScrollbar({
          theme: "minimal"
        });
    });

    $(document).on('click', '#dismiss, .overlay', function() {
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $(document).on('click', '#sidebarCollapse', function() {
      $('#sidebar').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

});
