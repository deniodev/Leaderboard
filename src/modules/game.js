import { apiUrl, gameId } from './api.js';

/* asynchronous function game() that performs a POST request
 to create a new game on the API and stores the generated game ID in the local storage. */

const game = async () => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'God of War',
    }),
  });

  const data = await response.text();
  localStorage.setItem('gameId', gameId, data.slice(25, 45));
};

export default game;