import { EventEmitter } from './EventEmitter';

export class NotificationAPI extends EventEmitter {
  constructor();
  info(message);
  alert(message);
  error(message);
  progress(message, progressPerc, progressText);
}
