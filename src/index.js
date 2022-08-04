import './style.css';
import './desktop.css';
import { displayMovies, displayComments } from './modules/fetch.js';

window.addEventListener('DOMContentLoaded', () => {
  displayMovies();
  displayComments();
});