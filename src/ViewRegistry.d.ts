import { EventEmitter } from './EventEmitter';

export class ViewRegistry extends EventEmitter {
  constructor();
  get(item);
  getAllProviders();
  addProvider(provider);
  getByProviderKey(key);
  getByVPID(vpid);
}
