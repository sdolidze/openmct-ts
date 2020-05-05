import { EventEmitter } from './EventEmitter';
import { MCT } from './MCT';

export class Selection extends EventEmitter {
  constructor(openmct: MCT);
  get();
  select(selectable, isMultiSelectEvent);
  handleMultiSelect(selectable);
  elementSelected(selectable);
  remove(selectable);
  setSelectionStyles(selectable);
  removeSelectionAttributes(selectionPath, keepParentStyle);
  addSelectionAttributes(selectable);
  parentSupportsMultiSelect(selectable);
  selectionContainsParent(selectable);
  isPeer(selectable);
  isSelectable(element);
  capture(selectable);
  selectCapture(selectable, event);
  selectable(element, context, select);
}
