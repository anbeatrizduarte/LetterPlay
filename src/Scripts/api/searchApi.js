import { api } from "./api";

export function searchGames(query, page = 1, limit = 20) {
  return api(`/watchlists/pesquisar-jogos-igdb?query=${query}&page=${page}&limit=${limit}`);
}

export function searchGameById(igdb_game_id) {
  return api(`/watchlists/pesquisar-jogo-id-igdb/${igdb_game_id}`);
}

export function searchByGenre(genre_name, page = 1, limit = 20) {
  return api(`/watchlists/games/por-genero/${genre_name}?page=${page}&limit=${limit}`);
}

export function globalRanking(page = 1, limit = 20) {
  return api(`/watchlists/games/ranking-global-igdb?page=${page}&limit=${limit}`);
}

export function weeklyTopRanking() {
  return api(`/watchlists/ranking/top-melhores`);
}
