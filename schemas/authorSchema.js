export const authorSchema = `#graphql
    type Author {
        id:ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    
    #graph entrypoints
    extend type Query {
        authors: [Author]
        author(id:ID!): Author
    }

    extend type Mutation{
        deleteAuthor(id:ID!): [Author] 
        # return can be a message, or both by creating a custom 
        # type DeleteResponse {
        #     message:String!, 
        #     authors:[Author]
        # })
        # deleteAuthor(id:ID!): DeleteResponse! 
        addAuthor(author:AddAuthorInput!):Author
    }

    input AddAuthorInput {
        name: String!
        verified: Boolean!
    }
`

// int, float, string, boolean, ID
