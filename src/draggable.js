class Draggable {
  constructor(elementSelector) {
    this.elem = document.querySelector(elementSelector);
    this.events();
  }

  move(e) {
    elem.style = `
      top: ${e.clientY}px;
      left: ${e.clientX}px;
    `
  }

  up() {
    window.removeEventListener('mousemove', this.move, true);
  }

  down(e) {
    alert(`${e.clientX} ${e.clientY}`);
    window.addEventListener('mousemove', this.move, true);
  }

  events() {
    window.addEventListener('mousedown', this.down, false);
    window.addEventListener('mouseup', this.up, false);
  }
}

export default Draggable;