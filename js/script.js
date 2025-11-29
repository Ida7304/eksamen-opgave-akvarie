"use strict";
document.addEventListener("DOMContentLoaded", () => {
// Variabler
const akvarieMandenClosedImg = document.getElementById("akvariemanden-closed-mouth");
const klikMigBtn = document.querySelector(".akvariemand-start-tekstboks");
const akvariemandTaleBoks = document.querySelector(".akvariemand-slut-tekstboks");
const lukBtnAm = document.querySelector(".close-btn-am");

// Variabel til lyden der spiller når fiskene snakker
// Vi bruger let så vi kan ændre dens værdi senere
let fishSpeak = null;

// Henter lyden til akvariemanden
const akvarieMandenSound = new Audio();
akvarieMandenSound.src = "audio/akvariemand-introduktion-audio.mp3";

// Funktion til luk knappen ved akvariemandens tekstboks
if(lukBtnAm) {
  lukBtnAm.addEventListener("click", () => {
    // Hvis lyden spiller, stopper den lyden og nulstiller tidspunktet så det starter forfra.
    if (akvarieMandenSound) {
      akvarieMandenSound.pause();
      akvarieMandenSound.currentTime = 0;
    }
// Erstatter GIF'en med billedet af akvariemanden der ikke snakker
    akvarieMandenClosedImg.src = "img/akvariemanden-closed-mouth.png";
// Gør klik på mig knappen synlig igen
    klikMigBtn.classList.remove("is-not-visible");
// Gør taleboksen usynlig
    akvariemandTaleBoks.classList.remove("is-visible");
// Gør luk knappen usynlig
    lukBtnAm.classList.remove("visible");
  });
}



// Afspiller snakke animation og lyd til akvariemanden når man klikker på ham
if (akvarieMandenClosedImg) {
  akvarieMandenClosedImg.addEventListener("click", () => {
    akvarieMandenClosedImg.src = "video/akvariemand-talking.gif";
    akvarieMandenSound.play();

    // Gør "klik på mig" knappen usynlig mens han snakker
    klikMigBtn.classList.add("is-not-visible");

    // Gør akvariemandens taleboks synlig mens han snakker
    akvariemandTaleBoks.classList.add("is-visible");

       lukBtnAm.classList.add("visible");

    // Stopper snakke animationen efter 16 sekunder
    setTimeout(() => {
      akvarieMandenClosedImg.src = "img/akvariemanden-closed-mouth.png";
      // Gør "klik på mig" knappen synlig når han er færdig med at snakke
      klikMigBtn.classList.remove("is-not-visible");

      // Gør akvariemandens taleboks usynlig når han er færdig med at snakke
      akvariemandTaleBoks.classList.remove("is-visible");

         lukBtnAm.classList.remove("visible");

    }, 16000);
  });
}

// Samme funktioner som ovenstående bare tilføjet til "klik på mig" knappen så man kan
// klikke på den eller akvariemanden for at få ham til at snakke

if (klikMigBtn) {
  klikMigBtn.addEventListener("click", () => {
    akvarieMandenClosedImg.src = "video/akvariemand-talking.gif";
    akvarieMandenSound.play();

    // Gør "klik på mig" knappen usynlig mens han snakker
    klikMigBtn.classList.add("is-not-visible");

    // Gør akvariemandens taleboks synlig mens han snakker
    akvariemandTaleBoks.classList.add("is-visible");

      lukBtnAm.classList.add("visible");

    // Stopper snakke animationen efter 16 sekunder
    setTimeout(() => {
      akvarieMandenClosedImg.src = "img/akvariemanden-closed-mouth.png";
      // Gør "klik på mig" knappen synlig når han er færdig med at snakke
      klikMigBtn.classList.remove("is-not-visible");

      lukBtnAm.classList.remove("visible");

      // Gør akvariemandens taleboks usynlig når han er færdig med at snakke
      akvariemandTaleBoks.classList.remove("is-visible");
    }, 16000);
  });
}

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
  };


/* anne-sofie har lavet javascript til tooltip */

// HTML struktur for fiskenes talebobler
const fishInfo = [
  {
    className: "fish1",
    name: "Klovnfisk",
    imgId: "klovnfisk-info",
    gifSrc: "video/klovnfisk-talking.gif",
    imgStopSrc: "img/klovnfisk-closed-mouth.png",
    fishAudioSrc1: "audio/klovnfisk-speech-1.mp3",
    info1:
      "Hej! Jeg er en Klovnfisk <p>Jeg gemmer mig i søanemoner som beskytter mig med sine giftige arme - men den stikker ikke mig, for vi er bedste venner</p>",
    info2: "Jeg spiser små rejer, plankton og madrester, der flyder forbi mit hjem <p>Vi bliver alle sammen født som hanner! Hvis en hun dør, skifter hannen køn og bliver til en hun!</p>"
  },

  {
    className: "fish2",
    name: "Sandspiser-gobi",
    imgId: "sandspiser-info",
    gifSrc: "video/sandspiser-gobi-talking.gif",
    imgStopSrc: "img/sandspiser-gobi-closed-mouth.png",
    fishAudioSrc1: "audio/sandspiser-gobi-speech-1.mp3",
    info1:
      "Dav, jeg er en Sandspiser-gobi <p>Jeg elsker at suge sand ind, spise de små dyr der gemmer sig deri - og så spytter jeg det rene sand ud igen!</p>"
  },

  {
    className: "fish3",
    name: "Rævefjæs",
    imgId: "raevefisk-info",
    gifSrc: "video/raevefjaes-talking.gif",
    imgStopSrc: "img/raevefjaes-closed-mouth.png",
    fishAudioSrc1: "audio/raevefjaes-speech-1.mp3",
    info1:
      "Jeg er en Rævefjæse og ja, mit ansigt ligner en ræv! <p>Jeg har giftige pigge på mine finner, så ingen tør røre mig!</p>"
  },

  {
    className: "fish4",
    name: "Pindsvinefisk",
    imgId: "pindsvinefisk-info",
    gifSrc: "video/pindsvinefisk-talking.gif",
    imgStopSrc: "img/pindsvinefisk-closed-mouth.png",
    fishAudioSrc1: "audio/pindsvinefisk-speech-1.mp3",
    info1:
      "Hej du! Jeg er en Pindsvinefisk! <p>Hvis nogen prøver at fange mig, puster jeg mig op som en stor ballon med pigge</p>"
  },

  {
    className: "fish5",
    name: "Pudsefisk",
    imgId: "pudsefisk-info",
    gifSrc: "video/pudsefisk-talking.gif",
    imgStopSrc: "img/pudsefisk-closed-mouth.png",
    fishAudioSrc1: "audio/pudsefisk-speech-1.mp3",
    info1:
      "Hej, jeg er en Pudsefisk <p>Jeg er havets egen frisør og elsker at rense andre fisk!</p>"
  },
  
  {
    className: "fish6",
    name: "Kirurgfisk",
    imgId: "kirurgfisk-info",
    gifSrc: "video/kirurgfisk-talking.gif",
    imgStopSrc: "img/kirurgfisk-closed-mouth.png",
    fishAudioSrc1: "audio/kirurgfisk-speech-1.mp3",
    info1:
      "Hejsa! Jeg er en Kirurgfisk! <p>Vi er næsten 75 arter af min slags, der suser rundt og leger i koralrevene</p>"
  },

  {
    className: "fish7",
    name: "Blå Chromis",
    imgId: "blue-chromis-info",
    gifSrc: "video/blue-chromis-talking.gif",
    imgStopSrc: "img/blue-chromis-closed-mouth.png",
    fishAudioSrc1: "audio/blue-chromis-speech-1.mp3",
    info1:
      "Halløj! Jeg er en Blå Chromis <p>Jeg er lille, hurtig og skinner som et blåt lyn i vandet!</p>"
  },
];


  const tooltip = document.getElementById("tooltip");
  const tooltipContent = document.querySelector(".tooltip-content");
  const closeBtn = document.querySelector(".close-btn");

  
  function showTooltip(fishData) {
    if (tooltip && tooltipContent) {
      tooltipContent.innerHTML = `
      <div class= "font-finger-paint">
        <h3>${fishData.name}</h3>
        <p>${fishData.info1}</p>
        </div>
      `;
      tooltip.classList.add("is-visible");

      // Gør akvariemanden, fiskene og klik på mig knappen usynlig når man klikker på en fisk
      document.querySelector(".akvariemanden").classList.add("klik-fisk-skjul");
      document.querySelector(".akvariemand-start-tekstboks").classList.add("klik-fisk-skjul");
      document.querySelectorAll(".fisk-container img").forEach(img => {
        img.classList.add("klik-fisk-skjul");
      });

      // Henter fishImg fra array og viser kun det billede der tilhører den fisk der klikkes på
      const fishImg = document.getElementById(fishData.imgId);
      if (fishImg) {
        fishImg.style.opacity = 1;
        fishImg.src = fishData.gifSrc;

        // Erstatter gif'en med billedet af fisken så den stopper med at snakke
         setTimeout(() => {
          fishImg.src = fishData.imgStopSrc;
    }, 8500);

      }
      
        if(fishData.fishAudioSrc1) {

          if(fishSpeak) {
            // Pause gør at hvis man klikker på en anden fisk, før lyden er færdig med at spille,
            // pauser den den nuværende lyd og den nye afspilles.
            fishSpeak.pause();
            // CurrentTime sørger for at lydfilen starter fra begyndelsen.
            fishSpeak.currentTime = 0;
          }
          // Henter lydfilen defineret i array
          fishSpeak = new Audio(fishData.fishAudioSrc1);
          fishSpeak.play();
        }

        // Funktion til "lær mere" knappen
        const learnMoreBtn = document.querySelector(".learn-more-btn");

        if(learnMoreBtn) {
          learnMoreBtn.addEventListener("click", () => {
          // Finder info2 i arrayet og viser kun den ved klik på knappen
            tooltipContent.innerHTML = `
              <div class= "font-finger-paint">
                <p>${fishData.info2}</p>
              </div>`;

            
            
          });
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

  // Gør fiskene, akvariemanden og klik på mig knappen synlig når tooltip lukkes
    document.querySelector(".akvariemanden").classList.remove("klik-fisk-skjul");
    document.querySelector(".akvariemand-start-tekstboks").classList.remove("klik-fisk-skjul");
    document.querySelectorAll(".fisk-container img").forEach(img => {
        img.classList.remove("klik-fisk-skjul");
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
        showTooltip(fish);
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
});
