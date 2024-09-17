export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
    authors: [Author!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
  type Query {
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    addGame(game: AddGameInput) : Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!,game: EditGameInput): Game
  }

  input AddGameInput {
    title: String!
    platform: [String!]!
  }

  input EditGameInput {
    title: String,
    platform: [String!]
  }
`