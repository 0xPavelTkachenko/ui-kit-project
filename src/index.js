import $ from 'jquery';

import './index.styl';
import Button from './components/button/button';

const createBtn = function createButton(id) {
  new Button(this, id);
};

const $buttons = $('.js-button');

$buttons.each(createBtn);
