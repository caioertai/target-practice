import Marker from './marker';
import Target from './target';

window.onLoad = (()=> {
  new Marker('#marker');
  new Target('#target');
})();
