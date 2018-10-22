'use strict';

import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/css/ion.rangeSlider.skinHTML5.css';

document.querySelectorAll('input.slider').forEach((slider) => {
  $(slider).ionRangeSlider({keyboard: false});
  $(slider).data('ionRangeSlider').update();
  slider.remove();
});
