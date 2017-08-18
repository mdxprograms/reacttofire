import Rebase from 're-base';
import { fbConfig, signIn } from './Auth';

const base = Rebase.createClass(fbConfig.database());

export const syncState = (storeType, key) => {
  return base.syncState(storeType, {
    context: this,
    state: key,
    asArray: true
  });
}
