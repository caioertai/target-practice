class Target {
  constructor(circleSelector) {
    this.elem = document.querySelector(circleSelector);
    console.log(this.center());
  }

  center() {
    return {
      x: (this.width() / 2) + this.offsetLeft(),
      y: (this.height() / 2) + this.offsetTop()
    }
  }

  width() {
    return this.elem.offsetWidth
  }

  height() {
    return this.elem.offsetHeight
  }

  offsetLeft() {
    return this.elem.offsetLeft
  }

  offsetTop() {
    return this.elem.offsetTop
  }
}

export default Target;
