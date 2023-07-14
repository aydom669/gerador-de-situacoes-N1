var words = [
  "Cliente Reclama que o seu chip não esta funcionando",
  "Cliente Reclama que o seu plamo de internet esta com muita queda e instabilidade",
  "Cliente Reclama que a fatura veio com um almento de 10 reais",
  "abacaxi",
  "morango",
  "uva",
  "pera",
  "manga",
  "melancia",
  "kiwi",
];
var wordContainer = document.getElementById("text");

function generateRandomWord() {
  var randomIndex = Math.floor(Math.random() * words.length);
  var randomWord = words[randomIndex];
  wordContainer.textContent = randomWord;
}
