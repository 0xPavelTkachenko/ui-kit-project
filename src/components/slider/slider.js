import RangeSlider from '../../../libs/slider/range-slider/js/range-slider';
import '../../../libs/slider/range-slider/css/range-slider.css';

RangeSlider.init($);

class Slider {
  constructor(root, id) {
    this._$root = $(root);
    this._id = id;
    this._useJqueryPlugin();
  }

  toString() {
    return `{"class": "Slider", "id": "${this._id}"}`;
  }

  _useJqueryPlugin() {
    this._$root.rangeSlider();
  }
}

const $sliders = $('.js-slider');

$sliders.each(function createSlider(id) {
  new Slider(this, id);
});

export default Slider;
