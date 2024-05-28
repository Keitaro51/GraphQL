export const gameSchema = `#graphql
    type Game {
        id:ID!
        title: String!
        platform: [String!]!
        reviews:[Review!]
    }
    
    #graph entrypoints
    extend type Query {
        games: [Game]
        game(id:ID!): Game
    }
    extend type Mutation{
        deleteGame(id:ID!): [Game]
        addGame(game:AddGameInput!):Game
        updateGame(id:ID!, edits: EditGameInput!):Game
        # id separated because used but not updated
    }

    input AddGameInput {
        title: String!
        platform: [String!]!
    }
    input EditGameInput {
        title: String
        platform: [String!]
        #same than AddGameInput but fields are not required
    }
`

// int, float, string, boolean, ID
