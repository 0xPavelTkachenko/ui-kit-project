'use strict';

import './donut/jquery.donut.js';

document.querySelectorAll('.pie-chart').forEach((pieChart) => {
  let colors = [];
  pieChart.querySelectorAll('.pie-chart__data').forEach((data) => {
    colors.push(data.getAttribute('data-color') || '#000');
  });

  $(pieChart).donut({
    colors: colors
  });
});
