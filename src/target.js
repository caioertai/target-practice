import Circle from './circle'

class Target {
  constructor(targetSelector) {
    this.elem = document.querySelector(targetSelector);
    this.circles = this._initializeCircles();
  }

  _initializeCircles() {
    return [...this.elem.children].map(circle => {
      return new Circle(circle)
    })
  }
}

export default Target;
