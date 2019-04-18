import ymaps from 'ymaps';

class Map {
  constructor(root, id) {
    this._$root = $(root);
    this._id = id;
    this._useYandexMaps();
  }

  toString() {
    return `{"class": "Map", "id": "${this._id}"}`;
  }

  _useYandexMaps() {
    ymaps.load().then((maps) => {
      const $map = this._$root;
      const mapWindow = $map.find('.map__window').get(0);
      const mapOptions = {
        center: [+$map.attr('data-center-lat') || 0, +$map.attr('data-center-lng') || 0],
        zoom: +$map.attr('data-zoom') || 4,
        controls: ['zoomControl'],
      };

      const yandexMap = new maps.Map(mapWindow, mapOptions);

      if ($map.attr('data-show-marker')) {
        const markerCoords = [+$map.attr('data-marker-lat') || 0, +$map.attr('data-marker-lng') || 0];
        const markerOptions = {
          iconLayout: 'default#image',
          iconImageHref: './assets/images/marker.png',
          iconImageSize: [59, 60],
          iconImageOffset: [-20, -54],
        };
        const marker = new maps.Placemark(markerCoords, {}, markerOptions);
        yandexMap.geoObjects.add(marker);
      }
    });
  }
}

const $maps = $('.js-map');

$maps.each(function createMap(id) {
  new Map(this, id);
});

export default Map;
