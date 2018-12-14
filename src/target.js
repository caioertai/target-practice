class Target {
  constructor(circleSelector) {
    this.elem = document.querySelector(circleSelector);
    console.log(this.center());
  }

  has_location(location) {
    return this.has_x(location.x) && this.has_y(location.y)
  }

  has_x(xPos) {
    return this.leftEdge() < xPos && xPos < this.rightEdge()
  }

  has_y(yPos) {
    return this.topEdge() < yPos && yPos < this.bottomEdge()
  }

  center() {
    return {
      x: (this.width() / 2) + this.leftEdge(),
      y: (this.height() / 2) + this.topEdge()
    }
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

  rightEdge() {
    return this.leftEdge() + this.width()
  }

  bottomEdge() {
    return this.topEdge() + this.height()
  }
}

export default Target;
