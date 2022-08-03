import './style.css';
import './desktop.css';
import { fetchdata } from './modules/fetch.js';

window.addEventListener('DOMContentLoaded', () => {
  fetchdata();
});