import '../btn/btn.js';

let forms = document.querySelectorAll('.message-form');

for (let i = 0; i < forms.length; i++) {
  let nameField = forms[i].querySelector('.message-form__name');
  let emailField = forms[i].querySelector('.message-form__email');
  let messageField = forms[i].querySelector('.message-form__message');

  let nameBubble = forms[i].querySelector('.message-form__name + .message-form__bubble');
  let emailBubble = forms[i].querySelector('.message-form__email + .message-form__bubble');

  forms[i].querySelector('.message-form__btn').addEventListener('mousedown', function() {
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
