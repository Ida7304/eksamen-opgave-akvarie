"use strict";
// Variabler
const akvarieMandenClosedImg = document.getElementById(
  "akvariemanden-closed-mouth"
);
const klikMigBtn = document.querySelector(".akvariemand-start-tekstboks");
const akvariemandTaleBoks = document.querySelector(
  ".akvariemand-slut-tekstboks"
);

// Variabel til lyden der spiller når fiskene snakker
// Vi bruger let så vi kan ændre dens værdi senere
let fishSpeak = null;

// Henter lyden til akvariemanden
const akvarieMandenSound = new Audio();
akvarieMandenSound.src = "audio/akvariemand-introduktion-audio.mp3";

// Afspiller snakke animation og lyd til akvariemanden når man klikker på ham
if (akvarieMandenClosedImg) {
  akvarieMandenClosedImg.addEventListener("click", () => {
    akvarieMandenClosedImg.src = "video/akvariemanden-gif.gif";
    akvarieMandenSound.play();

    // Gør "klik på mig" knappen usynlig mens han snakker
    klikMigBtn.classList.add("is-not-visible");

    // Gør akvariemandens taleboks synlig mens han snakker
    akvariemandTaleBoks.classList.add("is-visible");

    // Stopper snakke animationen efter 16 sekunder
    setTimeout(() => {
      akvarieMandenClosedImg.src = "img/akvariemanden-lukket-mund.png";
      // Gør "klik på mig" knappen synlig når han er færdig med at snakke
      klikMigBtn.classList.remove("is-not-visible");

      // Gør akvariemandens taleboks usynlig når han er færdig med at snakke
      akvariemandTaleBoks.classList.remove("is-visible");
    }, 16000);
  });
}

// Samme funktioner som ovenstående bare tilføjet til "klik på mig" knappen så man kan
// klikke på den eller akvariemanden for at få ham til at snakke

if (klikMigBtn) {
  klikMigBtn.addEventListener("click", () => {
    akvarieMandenClosedImg.src = "video/akvariemanden-gif.gif";
    akvarieMandenSound.play();

    // Gør "klik på mig" knappen usynlig mens han snakker
    klikMigBtn.classList.add("is-not-visible");

    // Gør akvariemandens taleboks synlig mens han snakker
    akvariemandTaleBoks.classList.add("is-visible");

    // Stopper snakke animationen efter 16 sekunder
    setTimeout(() => {
      akvarieMandenClosedImg.src = "img/akvariemanden-lukket-mund.png";
      // Gør "klik på mig" knappen synlig når han er færdig med at snakke
      klikMigBtn.classList.remove("is-not-visible");

      // Gør akvariemandens taleboks usynlig når han er færdig med at snakke
      akvariemandTaleBoks.classList.remove("is-visible");
    }, 16000);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const bubblesContainer = document.querySelector(".bubbles");
  for (let i = 0; i < 18; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    // Generer en tilfældig position for boblen horisontalt
    const randomLeft = Math.random() * 100; // 0 til 100%
    bubble.style.left = `${randomLeft}vw`; // Sæt venstre position i vw

    // Generer en tilfældig startposition vertikalt
    const randomBottom = Math.random() * 80; // 0 til 80vh
    bubble.style.bottom = `${randomBottom}vh`; // Sæt bundt position i vh

    bubblesContainer.appendChild(bubble);
  }
});

/* anne-sofie har lavet javascript til tooltip */

// HTML struktur for fiskenes talebobler
const fishInfo = [
  {
    className: "fish1",
    name: "Klovnfisk",
    imgId: "klovnfisk-info",
    fishAudioSrc: "audio/klovnefisk.mp3",
    info1:
      "Hej! Jeg hedder Klovnfisk, og jeg bor i de varme koralhave omkring Australien og Indonesien. Jeg elsker at gemme mig i min søanemone, som beskytter mig med sine giftige arme, men den stikker ikke mig, for vi er bedste venner!",
    info2:
      "Jeg spiser små rejer, plankton og madrester, der flyder forbi mit hjem. Jeg ser måske sjov ud, men jeg er faktisk meget modig!",
  },
  {
    className: "fish2",
    name: "Sandspiser-gobi",
    imgId: "sandspiser-info",
    fishAudioSrc: "audio/sandspiser-gobi.mp3",
    info1:
      "Jeg hedder Sandspiser-gobi, og jeg bor på sandbunden i koralrevene i Stillehavet og Det Indiske Ocean. Jeg elsker at suge sand ind, spise de små dyr, der gemmer sig deri og så spytter jeg det rene sand ud igen!",
    info2:
      "Jeg bygger små huler i sandet, hvor jeg bor — jeg er lidt som en undervandsbygger!",
  },
  {
    className: "fish3",
    name: "Rævefjæs",
    imgId: "raevefisk-info",
    fishAudioSrc: "audio/raevefjaes.mp3",
    info1:
      "Jeg hedder Rævefjæs og ja, mit ansigt ligner en ræv! Jeg bor i Stillehavet tæt på Australien og Filippinerne, hvor jeg svømmer rundt mellem koralrevene.",
    info2:
      "Jeg spiser alger og havplanter, så jeg hjælper med at holde revet rent. Men pas på mine finner — de har giftige pigge, så ingen tør røre mig",
  },
  {
    className: "fish4",
    name: "Pindsvinefisk",
    imgId: "pindsvinefisk-info",
    fishAudioSrc: "audio/pindsvinefisk.mp3",
    info1:
      "Hej du! Jeg er en Pindsvinefisk, og jeg bor i varme have som Caribien og Det Røde Hav. Hvis nogen prøver at fange mig, puster jeg mig op som en stor ballon med pigge",
    info2:
      "Jeg spiser snegle, små krabber og skaldyr, og mine tænder er så stærke, at jeg kan knuse skaller. Jeg ser måske sød ud men jeg er ikke til at spøge med!",
  },
  {
    className: "fish5",
    name: "Pudsefisk",
    imgId: "pudsefisk-info",
    fishAudioSrc: "audio/pudsefisken.mp3",
    info1:
      "Hej, jeg er en Pudsefisk — havets egen frisør! Jeg bor på tropiske koralrev, og mit job er at rense de andre fisk.",
    info2:
      "De kommer til min rengøringsstation, hvor jeg spiser snavs og små parasitter fra deres hud. Jeg får mad og de bliver rene! Win-win!",
  },
  {
    className: "fish6",
    name: "Kirurgfisk",
    imgId: "kirurgfisk-info",
    fishAudioSrc: "audio/kirurgfisk.mp3",
    info1:
      'Jeg er en Kirurgfisk, og jeg bor i de varme koralhave i Stillehavet. Jeg har små, skarpe "knive" ved min hale derfor kalder de mig kirurg! Men bare rolig, jeg bruger dem kun, hvis jeg skal forsvare mig.',
    info2:
      "Jeg elsker alger — de er min yndlingsmad. Jeg er lidt som havets græsslåmaskine!",
  },
  {
    className: "fish7",
    name: "Blå Chromis",
    imgId: "blue-chromis-info",
    fishAudioSrc: "audio/blue-chromis.mp3",
    info1:
      "Halløj! Jeg er en Blå Chromis, og jeg bor på de farverige koralrev i Caribien. Jeg er lille, hurtig og skinner som et blåt lyn i vandet!",
    info2:
      "Jeg elsker at svømme sammen med mine venner — vi ser ud som en hel sky af blå glimt. Min yndlingsmad? Plankton!",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip");
  const tooltipContent = document.querySelector(".tooltip-content");
  const closeBtn = document.querySelector(".close-btn");

  
  function showTooltip(fishData) {
    if (tooltip && tooltipContent) {
      tooltipContent.innerHTML = `
        <h3>${fishData.name}</h3>
        <p>${fishData.info1}</p>
        <p>${fishData.info2}</p>
      `;
      tooltip.classList.add("is-visible");

      // Vælger klassen "info-fish img" og gør alle billederne usynlig fra start af
      document.querySelectorAll(".info-fish img"). forEach(img => {
        img.style.opacity = 0;
      });

      // Henter fishImg fra array og viser kun det billede der tilhører den fisk der klikkes på
      const fishImg = document.getElementById(fishData.imgId);
      if (fishImg) {
        fishImg.style.opacity = 1;
      }

        if(fishData.fishAudioSrc) {

          if(fishSpeak) {
            // Pause gør at hvis man klikker på en anden fisk, før lyden er færdig med at spille,
            // pauser den den nuværende lyd og den nye afspilles.
            fishSpeak.pause();
            // CurrentTime sørger for at lydfilen starter fra begyndelsen.
            fishSpeak.currentTime = 0;
          }
          // Henter lydfilen defineret i array
          fishSpeak = new Audio(fishData.fishAudioSrc);
          fishSpeak.play();
        }
    }
  }

  function hideTooltip() {
    if (tooltip) {
      tooltip.classList.remove("is-visible");
    }

    // Gør billedet af fisken usynlig igen når taleboblen lukkes
      document.querySelectorAll(".info-fish img").forEach(img => {
    img.style.opacity = 0;
  });

  if(fishSpeak) {
    // Pause stopper lyden
    fishSpeak.pause();
    // Rydder variablen fishSpeak, det signalerer at der ikke længere spilles en lyd
    // Det sørger for at vi kan bruge samme variabel til forskellige audio-filer
    fishSpeak = null;
  }
  }



  if (closeBtn) {
    closeBtn.addEventListener("click", hideTooltip);
  }

  fishInfo.forEach((fish) => {
    document.querySelectorAll("." + fish.className).forEach((elem) => {
      elem.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        showTooltip(fish);
      });
    });
  });
});


// Skrue ned for baggrundslyden
const backgroundAudio = document.getElementById("underwater-sound");
backgroundAudio.volume = 0.7;

// Laver en variable til at starte baggrundslyden , da man ikke må bruge autoplay
const startBgAudio = () => {
  backgroundAudio.play();
};

// Starter baggrundslyden når man klikker et vilkårligt sted på skærmen
document.addEventListener("click", startBgAudio);