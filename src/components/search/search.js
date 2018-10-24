'use strict';

document.querySelectorAll('.search').forEach((search) => {
  let input = search.querySelector('.search__input');
  let placeholder = input.getAttribute('placeholder') || '';
  let notFoundMsg = input.getAttribute('data-not-found-msg') || '';

  setInterval(() => {
    if ($(search).hasClass('search_not-found')) {
      input.setAttribute('placeholder', notFoundMsg);
    } else {
      input.setAttribute('placeholder', placeholder);
    }
  }, 100);
});
