$(function() {
  $('ul.main-nav__items li.drop-menu').hover(function() {
    $(this).addClass('drop-menu--active');
  }, function() {
    $(this).removeClass('drop-menu--active');
  });
});
