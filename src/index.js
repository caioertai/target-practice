import Marker from './marker';
import Target from './target';

window.onLoad = (()=> {
  const target = new Target('#target');
  const marker = new Marker('#marker', target);




  // TODO: remove
  window.target = target;
  window.marker = marker;
})();
