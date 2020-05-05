export class ObjectAPI {
  constructor();
  supersecretSetFallbackProvider(p);
  getProvider(identifier);
  getRoot();
  addProvider(namespace, provider);
  get(identifier);
  delete();
  save();
  addRoot(key);
  mutate(domainObject, path, value);
  observe(domainObject, path, callback);
  makeKeyString(identifier);
  areIdsEqual(...identifiers);
  getOriginalPath(identifier, path);
}
