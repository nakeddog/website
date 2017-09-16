$(document).ready(function() {
  $('.navbar-nav li a').click(function(event) {
    $('.navbar-collapse').collapse('hide');
  });

  var $grid = $('.grid');
  $grid.imagesLoaded(function() {
    $grid.masonry({
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-sizer',
      // do not use .grid-sizer in layout
      itemSelector: '.grid-item',
      gutter: '.gutter-sizer',
      percentPosition: true
    });
  });

  // Not sure we want this yet, but it's here for when we do
  // $('[data-toggle="lightbox"]').click(function(event) {
  //   event.preventDefault();
  //   $(this).ekkoLightbox({
  //     alwaysShowClose: true
  //   });
  // });
});
