import $ from 'jquery';

import '../../../libs/dropdown/minimalect/js/jquery.minimalect.min';
import '../../../libs/dropdown/minimalect/css/jquery.minimalect.min.css';

class Dropdown {
  constructor(root, id) {
    this._$root = $(root);
    this._id = id;
    this._useJqueryPlugin();
  }

  toString() {
    return `{"class": "Dropdown", "id": "${this._id}"}`;
  }

  _useJqueryPlugin() {
    const $select = this._$root.find('select');

    $select.minimalect(
      {
        placeholder: this._$root.attr('data-placeholder'),
        searchable: false,
      },
    );
  }
}

const $dropdowns = $('.js-dropdown');

$dropdowns.each(function createDropdown(id) {
  new Dropdown(this, id);
});

export default Dropdown;
