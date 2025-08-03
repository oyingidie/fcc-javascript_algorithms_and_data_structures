const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const creatureNameElement = document.getElementById("creature-name");
const creatureIdElement = document.getElementById("creature-id");
const weightElement = document.getElementById("weight");
const heightElement = document.getElementById("height");
const typesElement = document.getElementById("types");
const hpElement = document.getElementById("hp");
const attackElement = document.getElementById("attack");
const defenseElement = document.getElementById("defense");
const specialAttackElement = document.getElementById("special-attack");
const specialDefenseElement = document.getElementById("special-defense");
const speedElement = document.getElementById("speed");

const apiEndpoint = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

const runSearch = () => {
  const searchParameter = searchInput.value.trim();

  if (!searchParameter) {
    alert("Please enter creature name or ID...");
    clearDisplay();
    return;
  }

  fetchCreatureData(searchParameter);
};

searchButton.addEventListener("click", runSearch);
