import './style.css';
import './desktop.css';
import fetchdata from './modules/fetch.js';
import likes from './modules/likes.js';

fetchdata();
likes();

const likebtn = document.querySelectorAll('.bi-heart-fill');

console.log(likebtn);