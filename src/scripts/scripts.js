$(function() {
  $('ul.main-nav__items li.hover-menu').hover(function() {
    $(this).addClass('hover-menu--active');
  }, function() {
    $(this).removeClass('hover-menu--active');
  });
});
