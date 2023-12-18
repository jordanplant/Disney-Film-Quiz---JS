import translationLibrary from "./translationsLibrary.js";

// Define an array of language codes to loop through
const languageCodes = [
  "es",
  "fr",
  "de",
  "it",
  "pt",
  "ja",
  "ko",
  "zh",
  "ru",
  "ar",
  "hi",
  "nl",
  "sv",
  "en",
];
let currentLanguageIndex = 0;
document.querySelector(".random").addEventListener("click", function () {
  // Get the translation for the current language index
  const languageCode = languageCodes[currentLanguageIndex];
  let translation;

  // Determine which movie's translation to retrieve based on the h1 element's class
  const h1ElementTLK = document.querySelector(".TLK");
  const h1ElementTLM = document.querySelector(".TLM");
  const h1ElementBATB = document.querySelector(".BATB");

  if (h1ElementTLK && h1ElementTLM && h1ElementBATB) {
    // Both elements with class .TLK and .TLM exist
    translation = translationLibrary.getCommonTranslation(languageCode);
    h1ElementTLK.textContent = translation;
    h1ElementTLM.textContent = translation;
    h1ElementBATB.textContent = translation;
  } else if (h1ElementTLK) {
    translation = translationLibrary.getLionKingTranslation(languageCode);
    h1ElementTLK.textContent = translation;
  } else if (h1ElementTLM) {
    translation = translationLibrary.getLittleMermaidTranslation(languageCode);
    h1ElementTLM.textContent = translation;
  } else if (h1ElementBATB) {
    translation =
      translationLibrary.getBeautyAndTheBeastTranslation(languageCode);
    h1ElementBATB.textContent = translation;
  }

  // Increment the language index or reset it to 0 if it reaches the end of the array
  currentLanguageIndex = (currentLanguageIndex + 1) % languageCodes.length;
});
