import _db from "../db/_db.js";

export const resolvers = {
  Query: {
    games() {
      return _db.games;
    },
    game(_, args) {
      return _db.games.find(game => game.id === args.id)
    },
    reviews() {
      return _db.reviews;
    },
    review(_, args) {
      return _db.reviews.find(review => review.id === args.id)
    },
    authors() {
      return _db.authors;
    },
    author(_, args) {
      return _db.authors.find(game => game.id === args.id)
    },
  },
  Game: {
    reviews(parent) {
      return _db.reviews.filter(review => review.game_id === parent.id)
    },
    authors(parent) {
      return _db.authors.filter(author => _db.reviews.some(review => review.author_id === author.id && review.game_id === parent.id))
    },
  },
  Mutation: {
    deleteGame(_, args) {
      const gameIndex = _db.games.findIndex(game => game.id === args.id);
      if (gameIndex > -1) {
        _db.games.splice(gameIndex, 1);
        return _db.games;
      }
    },
    addGame(_,args) {
      const newGame = { id: Date.now().toString(),...args.game };
      _db.games.push(newGame);
      return newGame;
    },
    updateGame(_,args) {
      const gameIndex = _db.games.findIndex(game => game.id === args.id);
      if (gameIndex > -1) {
        _db.games[gameIndex] = {..._db.games[gameIndex],...args.game };
        return _db.games[gameIndex];
      }
      return null;
    }
  }
};
