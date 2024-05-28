import db from '../_db.js'

export const gameResolvers = {
  Query: {
    games() {
      return db.games
    },
    game(parent, args, context) {
      return db.games.find((game) => game.id === args.id)
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id)
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id !== args.id)
      //plan to delete/update all related reviews from this game
      return db.games
    },
    addGame(_, args) {
      let newGame = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(), //or uuid v4
        //reviews:[] not needed?
      }
      db.games = [...db.games, newGame]
      return newGame
    },
    updateGame(_, args) {
      db.games = db.games.map((game) =>
        game.id === args.id ? {...game, ...args.edits} : game
      )
      return db.games.find((game) => game.id === args.id)
    },
  },
}
