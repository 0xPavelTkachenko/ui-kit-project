function initMaps() {
  document.querySelectorAll('.map').forEach((mapWrapper) => {
    let mapOpt = {
      center: {
        lat: +mapWrapper.getAttribute('data-center-lat') || 0,
        lng: +mapWrapper.getAttribute('data-center-lng') || 0
      },
      zoom: +mapWrapper.getAttribute('data-zoom') || 4
    };

    let map = new google.maps.Map(mapWrapper.querySelector('.map__map'), mapOpt);

    if (mapWrapper.hasAttribute('data-show-marker')) {
      let markerOpt = {
        lat: +mapWrapper.getAttribute('data-marker-lat') || 0,
        lng: +mapWrapper.getAttribute('data-marker-lng') || 0
      };

      new google.maps.Marker({
        map: map,
        position: markerOpt
      });
    }
  });
}

window.initMaps = initMaps;
