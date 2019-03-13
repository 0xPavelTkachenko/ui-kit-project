import $ from 'jquery';

import '../../../libs/pie-chart/donut/js/jquery.donut';

class PieChart {
  constructor(root, id) {
    this._$root = $(root);
    this._id = id;
    this._useJqueryPlugin();
  }

  toString() {
    return `{"class": "PieChart", "id": "${this._id}"}`;
  }

  _useJqueryPlugin() {
    const $pieChart = this._$root;
    const colors = [];

    $pieChart.find('.pie-chart__data').each(function getColors() {
      colors.push($(this).attr('data-color') || '#000');
    });

    $pieChart.donut(
      {
        colors,
      },
    );
  }
}

const createPc = function createPieChart(id) {
  new PieChart(this, id);
};

const $pieCharts = $('.js-pie-chart');

$pieCharts.each(createPc);

export default PieChart;
