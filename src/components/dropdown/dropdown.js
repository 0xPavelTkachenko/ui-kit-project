'use strict';

import './minimalect/jquery.minimalect.min.js';
import './minimalect/jquery.minimalect.min.css';

document.querySelectorAll('select.dropdown').forEach((dropdown) => {
  $(dropdown).minimalect({
    placeholder: dropdown.getAttribute('data-placeholder'),
    empty: dropdown.getAttribute('data-emptyMsg')
  });
  $(dropdown).next().addClass(dropdown.classList.value);
  dropdown.remove();
});
