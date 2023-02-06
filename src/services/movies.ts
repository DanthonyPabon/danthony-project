import { IMovies } from "types/api";

import { get, IRes } from "./fetch";

const getAllMovies = (): Promise<IRes<IMovies[]>> => {
  return get({
    url: "",
  });
};

const MoviesApi = { getAllMovies };

export default MoviesApi;
