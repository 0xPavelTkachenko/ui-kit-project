import $ from 'jquery';

import './index.styl';
import Button from './components/btn/btn';

const createBtn = function createButton(id) {
  new Button(this, id);
};

const $buttons = $('.js-btn');

$buttons.each(createBtn);
