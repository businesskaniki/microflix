import './style.css';
import './desktop.css';
import { displayMovies } from './modules/fetch.js';

displayMovies();
const shownDate = Date().split(' ').splice(1, 3).join(' ');
const date = shownDate.split(' ').reverse()
console.log(date)