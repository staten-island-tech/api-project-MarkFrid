const URL = "https://api.chess.com/pub/leaderboards";
let idCounter = 0;

const DOMSelectors = {
  container: document.querySelector(".container"),
  live_blitz: document.querySelector(".live_blitz"),
  daily: document.querySelector(".daily"),
  daily960: document.querySelector(".daily960"),
  live_rapid: document.querySelector(".live_rapid"),
  live_bullet: document.querySelector(".bullet"),
};

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    setupEventListeners(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function setupEventListeners(data) {
  DOMSelectors.live_blitz.addEventListener("click", () => {
    displayCards(data.live_blitz);
  });

  DOMSelectors.daily.addEventListener("click", () => {
    displayCards(data.daily);
  });

  DOMSelectors.daily960.addEventListener("click", () => {
    displayCards(data.daily960);
  });

  DOMSelectors.live_rapid.addEventListener("click", () => {
    displayCards(data.live_rapid);
  });

  DOMSelectors.live_bullet.addEventListener("click", () => {
    displayCards(data.live_bullet);
  });
}

function displayCards(array) {
  DOMSelectors.container.innerHTML = "";
  array.forEach((card) => {
    idCounter += 1;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="font-bungee" data-theme="mytheme""container flex flex=wrap items-center justify-around m-auto" " id="card-${idCounter}">
        <h2 class="font-bungee card-heading" data-theme="mytheme">${
          card.username
        }</h2>
        <h3 class="font-bungee card-rating" data-theme="mytheme">Rating: ${
          card.score
        }</h3>
        ${
          card.avatar
            ? `<img class="font-bungee card-img" data-theme="mytheme" src="${card.avatar}" alt="${card.username}">`
            : `<p>No avatar available</p>`
        }
        <button class="btn learn-more" onclick="fetchMore('${
          card.username
        }')">Learn More</button>
      </div>`
    );
  });
}

async function fetchMore(username) {
  const playerURL = `https://api.chess.com/pub/player/${username}`;
  try {
    const response = await fetch(playerURL);
    const playerData = await response.json();
    alert(
      `Player: ${playerData.username}\nName: ${
        playerData.name || "Not available"
      }\nCountry: ${playerData.country || "Unknown"}`
    );
  } catch (error) {
    console.error("Error fetching player data:", error);
  }
}

getData(URL);
