import Hammer from 'hammerjs'

class Marker {
  constructor(elementSelector, target) {
    this.elem = document.querySelector(`${elementSelector} .marker-box`);
    this.target = target

    this._setMouseBinds();
  }
 
  move(e) {
    this.elem.style = `
      top:${e.y}px;
      left:${e.x}px;
    `
  }

  // private

  _setMouseBinds() {
    window.addEventListener('mousedown', e => { this._clickBind(e, this) })
    this._hammerSetup();
    window.addEventListener('mouseup', this._mouseUpBind)
  }

  _clickBind(e, marker) {
    marker.move({ x: e.clientX, y: e.clientY });
  }

  _hammerSetup() {
    const marker = this;
    this.hammer = new Hammer(window, {});
    this.hammer.on('pan', function(ev) {
      marker.move(ev.center);
    });
  }

  _mouseUpBind(e) {
    const present = this.target.has_location({ x: e.clientX, y: e.clientY })
    alert(present)
  }
}

export default Marker;