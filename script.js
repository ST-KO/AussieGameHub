const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
// const worldCupYear = document.getElementById("year");
// const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const theGameStudios = {
  team: "Australia",
  sport: "Game Development",
//   year: 1986,
//   isWorldCupWinner: true,
//   headCoach: {
//     coachName: "Carlos Bilardo",
//     matches: 7,
//   },
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
      language: "C++",
      isRemote: false,
      remote: null,
      website: "https://www.chaostheorygames.com/"
    },
    {
      name: "Mode Games",
      location: "Sydney",
      gameengine: "Unity",
      language: "C#",
      isRemote: false,
      remote: null,
      website: "https://www.mode-games.com/"
    },
    {
      name: "Blowfish Studios",
      location: "Sydney",
      gameengine: "Unity, Unreal, Phaser",
      language: "C#, C++, JavaScript",
      isRemote: true,
      remote: "Hybrid",
      website: "https://www.blowfishstudios.com/"
    },
    {
      name: "Noble Steed Games",
      location: "Sydney",
      gameengine: "Unity",
      language: "C#",
      isRemote: true,
      remote: "Flexible",
      website: "https://noblesteedgames.com/"
    },
    {
      name: "SMG Studio",
      location: "Sydney",
      gameengine: "Unity",
      language: "C#",
      isRemote: true,
      remote: "Flexible",
      website: "https://www.smgstudio.com/"
    },
    {
      name: "Not Doppler",
      location: "Sydney",
      gameengine: "Unity",
      language: "C#",
      isRemote: true,
      remote: "Hybrid",
      website: "https://www.notdoppler.com/"
    },
    {
      name: "UBISOFT",
      location: "Sydney",
      gameengine: "Custom Engine",
      language: "C++",
      isRemote: true,
      remote: "Hybrid",
      website: "https://www.ubisoft.com/en-us/"
    },
    {
      name: "3RD SENSE",
      location: "Sydney",
      gameengine: "Unity",
      language: "C#",
      isRemote: false,
      remote: null,
      website: "https://3rdsense.com/"
    },
    {
      name: "High Limit Studio",
      location: "Sydney",
      gameengine: "Maybe Unity & Phaser",
      language: "C#, JavaScript",
      isRemote: false,
      remote: null,
      website: "https://highlimitstudio.com/"
    },
    {
      name: "Hipster Whale",
      location: "Melbourne",
      gameengine: "Unity",
      language: "C#",
      isRemote: false,
      remote: null,
      website: "https://www.hipsterwhale.com/"
    },
    {
      name: "PlaySide Studios",
      location: "Melbourne",
      gameengine: "Maybe Custom Engine",
      language: "C++",
      isRemote: false,
      remote: null,
      website: "https://www.playsidestudios.com/"
    },
    {
      name: "Mighty Games Group",
      location: "Melbourne",
      gameengine: "Unity, Unreal",
      language: "C#, C++",
      isRemote: false,
      remote: null,
      website: "https://www.mightygamesgroup.com/"
    },
    {
      name: "Firemonkeys Studios",
      location: "Melbourne",
      gameengine: "Maybe Custom Engine",
      language: "C++",
      isRemote: false,
      remote: null,
      website: "https://www.ea.com/ea-studios/firemonkeys"
    },
    {
      name: "Playcorp Studios",
      location: "Melbourne",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://www.playcorp.com/"
    },
    {
      name: "fmod",
      location: "Melbourne",
      gameengine: "Unity",
      language: "C#",
      isRemote: false,
      remote: null,
      website: "https://www.fmod.com/"
    },
    {
      name: "Millipede",
      location: "Melbourne",
      gameengine: "Unity",
      language: "C#",
      isRemote: false,
      remote: null,
      website: "https://millipede.com.au/index.html"
    },
    {
      name: "Art Of Play",
      location: "Melbourne",
      gameengine: "Unity, Phaser",
      language: "C#, JavaScript",
      isRemote: true,
      remote: "Full Remote (Australia)",
      website: "https://www.artofplaygames.com/index.html"
    },
    {
      name: "Ultimate Studio",
      location: "Melbourne",
      gameengine: "Unreal",
      language: "C++",
      isRemote: true,
      remote: "Flexible Remote",
      website: "https://ultimate.studio/"
    },
    {
      name: "The Lode",
      location: "Melbourne",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://thelode.com.au"
    },
    {
      name: "Cyber Games Studio",
      location: "Melbourne",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://cybergames.studio"
    },
    {
      name: "Opaque",
      location: "Melbourne",
      gameengine: "Unreal",
      language: "C++",
      isRemote: false,
      remote: null,
      website: "https://www.opaque.media"
    },
    {
      name: "Halfbrick Studios",
      location: "Brisbane",
      gameengine: "Unity",
      language: "C#",
      isRemote: true,
      remote: "Full Remote (Worldwide)",
      website: "https://www.halfbrick.com"
    },
    {
      name: "Spunge Games",
      location: "Brisbane",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://spungegames.com"
    },
    {
      name: "Reel Time Gaming",
      location: "Brisbane",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://www.reeltimegaming.com"
    },
    {
      name: "GAMELOFT",
      location: "Brisbane",
      gameengine: "Maybe Custom Engine",
      language: "C++",
      isRemote: true,
      remote: "Hybrid",
      website: "https://www.gameloft.com"
    },
    {
      name: "Emerge Worlds",
      location: "Brisbane",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://emergeworlds.com"
    },
    {
      name: "5 Lives Studio",
      location: "Brisbane",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://www.5livesstudios.com"
    },
    {
      name: "Eyecon",
      location: "Brisbane",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://eyecon.com"
    },
    {
      name: "Lightmare Studios",
      location: "Brisbane",
      gameengine: "Unity, Unreal",
      language: "C#, C++",
      isRemote: false,
      remote: null,
      website: "https://www.lightmare.com.au"
    },
    {
      name: "Unnatural Freaks Studio",
      location: "Perth",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://unnaturalfreaksstudio.com"
    },
    {
      name: "Big Bench Games",
      location: "Perth",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://www.bigbench.games"
    },
    {
      name: "Winterwire Games",
      location: "Perth",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://winterwiregames.com"
    },
    {
      name: "Hoodwinked Studios",
      location: "Perth",
      gameengine: "Maybe Unity",
      language: "Maybe C#",
      isRemote: false,
      remote: null,
      website: "https://playstarlost.com"
    },
  ],
};

Object.freeze(theGameStudios);
const { sport, team, year, players } = theGameStudios;
// const { coachName } = theGameStudios.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
// worldCupYear.textContent = year;
// headCoach.textContent = coachName;

const setPlayerCards = (arr = players, selectedOption) => {
   
    playerCards.innerHTML += arr
    .map(
      ({ name, location, gameengine,language, isRemote, remote, website }) => {
       
        const playerHeader = selectedOption === "All Locations" || selectedOption === "Remote" 
        ? `<h2>${name}</h2>` 
        : `<h2>${name} <br/>${isRemote ? "(Remote)" : "(No Remote)"}</h2>`
       
        return (
            `
            <div class="player-card">
            ${playerHeader}
            <p><span>Location</span>: ${location}</p>
            <p><span>Game Engine</span>: ${gameengine}</p>
            <p><span>Language</span>: ${language}</p>
            <p><span>Remote</span>: ${remote !== null ? remote : "N/A"}</p>
            <p><span><a href="${website}" target="_blank">Website Link</a></span></p>
            </div>
            `
        )
      }
        
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";
  const selectedOption = e.target.value;
  switch (selectedOption) {
    case "Remote":
      setPlayerCards(players.filter((player) => player.remote !== null), selectedOption);
      break;
    case "Sydney":
      setPlayerCards(players.filter((player) => player.location === "Sydney"), selectedOption);
      break;
    case "Melbourne":
      setPlayerCards(
        players.filter((player) => player.location === "Melbourne"), selectedOption
      );
      break;
    case "Brisbane":
      setPlayerCards(
        players.filter((player) => player.location === "Brisbane"), selectedOption
      );
      break;
    case "Perth":
      setPlayerCards(
        players.filter((player) => player.location === "Perth"), selectedOption
      );
      break;
    default: 
        setPlayerCards(players, selectedOption);
      break;
    }
});