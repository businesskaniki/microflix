import './style.css';
import './desktop.css';
import { displayMovies, displayComments } from './modules/fetch.js';
import { displayAllMovies } from './modules/display.js';

displayMovies();
displayComments();
displayAllMovies();
