const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Australia",
  sport: "Game Development",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Chaos Theory",
      location: "Sydney",
      gameengine: "Unity",
      language: "C#",
      isRemote: true,
      remote: "Hybrid",
      website: "https://www.chaostheorygames.com/"
    },
    {
      name: "Riot Games Sydney",
      location: "Sydney",
      gameengine: "Unreal",
      languange: "C++",
      isRemote: false,
      remote: null,
      website: "https://www.chaostheorygames.com/"
    },
    {
      name: "Mode Games",
      location: "Sydney",
      gameengine: "Unity",
      languange: "C#",
      isRemote: false,
      remote: null,
      website: "https://www.mode-games.com/"
    },
    {
      name: "Blowfish Studios",
      location: "Sydney",
      gameengine: "Unity, Unreal, Phaser",
      languange: "C#, C++, JavaScript",
      isRemote: true,
      remote: "Hybrid",
      website: "https://www.blowfishstudios.com/"
    },
    {
      name: "Noble Steed Games",
      location: "Sydney",
      gameengine: "Unity",
      languange: "C#",
      isRemote: true,
      remote: "Flexible",
      website: "https://noblesteedgames.com/"
    },
    {
      name: "SMG Studio",
      location: "Sydney",
      gameengine: "Unity",
      languange: "C#",
      isRemote: true,
      remote: "Flexible",
      website: "https://www.smgstudio.com/"
    },
    {
      name: "Not Doppler",
      location: "Sydney",
      gameengine: "Unity",
      languange: "C#",
      isRemote: true,
      remote: "Hybrid",
      website: "https://www.notdoppler.com/"
    },
    {
      name: "UBISOFT",
      location: "Sydney",
      gameengine: "Custom Engine",
      languange: "C++",
      isRemote: true,
      remote: "Hybrid",
      website: "https://www.ubisoft.com/en-us/"
    },
    {
      name: "3RD SENSE",
      location: "Sydney",
      gameengine: "Unity",
      languange: "C#",
      isRemote: false,
      remote: null,
      website: "https://3rdsense.com/"
    },
    {
      name: "High Limit Studio",
      location: "Sydney",
      gameengine: "Maybe Unity & Phaser",
      languange: "C#, JavaScript",
      isRemote: false,
      remote: null,
      website: "https://highlimitstudio.com/"
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
// headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname, location, gameengine,language,isRemote, remote, website }) =>
        `
        <div class="player-card">
          <h2>${name} <br/>${isRemote ? "(Remote)" : ""}</h2>
          <p>Location: ${location}</p>
          <p>Game Engine: ${gameengine}</p>
          <p>Language: ${language}</p>
          <p>Remote: ${remote !== null ? remote : "N/A"}</p>
          <p><a hreft="${website}"></a></p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "Remote":
      setPlayerCards(players.filter((player) => player.remote !== null));
      break;
    case "Sydney":
      setPlayerCards(players.filter((player) => player.location === "Sydney"));
      break;
    case "Melbourne":
      setPlayerCards(
        players.filter((player) => player.location === "Melbourne")
      );
      break;
    case "Brisbane":
      setPlayerCards(
        players.filter((player) => player.location === "Brisbane")
      );
      break;
    case "Perth":
      setPlayerCards(
        players.filter((player) => player.location === "Perth")
      );
      break;
    default: 
      setPlayerCards();
      break;
    }
});