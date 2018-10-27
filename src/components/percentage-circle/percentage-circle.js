'use strict';

import './circliful/js/jquery.circliful.min.js';
import './circliful/css/jquery.circliful.css';

document.querySelectorAll('.percentage-circle').forEach((percentageCircle) => {
  $(percentageCircle).circliful({
    backgroundColor: 'none',
    foregroundBorderWidth: 6,
    noPercentageSign: true,
    percentageTextSize: '',
    fontColor: '#9D9D9D'
  });
});
