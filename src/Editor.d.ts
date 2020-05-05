import { EventEmitter } from './EventEmitter';
import { MCT } from './MCT';

export class Editor extends EventEmitter {
  constructor(openmct: MCT);
  edit();
  isEditing();
  save();
  cancel();
  getTransactionService();
}
