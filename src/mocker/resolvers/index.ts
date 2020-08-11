import Rocket from "./Rocket"

const defaultResolvers = {
  // Scalars

  // Object
  Rocket,

  Query: () => ({
    launch: (_parent, args) => {
      return {
        id: args.id
      }
    }
  }),
  Mutation: () => ({}),
}

export { defaultResolvers }
