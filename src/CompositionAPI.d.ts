export class CompositionAPI {
  constructor(publicAPI);
  addProvider(provider);
  get(domainObject);
  addPolicy(policy);
  checkPolicy(container, containee);
}
