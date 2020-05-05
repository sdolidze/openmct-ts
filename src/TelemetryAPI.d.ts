import { MCT } from "./MCT";

export class TelemetryAPI {
  constructor(openmct: MCT);
  isTelemetryObject(domainObject);
  canProvideTelemetry(domainObject);
  addProvider(provider);
  findSubscriptionProvider();
  findRequestProvider(domainObject);
  findMetadataProvider(domainObject);
  findLimitEvaluator(domainObject);
  standardizeRequestOptions(options);
  request(domainObject);
  subscribe(domainObject, callback, options);
  getMetadata(domainObject);
  commonValuesForHints(metadatas, hints);
  getValueFormatter(valueMetadata);
  getFormatMap(metadata);
  addFormat(format);
  limitEvaluator(domainObject);
  getLimitEvaluator(domainObject);
}
