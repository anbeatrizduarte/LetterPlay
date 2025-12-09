import { api } from "./api";

export function addGameToWatchlist(watchlist_id, igdb_game_id) {
  return api(`/watchlists/games/adicionar/${watchlist_id}`, {
    method: "POST",
    body: JSON.stringify({ igdb_game_id }),
  });
}

export function addGameToFavorites(igdb_game_id) {
  return api(`/watchlists/favoritos/adicionar-jogo`, {
    method: "POST",
    body: JSON.stringify({ igdb_game_id }),
  });
}

export function removeGame(watchlist_id, game_id) {
  return api(`/watchlists/${watchlist_id}/games/${game_id}`, { method: "DELETE" });
}

export function removeFromFavorites(game_id) {
  return api(`/watchlists/favoritos/remover-jogo/${game_id}`, { method: "DELETE" });
}

export function updateGameStatus(watchlist_id, game_id, new_status) {
  return api(`/watchlists/${watchlist_id}/games/${game_id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ new_status }),
  });
}