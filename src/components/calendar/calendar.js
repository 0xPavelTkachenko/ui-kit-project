import $ from 'jquery';
import 'air-datepicker/dist/js/datepicker.min';
import 'air-datepicker/dist/js/i18n/datepicker.en';
import 'air-datepicker/dist/css/datepicker.min.css';

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
        firstDay: 1,
        todayButton: new Date(),
        toggleSelected: false,
        keyboardNav: false,
        navTitles: {
          days: 'MM',
        },
        language: 'en',
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
