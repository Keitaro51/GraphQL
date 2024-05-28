import db from '../_db.js'

export const reviewResolvers = {
  Query: {
    reviews() {
      return db.reviews
    },
    review(parent, args, context) {
      return db.reviews.find((review) => review.id === args.id)
    },
  },
  Review: {
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id)
    },
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id)
    },
  },
  Mutation: {
    deleteReview(_, args) {
      db.reviews = db.reviews.filter((review) => review.id !== args.id)
      return db.reviews
    },
    addReview(_, args) {
      let newReview = {
        ...args.review,
        id: Math.floor(Math.random() * 10000).toString(),
      }
      db.reviews = [...db.reviews, newReview]

      return newReview
    },
  },
}
