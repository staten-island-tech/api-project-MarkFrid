const URL = "https://api.chess.com/pub/leaderboards";
let idCounter = 0;
const man = "https://api.chess.com/pub/player/${card.username}";

const DOMSelectors = {
  container: document.querySelector(".container"),
  live_blitz: document.querySelector(".live_blitz"),
  daily: document.querySelector(".daily"),
  daily960: document.querySelector(".daily960"),
  rapid: document.querySelector(".rapid"),
  live_bullet: document.querySelector(".live_bullet"),
};

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    run(data);
    getmore(man);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function run(data) {
  DOMSelectors.live_blitz.addEventListener("click", () => {
    displayCards(data.live_blitz);
  });
}

function displayCards(array) {
  DOMSelectors.container.innerHTML = "";
  array.forEach((card) => {
    idCounter += 1;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="card-${idCounter}">
        <h2 class="card-heading">${card.username}</h2>
        <h3 class="card-rating">Rating: ${card.score}</h3>
        ${
          card.avatar
            ? `<img class="card-img" src="${card.avatar}" alt="${card.username}">`
            : ""
        }
        <button class = "btn learn more">Learn More</button> 
      </div>`
    );
  });
}
async function getmore(man) {
  try {
    const response = await fetch(man);
    const data = await response.json();
    run(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData(URL);
