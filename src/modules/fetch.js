/* eslint-disable consistent-return */

const div = document.querySelector('.cards');
const fetchdata = async () => {
  const data = await fetch('https://api.tvmaze.com/shows');
  try {
    const response = await data.json();
    for (let movies = 0; movies <= 15; movies += 1) {
      const card = document.createElement('div');
      card.classList.add('card');
      const movie = response[movies];
      card.innerHTML += `
                <p><span>${movie.name}</span><i class="bi bi-heart-fill"></i><i class = "likes">5 likes</i></p>
                <button>comments</button>
      `;
      card.style.backgroundImage = `url(${movie.image.medium})`;
      div.append(card);
    }
  } catch (error) {
    return error;
  }
};

export default fetchdata;
