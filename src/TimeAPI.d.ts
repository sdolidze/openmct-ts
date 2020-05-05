import { EventEmitter } from './EventEmitter';

export class TimeAPI extends EventEmitter {
  constructor();
  addTimeSystem(timeSystem);
  getAllTimeSystems();
  addClock(clock);
  getAllClocks();
  validateBounds(bounds);
  validateOffsets(offsets);
  bounds(newBounds);
  timeSystem(timeSystemOrKey, bounds);
  timeOfInterest(newTOI);
  tick(timestamp);
  clock(keyOrClock, offsets);
  clockOffsets(offsets);
  stopClock();
}
