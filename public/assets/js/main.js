$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    var isScrolled = $(this).scrollTop() > $nav.height();
    $nav.toggleClass('scrolled', isScrolled );
    $("nav .container").toggleClass('containerScrolled', isScrolled);
    $("nav a").toggleClass('linkScrolled', isScrolled);
  });
});


