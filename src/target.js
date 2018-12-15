import Circle from './circle'

class Target {
  constructor(targetSelector) {
    this.elem = document.querySelector(targetSelector);
    this.circles = this._initializeCircles();
  }

  _initializeCircles() {
    return [...this.elem.querySelectorAll('.circle')].map(circle => {
      return new Circle(circle)
    })
  }
}

export default Target;
