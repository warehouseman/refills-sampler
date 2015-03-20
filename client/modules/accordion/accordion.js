if (Meteor.isClient) {
  Meteor.startup(function () {
    console.log(" ~~~~~~~~ example ~~~~~~~~")
    $('.js-accordion-trigger').bind('click', function(e){
      jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
      jQuery(this).parent().toggleClass('is-expanded');
      e.preventDefault();
    });
  });
};