import { api } from "./api";

export function addReview(game_id, nota, comentario) {
  return api(`/watchlists/games/reviews/${game_id}`, {
    method: "POST",
    body: JSON.stringify({ nota, comentario }),
  });
}

export function getAllReviews(game_id) {
  return api(`/watchlists/games/all-reviews/${game_id}`);
}

export function deleteReview(game_id, review_id) {
  return api(`/watchlists/games/${game_id}/reviews/${review_id}`, {
    method: "DELETE",
  });
}
