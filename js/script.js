"use strict";
document.addEventListener("DOMContentLoaded", () => {

// ---------
// Variabler
// ---------

const akvarieMandenClosedImg = document.getElementById("akvariemanden-closed-mouth");
const klikMigBtn = document.querySelector(".akvariemand-start-tekstboks");
const akvariemandTaleBoks = document.querySelector(".akvariemand-slut-tekstboks");
const lukBtnAm = document.querySelector(".close-btn-am");
const tooltip = document.getElementById("tooltip");
const tooltipContent = document.querySelector(".tooltip-content");
const closeBtn = document.querySelector(".close-btn");
const bubblesContainer = document.querySelector(".bubbles");
const backgroundAudio = document.getElementById("underwater-sound");

// Variabel til lyden der spiller når fiskene snakker
// Vi bruger let så vi kan ændre dens værdi senere
let fishSpeak = null;

// Variable til den aktive fisk.
// Vi bruger igen let så værdien kan ændres alt efter hvilken fisk der er tale om
// Denne værdi gør at vi kan resette fiskene hver gang vi klikker på en ny, så vi undgår overlap
let activeFish = null;

// Henter lyden til akvariemanden
const akvarieMandenSound = new Audio();
akvarieMandenSound.src = "audio/akvariemand-introduktion-audio.mp3";



// -----------------------
// Akvariemandens funktion
// -----------------------
// Funktion til luk knappen ved akvariemandens tekstboks

if(lukBtnAm) {
  lukBtnAm.addEventListener("click", () => {
    // Hvis lyden spiller, stopper den lyden og nulstiller tidspunktet så det starter forfra.
    if (akvarieMandenSound) {
      // Stopper lyden
      akvarieMandenSound.pause();
      // Resetter lydens tidlinje, så den starter forfra
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



// -----------------------------------
// Funktion til "Klik på mig!"-knappen
// -----------------------------------

// Samme funktioner som ovenstående bare tilføjet til "klik på mig" knappen så man kan
// klikke på den eller akvariemanden for at få ham til at snakke

if (klikMigBtn) {
  klikMigBtn.addEventListener("click", () => {
    akvarieMandenClosedImg.src = "video/akvariemand-talking.gif";
    akvarieMandenSound.play();

    klikMigBtn.classList.add("is-not-visible");

    akvariemandTaleBoks.classList.add("is-visible");

    lukBtnAm.classList.add("visible");


    setTimeout(() => {
      akvarieMandenClosedImg.src = "img/akvariemanden-closed-mouth.png";
 
      klikMigBtn.classList.remove("is-not-visible");

      lukBtnAm.classList.remove("visible");

      akvariemandTaleBoks.classList.remove("is-visible");
    }, 16000);
  });
}


// ---------
// Boblerne
// ---------
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


//------------------- 
// Array til fiskene
//-------------------

// HTML struktur for fiskenes talebobler
const fishInfo = [
  {
    className: "fish1",
    name: "Klovnfisk",
    imgId: "klovnfisk-info",
    realImgSrc: "img/billede-af-klovnfisk.png",
    gifSrc: "video/klovnfisk-talking.gif",
    imgStopSrc: "img/klovnfisk-closed-mouth.png",
    fishAudioSrc1: "audio/klovnfisk-speech-1.mp3",
    fishAudioSrc2: "audio/klovnfisk-speech-2.mp3",
    info1: "Hej! Jeg er en Klovnfisk <p>Jeg gemmer mig i søanemoner som beskytter mig med sine giftige arme - men den stikker ikke mig, for vi er bedste venner</p>",
    info2: "Jeg spiser små rejer, plankton og madrester, der flyder forbi mit hjem <p>Vi bliver alle sammen født som hanner! Hvis en hun dør, skifter hannen køn og bliver til en hun!</p>"
  },

  {
    className: "fish2",
    name: "Sandspiser-gobi",
    imgId: "sandspiser-info",
    realImgSrc: "img/billede-af-sandspiser-gobi.png",
    gifSrc: "video/sandspiser-gobi-talking.gif",
    imgStopSrc: "img/sandspiser-gobi-closed-mouth.png",
    fishAudioSrc1: "audio/sandspiser-gobi-speech-1.mp3",
    fishAudioSrc2: "audio/sandspiser-gobi-speech-2.mp3",
    info1: "Dav, jeg er en Sandspiser-gobi <p>Jeg elsker at suge sand ind, spise de små dyr der gemmer sig deri - og så spytter jeg det rene sand ud igen!</p>",
    info2: "Jeg bygger små huler i sandet, hvor jeg bor <p>Det hjælper små rejer mig med.<br> Rejerne graver mens jeg holder vagt</p>"
  },

  {
    className: "fish3",
    name: "Rævefjæs",
    imgId: "raevefisk-info",
    realImgSrc: "img/billede-af-raevefjaes.png",
    gifSrc: "video/raevefjaes-talking.gif",
    imgStopSrc: "img/raevefjaes-closed-mouth.png",
    fishAudioSrc1: "audio/raevefjaes-speech-1.mp3",
    fishAudioSrc2: "audio/raevefjaes-speech-2.mp3",
    info1: "Jeg er en Rævefjæse og ja, mit ansigt ligner en ræv! <p>Jeg har giftige pigge på mine finner, så ingen tør røre mig!</p>",
    info2: "Jeg spiser alger og havplanter, så jeg hjælper med at holde havet rent <p>Når jeg bliver forskrækket, skifter jeg farve og bliver helt mørk for at skjule mig!</p>"
  },

  {
    className: "fish4",
    name: "Pindsvinefisk",
    imgId: "pindsvinefisk-info",
    realImgSrc: "img/billede-af-pindsvinefisk.png",
    gifSrc: "video/pindsvinefisk-talking.gif",
    imgStopSrc: "img/pindsvinefisk-closed-mouth.png",
    fishAudioSrc1: "audio/pindsvinefisk-speech-1.mp3",
    fishAudioSrc2: "audio/pindsvinefisk-speech-2.mp3",
    info1: "Hej du! Jeg er en Pindsvinefisk! <p>Hvis nogen prøver at fange mig, puster jeg mig op som en stor ballon med pigge</p>",
    info2: "Jeg spiser snegle, små krabber og skaldyr. <br> Mine tænder er så stærke, at jeg kan knuse skaller <p>Når jeg puster mig op, kan jeg blive 3 gange større end normalt!</p>"
  },

  {
    className: "fish5",
    name: "Pudsefisk",
    imgId: "pudsefisk-info",
    realImgSrc: "img/billede-af-pudsefisk.png",
    gifSrc: "video/pudsefisk-talking.gif",
    imgStopSrc: "img/pudsefisk-closed-mouth.png",
    fishAudioSrc1: "audio/pudsefisk-speech-1.mp3",
    fishAudioSrc2: "audio/pudsefisk-speech-2.mp3",
    info1: "Hej, jeg er en Pudsefisk <p>Jeg er havets egen frisør og elsker at rense andre fisk!</p>",
    info2: "Selv store hajer og rokker elsker at blive renset af mig! <p>De kommer til min 'rengøringsstation', hvor jeg spiser snavs og små parasitter fra deres hud. <br> Jeg får mad og de bliver rene!</p>"
  },
  
  {
    className: "fish6",
    name: "Kirurgfisk",
    imgId: "kirurgfisk-info",
    realImgSrc: "img/billede-af-kirurgfisk.png",
    gifSrc: "video/kirurgfisk-talking.gif",
    imgStopSrc: "img/kirurgfisk-closed-mouth.png",
    fishAudioSrc1: "audio/kirurgfisk-speech-1.mp3",
    fishAudioSrc2: "audio/kirurgfisk-speech-2.mp3",
    info1: "Hejsa! Jeg er en Kirurgfisk! <p>Vi er næsten 75 arter af min slags, der suser rundt og leger i koralrevene</p>",
    info2: "Jeg har små skarpe 'knive' ved min hale - derfor kalder man mig kirurg! <p>Men bare rolig, jeg bruger dem kun, hvis jeg skal forsvare mig</p>"
  },

  {
    className: "fish7",
    name: "Blå Chromis",
    imgId: "blue-chromis-info",
    realImgSrc: "img/billede-af-blue-chromis.png",
    gifSrc: "video/blue-chromis-talking.gif",
    imgStopSrc: "img/blue-chromis-closed-mouth.png",
    fishAudioSrc1: "audio/blue-chromis-speech-1.mp3",
    fishAudioSrc2: "audio/blue-chromis-speech-2.mp3",
    info1: "Halløj! Jeg er en Blå Chromis <p>Jeg er lille, hurtig og skinner som et blåt lyn i vandet!</p>",
    info2: "Når solen går ned, bliver min blå farve mørkere, så jeg er sværere at se for rovfisk <p>Min livret? Plankton! De smager bedst når de danser i strømmen!</p>"
  },
];


// ----------------
// Tooltip funktion
// ----------------

  function showTooltip(fishData) {

    // Stopper akvariemandens lydfil, hvis den kører
    if (akvarieMandenSound) {
      akvarieMandenSound.pause();
      akvarieMandenSound.currentTime = 0;
      akvariemandTaleBoks.classList.remove("is-visible");
      lukBtnAm.classList.remove("visible");
    }


    if (tooltip && tooltipContent) {
      activeFish = fishData;
      tooltipContent.innerHTML = `
      <div class= "font-finger-paint">
        <h3>${activeFish.name}</h3>
        <p>${activeFish.info1}</p>
        </div>
      `;
      tooltip.classList.add("is-visible");

      // Sørger for at lær-mere-knappen er synlig hver gang man klikker på en ny fisk
      learnMoreBtn.style.display = "block";

      // Gør akvariemanden, fiskene og klik på mig knappen usynlig når man klikker på en fisk
      akvarieMandenClosedImg.classList.add("klik-fisk-skjul");
      akvariemandTaleBoks.classList.add("klik-fisk-skjul");
      klikMigBtn.classList.add("is-not-visible");
      // Laver et loop der finder alle fiskene i ".fisk-container" klassen og skjuler dem
      document.querySelectorAll(".fisk-container img").forEach(img => {
        img.classList.add("klik-fisk-skjul");
      });


      // Henter fishImg fra array og viser kun det billede der tilhører den fisk der klikkes på
      const fishImg = document.getElementById(activeFish.imgId);
      if (fishImg) {
        fishImg.style.opacity = 1;
        fishImg.src = activeFish.gifSrc;

        // Erstatter gif'en med billedet af fisken så den stopper med at snakke
        //  setTimeout(() => {
        //   fishImg.src = fishData.imgStopSrc;
        //    }, 8500);

      }
        if(activeFish.fishAudioSrc1) {
          if(fishSpeak) {
            // Pause gør at hvis man klikker på en anden fisk, før lyden er færdig med at spille,
            // pauser den den nuværende lyd og den nye afspilles.
            fishSpeak.pause();
            // CurrentTime sørger for at lydfilen starter fra begyndelsen.
            fishSpeak.currentTime = 0;
          }
          // Henter lydfilen defineret i array
          fishSpeak = new Audio(activeFish.fishAudioSrc1);
          fishSpeak.play();
        }
    }
  }



// -------------
// Lær mere knap
// -------------

   // Funktion til "lær mere" knappen
        const learnMoreBtn = document.querySelector(".learn-more-btn");

        if(learnMoreBtn) {
          learnMoreBtn.addEventListener("click", () => {
          // Finder info2 i arrayet og viser kun den ved klik på knappen
            tooltipContent.innerHTML = `
              <div class= "font-finger-paint">
                <p>${activeFish.info2}</p>
                <img src="${activeFish.realImgSrc}" class = "real-fish-img">
              </div>`;

          //Fjerner "lær mere"-knappen nå man har klikket på den
            learnMoreBtn.style.display = "none"; 

          //Afspiller den næste lydfil til fisken 
          if(activeFish.fishAudioSrc2) {
            fishSpeak.pause();
            fishSpeak.currentTime = 0;
            fishSpeak = new Audio (activeFish.fishAudioSrc2);
            fishSpeak.play();
          }

          // Sikrer at det kun er billedet tilhørende den fisk der er klikket på der vises
          const fishImg = document.getElementById(activeFish.imgId);
             if (fishImg) {
              fishImg.style.opacity = 1;
              fishImg.src = activeFish.gifSrc;

              // Erstatter gif'en med billedet af fisken så den stopper med at snakke
                // setTimeout(() => {
                //  fishImg.src = activeFish.imgStopSrc;
                // }, 11000);
                fishSpeak.onended = () => {
          fishImg.src = activeFish.imgStopSrc;
          };
              }
          });
        }


// ---------------------
// Hide Tooltip funktion
// ---------------------

  function hideTooltip() {
    if (tooltip) {
      tooltip.classList.remove("is-visible");
    }

    // Gør billedet af fisken usynlig igen når taleboblen lukkes
      document.querySelectorAll(".info-fish img").forEach(img => {
    img.style.opacity = 0;
  });

  // Gør fiskene, akvariemanden og klik på mig knappen synlig når tooltip lukkes
    akvarieMandenClosedImg.classList.remove("klik-fisk-skjul");
    akvariemandTaleBoks.classList.remove("klik-fisk-skjul");
    klikMigBtn.classList.remove("is-not-visible");
    // Sikrer at hvis man har afbrudt ham mens han snakker og lukker tooltip før han er færdig,
    // vil hans snakke animation ikke være den der spiller
    akvarieMandenClosedImg.src = "img/akvariemanden-closed-mouth.png";
    document.querySelectorAll(".fisk-container img").forEach(img => {
        img.classList.remove("klik-fisk-skjul");
      });

  if(fishSpeak) {
    fishSpeak.pause();
    // Rydder variablen fishSpeak, det signalerer at der ikke længere spilles en lyd
    // Det sørger for at vi kan bruge samme variabel til forskellige audio-filer
    fishSpeak = null;
    }
  }

  // Funktion til "Luk"-knappen i tooltip
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


// ------------
// Baggrundslyd
// ------------

// Skrue ned for baggrundslyden
backgroundAudio.volume = 0.7;

// Laver en variable til at starte baggrundslyden , da man ikke må bruge autoplay
const startBgAudio = () => {
  backgroundAudio.play();
};

// Starter baggrundslyden når man klikker et vilkårligt sted på skærmen
document.addEventListener("click", startBgAudio);
});
