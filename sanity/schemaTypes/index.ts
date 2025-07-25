import { type SchemaTypeDefinition } from 'sanity'
import { schemaTypes as customSchemas } from '../schemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...customSchemas],
}
