import MockFactory from 'mgdg'
import schemaJson from '../schema'
import { defaultResolvers } from './resolvers'

export default new MockFactory(schemaJson as any, { mocks: defaultResolvers })
