import './style.css';
import './desktop.css';
import fetchdata from './modules/fetch.js';
import likes from './modules/likes.js';

window.addEventListener('DOMContentLoaded', () => {
  fetchdata();
  likes();
});

