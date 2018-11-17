'use strict';

import './air-datepicker/dist/js/datepicker.min.js';
import './air-datepicker/dist/js/i18n/datepicker.en.js';
import './air-datepicker/dist/css/datepicker.min.css';

$('.calendar').each(function() {
  $(this).datepicker({
    language: 'en',
    firstDay: 1,
    todayButton: new Date(),
    toggleSelected: false,
    keyboardNav: false,
    navTitles: {
      days: 'MM'
    },
    onSelect: function(formattedDate, date, inst) {
      inst.$el.find('.datepicker').attr('data-date', date.getDate());
    }
  });

  $(this).find('.datepicker--button[data-action="today"]').trigger('click');
});
