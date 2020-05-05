export class InspectorViewRegistry {
  constructor();
  get(selection);
  getAllProviders();
  addProvider(provider);
  getByProviderKey(key);
}
