import {
  apiUrl, gameId, userName, score,
} from './api.js';

/* asynchronous function player() that performs a POST request
to submit player scores to the game API. */

const player = async () => {
  const response = await fetch(`${apiUrl}/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: userName.value,
      score: score.value,
    }),
  });
  const data = await response.text();
  return data;
};

export default player;