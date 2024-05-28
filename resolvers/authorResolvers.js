import db from '../_db.js'

export const authorResolvers = {
  Query: {
    authors() {
      return db.authors
    },
    author(parent, args, context) {
      return db.authors.find((author) => author.id === args.id)
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id)
    },
  },
  Mutation: {
    deleteAuthor(_, args) {
      //check author existence
      const authorExists = db.authors.some((author) => author.id === args.id)
      if (!authorExists) {
        throw new Error(`Author with ID ${args.id} does not exist`)
      }

      db.authors = db.authors.filter((author) => author.id !== args.id)

      //reviews associated to this user
      db.reviews = db.reviews.filter((review) => review.author_id !== args.id)
      /*...
      then plan to delete/update all related reviews from games*/
      return db.authors
      // return can be a confirmation message
    },
    //addAuthor...
  },
}
