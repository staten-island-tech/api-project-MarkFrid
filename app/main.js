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
  // Clear container on initial load
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

function displayCards(array) {
  DOMSelectors.container.innerHTML = "";
  array.forEach((card) => {
    idCounter += 1;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="flex flex-col items-center justify-between w-full p-4 border border-division rounded-lg bg-base-100 shadow-md" id="card-${idCounter}">
        <h2 class="font-pixelify text-xl font-semibold text-primary mb-2">${
          card.username
        }</h2>
        <h3 class="font-pixelify text-lg text-secondary mb-2">Rating: ${
          card.score
        }</h3>
        ${
          card.avatar
            ? `<img class="font-pixelify rounded-lg my-2" src="${card.avatar}" alt="${card.username}" />`
            : `<p class="text-accent">No avatar available</p>`
        }
        <button class="btn btn-secondary" id="button-${idCounter}">Go to profile</button>
      </div>`
    );

    document
      .querySelector(`#button-${idCounter}`)
      .addEventListener("click", () => {
        fetchMore(card.username);
      });
  });
}

function fetchMore(player) {
  const profileURL = `https://www.chess.com/member/${player}`;
  window.location.href = profileURL;
}

getData(URL);
