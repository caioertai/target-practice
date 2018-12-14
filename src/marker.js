import Hammer from 'hammerjs'

class Marker {
  constructor(elementSelector) {
    this.elem = document.querySelector(`${elementSelector} .marker-box`);

    this.hammerSetup();
  }
 
  move(e) {
    this.elem.style = `
      top:${e.y}px;
      left:${e.x}px;
    `
  }

  hammerSetup() {
    const marker = this;
    window.addEventListener('mousedown', e => {
      marker.move({ x: e.clientX, y: e.clientY });
    })

    this.hammer = new Hammer(window, {});
    this.hammer.on('pan', function(ev) {
      marker.move(ev.center);
    });

    window.addEventListener('mouseup', e => {
      alert(`${e.clientX} ${e.clientY}`)
    })
  }
}

export default Marker;