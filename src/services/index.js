import fire from './firebase';
import debugEnabled from './debug-enabled';
import configureStore from './configure-store';
import { haiku, arrayOfHaikus } from './schema';

const now = () => new Date().getTime();
const twentyFourHoursAgo = () => new Date(now() - (24 * 60 * 60 * 1000));;

export { 
  fire, 
  debugEnabled, 
  configureStore, 
  haiku, 
  arrayOfHaikus,
  now,
  twentyFourHoursAgo
};
