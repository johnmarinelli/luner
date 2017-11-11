import { configure } from 'enzyme';
/*
 * import raf before enzyme adapter 
 */
import 'raf/polyfill';
import Adapter from 'enzyme-adapter-react-16';

/*
 * react 16 enzyme adapter
 */
configure({
  adapter: new Adapter()
});
