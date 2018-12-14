import Marker from './marker';
import Target from './target';

window.onLoad = (()=> {
  window.marker = new Marker('#marker');
  window.target = new Target('#target');
})();
