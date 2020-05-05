export class TypeRegistry {
  constructor();
  addType(typeKey, typeDef);
  standardizeType(typeDef);
  listKeys();
  get(typeKey);
  importLegacyTypes(types);
}
