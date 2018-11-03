'use strict';

import '../btn/btn.js';

let forms = document.querySelectorAll('.feedback-form');

for (let i = 0; i < forms.length; i++) {
  let nameField = forms[i].querySelector('.feedback-form__name');
  let emailField = forms[i].querySelector('.feedback-form__email');
  let messageField = forms[i].querySelector('.feedback-form__message');

  let nameBubble = forms[i].querySelector('.feedback-form__name + .feedback-form__bubble');
  let emailBubble = forms[i].querySelector('.feedback-form__email + .feedback-form__bubble');

  forms[i].querySelector('.feedback-form__btn').addEventListener('mousedown', function() {
    if (!nameField.hasAttribute('required') || nameField.value) {
      nameBubble.classList.remove('speech-bubble_red');
      nameBubble.style.display = 'block';
      nameBubble.querySelector('.speech-bubble__content').textContent = forms[i].getAttribute('data-success-msg');
    } else {
      nameBubble.classList.add('speech-bubble_red');
      nameBubble.style.display = 'block';
      nameBubble.querySelector('.speech-bubble__content').textContent = forms[i].getAttribute('data-error-msg');
    }

    if (!emailField.hasAttribute('required') || emailField.value) {
      emailBubble.classList.remove('speech-bubble_red');
      emailBubble.style.display = 'block';
      emailBubble.querySelector('.speech-bubble__content').textContent = forms[i].getAttribute('data-success-msg');
    } else {
      emailBubble.classList.add('speech-bubble_red');
      emailBubble.style.display = 'block';
      emailBubble.querySelector('.speech-bubble__content').textContent = forms[i].getAttribute('data-error-msg');
    }
  });

  nameField.addEventListener('blur', function() {
    if (!nameField.hasAttribute('required') || nameField.value) {
      nameBubble.classList.remove('speech-bubble_red');
      nameBubble.style.display = 'block';
      nameBubble.querySelector('.speech-bubble__content').textContent = forms[i].getAttribute('data-success-msg');
    } else {
      nameBubble.classList.add('speech-bubble_red');
      nameBubble.style.display = 'block';
      nameBubble.querySelector('.speech-bubble__content').textContent = forms[i].getAttribute('data-error-msg');
    }
  });

  emailField.addEventListener('blur', function() {
    if (!emailField.hasAttribute('required') || emailField.value) {
      emailBubble.classList.remove('speech-bubble_red');
      emailBubble.style.display = 'block';
      emailBubble.querySelector('.speech-bubble__content').textContent = forms[i].getAttribute('data-success-msg');
    } else {
      emailBubble.classList.add('speech-bubble_red');
      emailBubble.style.display = 'block';
      emailBubble.querySelector('.speech-bubble__content').textContent = forms[i].getAttribute('data-error-msg');
    }
  });
}
