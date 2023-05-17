// Decrlaration of variables

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameId = localStorage.getItem('gameId');
const userName = document.getElementById('name');
const score = document.getElementById('score');
const form = document.getElementById('add');
const scores = document.querySelector('.scores');
const scoresList = document.createElement('ul');

export {
  apiUrl, gameId, userName, score, form, scores, scoresList,
};