import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating }) => getMovies(rating),
  },
};

export default resolvers;
