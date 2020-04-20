import axios from "axios";

const api = axios.create({
  baseURL: "https://yts-proxy.now.sh/",
});

export const getMovies = async (rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await api.get("list_movies.json", { params: { minimum_rating: rating } });
  return movies;
};
