export const reviewSchema = `#graphql
    type Review {
        id:ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    
    #graph entrypoints
    extend type Query {
        reviews: [Review] #all reviews
        review(id: ID!): Review #one review with specific id
    }

    extend type Mutation{
        deleteReview(id:ID!): [Review]
        addReview(review:AddReviewInput!):Review
    }

    input AddReviewInput {
        rating: Int!
        content: String!
        game_id: ID!
        author_id: ID!
    }
`

// int, float, string, boolean, ID
