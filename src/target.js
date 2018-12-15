import Circle from './circle'

class Target {
  constructor(circleSelector) {
    this.elem = document.querySelector(circleSelector);
    console.log(this.center());
  }

  has_location(location) {
    const center = this.center()
    const xP = location.x;
    const yP = location.y;
    const xC = center.x
    const yC = center.y

    const distanceFromCenter = Math.sqrt(
      Math.pow((xP - xC), 2) + Math.pow((yP - yC), 2)
    )

    return distanceFromCenter < this.radius();
  }

  center() {
    return {
      x: (this.width() / 2) + this.leftEdge(),
      y: (this.height() / 2) + this.topEdge()
    }
  }

  radius() {
    return this.width() / 2;
  }

  width() {
    return this.elem.offsetWidth
  }

  height() {
    return this.elem.offsetHeight
  }

  leftEdge() {
    return this.elem.offsetLeft
  }

  topEdge() {
    return this.elem.offsetTop
  }
}

export default Target;
