/* eslint-disable import/prefer-default-export */
import { displayMovies } from './fetch.js';

const displayAllMovies = async () => {
  await displayMovies();
  const container = document.querySelector('.cards');
  const allMovies = document.getElementById('all');
  allMovies.textContent = `All movies (${container.childNodes.length})`;
};

export { displayAllMovies };