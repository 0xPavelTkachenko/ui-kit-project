let btns = document.getElementsByClassName('btn');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('mousedown', function(e) {
    let circle = document.createElement('div');
    circle.classList.add('btn__ripple');

    let d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';

    let rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left -d/2 + 'px';
    circle.style.top = e.clientY - rect.top - d/2 + 'px';

    this.appendChild(circle);
  });
}
