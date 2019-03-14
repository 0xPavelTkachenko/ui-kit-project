import $ from 'jquery';

import '../../../libs/calendar/air-datepicker/css/datepicker.min.css';
import '../../../libs/calendar/air-datepicker/js/datepicker.min';
import '../../../libs/calendar/air-datepicker/js/i18n/datepicker.en';

class Calendar {
  constructor(root, id) {
    this._$root = $(root);
    this._id = id;
    this._useJqueryPlugin();
    this._selectCurrentDate();
  }

  toString() {
    return `{"class": "Calendar", "id": "${this._id}"}`;
  }

  _useJqueryPlugin() {
    const $calendar = this._$root;

    $calendar.datepicker(
      {
        language: 'en',
        firstDay: 1,
        todayButton: new Date(),
        toggleSelected: false,
        keyboardNav: false,
        navTitles: {
          days: 'MM',
        },
        onSelect(formattedDate, date) {
          $calendar.find('.datepicker').attr('data-date', date.getDate());
        },
      },
    );
  }

  _selectCurrentDate() {
    this._$root.datepicker().data('datepicker').selectDate(new Date());
  }
}

const $calendars = $('.js-calendar');

$calendars.each(function createCalendar(id) {
  new Calendar(this, id);
});

export default Calendar;
