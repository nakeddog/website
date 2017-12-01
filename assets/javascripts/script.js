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

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    // Central Market
    center: { lat: 30.307434, lng: -97.739661 },
    mapTypeId: 'roadmap'
  });

  var polygonCoords = [
    // 15th and Pecos
    { lat: 30.2931642, lng: -97.7774453 },

    // Pecos and 35th
    { lat: 30.3135299, lng: -97.7671411 },

    // 35th and Mopac
    { lat: 30.3067146, lng: -97.7581918 },

    // 2222 and Mopac,
    { lat: 30.3353004, lng: -97.7553388 },

    // koenig and 35,
    { lat: 30.3214191, lng: -97.7075224 },

    // 35 and Dean Keeton
    { lat: 30.28654956, lng: -97.72474051 },

    // Manor and Chestnut
    { lat: 30.2844187, lng: -97.71823883 },

    // Chesnut and MLK
    { lat: 30.28045333, lng: -97.71729469 },

    // 35 and MLK
    { lat: 30.27837793, lng: -97.72974014 },

    // 15th and 35
    { lat: 30.27482, lng: -97.73141384 },

    // Einfield and Lamar
    { lat: 30.2798233, lng: -97.75046825 }
  ];

  // Construct the polygon.
  var serviceAreaShape = new google.maps.Polygon({
    paths: polygonCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  serviceAreaShape.setMap(map);
}
