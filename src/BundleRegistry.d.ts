export class BundleRegistry {
  constructor();
  register(path, definition);
  enable(path);
  disable(path);
  contains(path);
  get(path);
  list();
  remove(path);
  delete(path);
}
