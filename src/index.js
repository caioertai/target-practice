import Draggable from './draggable';
import Target from './target';

window.onLoad = (()=> {
  new Draggable('#marker');
  new Target('#target');
})();
