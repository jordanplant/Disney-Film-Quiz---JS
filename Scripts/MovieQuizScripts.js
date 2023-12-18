const movieList = [
  {
    foreignTitle: {
      es: "El Rey León",
      fr: "Le Roi Lion",
      de: "Der König der Löwen",
      it: "Il Re Leone",
      pt: "O Rei Leão",
      nl: "De Leeuwenkoning",
      sv: "Lejonkungen",
    },
    englishTitle: "The Lion King",
  },
  {
    foreignTitle: {
      es: "La Sirenita",
      fr: "La Petite Sirène",
      de: "Die kleine Meerjungfrau",
      it: "La Sirenetta",
      pt: "A Pequena Sereia",
      nl: "De Kleine Zeemeermin",
      sv: "Den lilla sjöjungfrun",
    },
    englishTitle: "The Little Mermaid",
  },
  {
    foreignTitle: {
      fr: "La Belle et la Bête",
      de: "Die Schöne und das Biest",
      it: "La Bella e la Bestia",
      pt: "A Bela e a Fera",
      nl: "Belle en het Beest",
      sv: "Skönheten och odjuret",
    },
    englishTitle: "Beauty and the Beast",
  },
  {
    foreignTitle: {
      es: "Buscando a Nemo",
      fr: "Le Monde de Nemo",
      de: "Findet Nemo",
      it: "Alla Ricerca di Nemo",
      pt: "À Procura de Nemo",
      nl: "Op Zoek naar Nemo",
      sv: "Hitta Nemo",
    },
    englishTitle: "Finding Nemo",
  },
  {
    foreignTitle: {
      es: "El Libro de la Selva",
      fr: "Le Livre de la Jungle",
      de: "Das Dschungelbuch",
      it: "Il Libro della Giungla",
      pt: "O Livro da Selva",
      nl: "Het Jungle Boek",
      sv: "Djungelboken",
    },
    englishTitle: "The Jungle Book",
  },
  {
    foreignTitle: {
      es: "La Princesa y el Sapo",
      fr: "La Princesse et la Grenouille",
      de: "Küss den Frosch: Die Tiana Story",
      it: "La Principessa e il Ranocchio",
      pt: "A Princesa e o Sapo",
      nl: "De Prinses en de Kikker",
      sv: "Prinsessan och grodan",
    },
    englishTitle: "The Princess and the Frog",
  },
  {
    foreignTitle: {
      es: "La Dama y el Vagabundo",
      fr: "La Belle et le Clochard",
      de: "Susi und Strolch",
      it: "Lilli e il Vagabondo",
      pt: "A Dama e o Vagabundo",
      nl: "Lady en de Vagebond",
      sv: "Lady och Lufsen",
    },
    englishTitle: "Lady and the Tramp",
  },
  {
    foreignTitle: {
      es: "Vaiana",
      fr: "Vaiana, la légende du bout du monde",
      de: "Vaiana - Das Paradies hat einen Haken",
      it: "Oceania",
      pt: "Moana: Um Mar de Aventuras",
      nl: "Vaiana",
      sv: "Moana - En havsprinsessas äventyr",
    },
    englishTitle: "Moana",
  },
  {
    foreignTitle: {
      es: "Goofy e Hijo",
      fr: "Dingo et Max",
      de: "Goofy – Der Film",
      it: "Sottozero",
      pt: "Pateta: O Filme",
      nl: "Een Goofy film",
      sv: "En Goofy-film",
    },
    englishTitle: "A Goofy Movie",
  },
  {
    foreignTitle: {
      es: "El Emperador y sus Locuras",
      fr: "Kuzco, l'Empereur Mégalo",
      de: "Ein Königreich für ein Lama",
      it: "Le follie dell'Imperatore",
      pt: "A Nova Onda do Imperador",
      nl: "De Nieuwe Keizer",
      sv: "Kejsarens nya stil",
    },
    englishTitle: "The Emperor's New Groove",
  },
  {
    foreignTitle: {
      es: "Enredados",
      fr: "Raiponce",
      de: "Rapunzel - Neu verföhnt",
      it: "Rapunzel - L'intreccio della torre",
      pt: "Entrelaçados",
      nl: "Rapunzel",
      sv: "Trassel",
    },
    englishTitle: "Tangled",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let currentEnglishTitle = "";
let displayedMovies = [];

const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const questionElement = document.getElementById("question");
const resultElement = document.getElementById("result");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");
const container = document.querySelector(".container");

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
submitButton.addEventListener("click", checkAnswer);

function startGame() {
  startButton.style.display = "none";
  resetButton.style.display = "none";
  container.style.display = "block"; // Show the container
  questionElement.style.display = "block";
  answerInput.style.display = "block";
  submitButton.style.display = "block";
  resultElement.style.display = "block";
  scoreElement.style.display = "block";

  displayQuestion();
}

function getRandomQuestion() {
  if (displayedMovies.length === movieList.length) {
    displayedMovies = [];
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * movieList.length);
  } while (displayedMovies.includes(randomIndex));

  displayedMovies.push(randomIndex);
  currentEnglishTitle = movieList[randomIndex].englishTitle;
  return movieList[randomIndex];
}

function getRandomTranslation(foreignTitle) {
  const languages = Object.keys(foreignTitle);
  const randomLanguage =
    languages[Math.floor(Math.random() * languages.length)];
  return foreignTitle[randomLanguage];
}

function displayQuestion() {
  const { foreignTitle } = getRandomQuestion();
  const randomTranslation = getRandomTranslation(foreignTitle);

  document.getElementById("question").textContent = `${randomTranslation}`;
}

function checkAnswer() {
  const inputField = document.getElementById("answer");
  const answer = inputField.value.trim().toLowerCase();

  if (answer === currentEnglishTitle.toLowerCase()) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
    displayResult("Correct!");
  } else {
    displayResult("Incorrect. The correct answer was: " + currentEnglishTitle);
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < movieList.length) {
    displayQuestion();
    inputField.value = "";
  } else {
    endGame();
  }
}

function displayResult(result) {
  document.getElementById("result").textContent = result;
}

function endGame() {
  document.getElementById(
    "question"
  ).textContent = `Game Over! Your score was: ${score}`;
  document.getElementById("score").textContent = " ";
  document.getElementById("result").textContent = " ";
  scoreElement.style.textContent = " ";
  answerInput.style.display = "none";
  resetButton.style.display = "block";
  submitButton.style.display = "none";
}

function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  displayedMovies = [];
  scoreElement.textContent = "Score: 0";
  startButton.style.display = "block"; // Show the "Start Game" button
  container.style.display = "none"; // Hide the container
  resultElement.textContent = ""; // Clear the result
}
