import $ from 'jquery';

class Button {
  constructor(root, id) {
    this._$root = $(root);
    this._id = id;
    this._bindEvents();
  }

  createRippleEffect(coords) {
    const $button = this._$root;
    const $ripple = $('<span>').appendTo($button).addClass('button__ripple');
    const size = Math.max($button.outerWidth(), $button.outerHeight());
    const left = coords.x - size / 2;
    const top = coords.y - size / 2;

    $ripple.css(
      {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}px`,
        top: `${top}px`,
      },
    );

    setTimeout(this._tryToRemove.bind(this, $ripple), 100);

    return this;
  }

  enableRippleEffect() {
    this._$root.on(`click.Button${this._id}`, this._handleRippleEffect.bind(this));
    return this;
  }

  disableRippleEffect() {
    this._$root.off(`click.Button${this._id}`);
    return this;
  }

  toString() {
    return `{"class": "Button", "id": "${this._id}"}`;
  }

  _bindEvents() {
    this._$root.on(`click.Button${this._id}`, this._handleRippleEffect.bind(this));
  }

  _handleRippleEffect(event) {
    const x = event.clientX - this._$root.offset().left;
    const y = event.clientY - this._$root.offset().top;
    this.createRippleEffect({ x, y });
  }

  _tryToRemove($ripple) {
    if ($ripple.css('opacity') === '0') {
      $ripple.remove();
    } else {
      setTimeout(this._tryToRemove.bind(this, $ripple), 100);
    }
  }
}

export default Button;
