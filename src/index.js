import './style.css';
import game from './modules/game.js';
import player from './modules/player.js';
import {
  apiUrl, gameId, userName, score, form, scores, scoresList,
} from './modules/api.js';

if (!gameId) { game(); }

form.addEventListener('submit', (e) => {
  e.preventDefault();
  player(gameId);
  userName.value = '';
  score.value = '';
});

const refresh = document.querySelector('#refresh');
let result;

const getScores = async () => {
  const response = await fetch(`${apiUrl}/${gameId}/scores/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  result = await data.result;

  result.forEach((element) => { scoresList.innerHTML += `<li>${element.user} ${element.score}</li>`; });
};

scoresList.classList.add('score');
refresh.addEventListener('click', () => {
  scoresList.innerHTML = '';
  getScores();
});

scores.appendChild(scoresList);
