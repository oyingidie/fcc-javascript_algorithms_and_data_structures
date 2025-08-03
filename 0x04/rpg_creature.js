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

const clearDisplay = () => {
  creatureNameElement.textContent = "";
  creatureIdElement.textContent = "";
  weightElement.textContent = "";
  heightElement.textContent = "";
  typesElement.innerHTML = "";
  hpElement.textContent = "";
  attackElement.textContent = "";
  defenseElement.textContent = "";
  specialAttackElement.textContent = "";
  specialDefenseElement.textContent = "";
  speedElement.textContent = "";
};

const displayCreatureInfo = (data) => {
  clearDisplay();

  creatureNameElement.textContent = data.name;
  creatureIdElement.textContent = data.id;
  weightElement.textContent = data.weight;
  heightElement.textContent = data.height;

  if (data.types && data.types.length > 0) {
    data.types.forEach((typeInfo) => {
      const typeSpan = document.createElement("span");
      typeSpan.textContent = typeInfo.name;
      typesElement.appendChild(typeSpan);
    });
  }

  const getCreatureStat = (statName) => {
    const statObj = data.stats.find((stat) => stat.name === statName);
    return statObj ? statObj.base_stat : "N/A";
  };

  hpElement.textContent = getCreatureStat("hp");
  attackElement.textContent = getCreatureStat("attack");
  defenseElement.textContent = getCreatureStat("defense");
  specialAttackElement.textContent = getCreatureStat("special-attack");
  specialDefenseElement.textContent = getCreatureStat("special-defense");
  speedElement.textContent = getCreatureStat("speed");
};

const fetchCreatureData = async (parameter) => {
  const formattedParameter = parameter.toLowerCase();

  clearDisplay();

  try {
    const response = await fetch(`${apiEndpoint}${formattedParameter}`);
    const data = await response.json();
    displayCreatureInfo(data);
  } catch (error) {
    console.error("Error fetching information about creature:", error);
    alert("Creature not found");
  }
};


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
