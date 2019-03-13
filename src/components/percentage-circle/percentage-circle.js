import $ from 'jquery';

import '../../../libs/percentage-circle/circliful/js/jquery.circliful.min';
import '../../../libs/percentage-circle/circliful/css/jquery.circliful.css';

class PercentageCircle {
  constructor(root, id) {
    this._$root = $(root);
    this._id = id;
    this._useJqueryPlugin();
  }

  toString() {
    return `{"class": "PercentageCircle", "id": "${this._id}"}`;
  }

  _useJqueryPlugin() {
    const $percentageCircle = this._$root;

    $percentageCircle.circliful(
      {
        backgroundColor: 'none',
        foregroundBorderWidth: 6,
        noPercentageSign: true,
        percentageTextSize: '',
        fontColor: '#9D9D9D',
      },
    );
  }
}

const createPercentage = function createPercentageCircle(id) {
  new PercentageCircle(this, id);
};

const $percentageCircles = $('.js-percentage-circle');

$percentageCircles.each(createPercentage);

export default PercentageCircle;
