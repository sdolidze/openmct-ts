import { EventEmitter } from './EventEmitter';

export class ApplicationRouter extends EventEmitter {
  constructor();
  start();
  handleLocationChange(pathString);
  doPathChange(newPath, oldPath, newLocation);
  doParamsChange(newParams, oldParams, newLocation);
  updateParams(updateParams);
  getParams();
  update(path, params);
  set(path, queryString);
  setQueryString(queryString);
  setPath(path);
  route(matcher, callback);
}
