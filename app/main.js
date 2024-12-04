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
  DOMSelectors.container.innerHTML = "";

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

async function fetchMore(player, cardId) {
  const profileURL = `https://api.chess.com/pub/player/${player}`;
  try {
    const response = await fetch(profileURL);
    const profileData = await response.json();

    const title = profileData.title ? profileData.title : "No title available";
    const card = document.querySelector(`#card-${cardId}`);
    const titleElement = card.querySelector(".player-title");

    if (titleElement) {
      titleElement.textContent = `Title: ${title}`;
    } else {
      card.insertAdjacentHTML(
        "beforeend",
        `<p class="player-title text-white">Title: ${title}</p>`
      );
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

function displayCards(array) {
  DOMSelectors.container.innerHTML = "";
  array.forEach((card) => {
    idCounter += 1;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="flex flex-col items-center justify-between w-full p-4 rounded border-4 border-gray-700" id="card-${idCounter}">
        <h2 class="font-pixelify text-xl font-semibold mb-2 text-white">${
          card.username
        }</h2>
        <h3 class="font-pixelify text-lg mb-2 text-white">Rating: ${
          card.score
        }</h3>
        ${
          card.avatar
            ? `<img class="font-pixelify rounded-lg my-2" src="${card.avatar}" alt="${card.username}" />`
            : `<p class="text-white">No avatar available</p>`
        }
        <button class="btn btn-secondary rounded border-4 border-gray-700 text-white p-3" id="button-${idCounter}" style="background-color: #4e7837;">Fetch Title</button>
      </div>`
    );

    document
      .querySelector(`#button-${idCounter}`)
      .addEventListener("click", () => {
        fetchMore(card.username, idCounter);
      });
  });
}

getData(URL);
