import $ from 'jquery';
import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/css/ion.rangeSlider.skinHTML5.css';

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
    const $input = this._$root.find('input');

    $input.ionRangeSlider({ keyboard: false });

    $('document').ready(this._recalculateSlider.bind($input));
  }

  _recalculateSlider() {
    this.data('ionRangeSlider').update();
  }
}

const $sliders = $('.js-slider');

$sliders.each(function createSlider(id) {
  new Slider(this, id);
});

export default Slider;
