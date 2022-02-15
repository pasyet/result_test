import Vue from "vue"
import { API_URL } from "../config/env"

export const popularMovies = ({ commit }) => {
  Vue.http.get(`${API_URL}/movie/popular`)
    .then(response => {
      commit("setPopularMovies", response.body.results)
    })
}
