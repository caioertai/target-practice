function dragable(el) {
  var elem = document.querySelector(el);

  function move(e) {
    elem.style = `
      top: ${e.clientY}px;
      left: ${e.clientX}px;
    `
  }

  function up() {
    window.removeEventListener('mousemove', move, true);
  }

  function down(e) {
    alert(`${e.clientX} ${e.clientY}`);
    window.addEventListener('mousemove', move, true);
  }

  function events() {
    window.addEventListener('mousedown', down, false);
    window.addEventListener('mouseup', up, false);
  }

  events();
};

function circleCenter(circleElement) {
  circleWidth = circleElement.offsetWidth
  circleHeight = circleElement.offsetHeight
  circleCenterX = (circleWidth / 2) + circleElement.offsetLeft
  circleCenterY = (circleHeight / 2) + circleElement.offsetTop

  return {x: circleCenterX, y: circleCenterY}
}
circleElement = document.querySelector('#target');
circleCenter(circleElement)

window.onLoad = (()=> {
  dragable('#marker');
})();
