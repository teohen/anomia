function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function getCards() {
  const cards =  [
    {
        "id": 0,
        "symbol": "x",
        "text": "ator ",
        "color": "#E26310"
    },
    {
        "id": 1,
        "symbol": "+",
        "text": "adjetivo",
        "color": "#218838"
    },
    {
        "id": 2,
        "symbol": "o",
        "text": "marca de carro",
        "color": "#804000"
    },
    {
        "id": 3,
        "symbol": "=",
        "text": "animal",
        "color": "#0069D9"
    },
    {
        "id": 4,
        "symbol": "#",
        "text": "som de animal",
        "color": "#FF69B4"
    },
    {
        "id": 5,
        "symbol": "@",
        "text": "autor",
        "color": "#9551A6"
    },
    {
        "id": 6,
        "symbol": "&",
        "text": "livro",
        "color": "#C82333"
    },
    {
        "id": 7,
        "symbol": "*",
        "text": "café da manhã",
        "color": "#fbff3a"
    },
    {
        "id": 8,
        "symbol": "x",
        "text": "doce",
        "color": "#E26310"
    },
    {
        "id": 9,
        "symbol": "+",
        "text": "pedra preciosa",
        "color": "#218838"
    },
    {
        "id": 10,
        "symbol": "o",
        "text": "personagem de desenho",
        "color": "#804000"
    },
    {
        "id": 11,
        "symbol": "=",
        "text": "unidade de tempo",
        "color": "#0069D9"
    },
    {
        "id": 12,
        "symbol": "#",
        "text": "loja de roupas",
        "color": "#FF69B4"
    },
    {
        "id": 13,
        "symbol": "@",
        "text": "cor",
        "color": "#9551A6"
    },
    {
        "id": 14,
        "symbol": "&",
        "text": "moeda",
        "color": "#C82333"
    },
    {
        "id": 15,
        "symbol": "*",
        "text": "derivado de leite",
        "color": "#fbff3a"
    },
    {
        "id": 16,
        "symbol": "x",
        "text": "item de padaria",
        "color": "#E26310"
    },
    {
        "id": 17,
        "symbol": "+",
        "text": "raça de cachorro",
        "color": "#218838"
    },
    {
        "id": 18,
        "symbol": "o",
        "text": "sabor de pizza",
        "color": "#804000"
    },
    {
        "id": 19,
        "symbol": "=",
        "text": "país da europa",
        "color": "#0069D9"
    },
    {
        "id": 20,
        "symbol": "#",
        "text": "operação matemática",
        "color": "#FF69B4"
    },
    {
        "id": 21,
        "symbol": "@",
        "text": "animal de fazenda",
        "color": "#9551A6"
    },
    {
        "id": 22,
        "symbol": "&",
        "text": "rede de fast food",
        "color": "#C82333"
    },
    {
        "id": 23,
        "symbol": "*",
        "text": "raça de gato",
        "color": "#fbff3a"
    },
    {
        "id": 24,
        "symbol": "x",
        "text": "frios",
        "color": "#E26310"
    },
    {
        "id": 25,
        "symbol": "+",
        "text": "programa de TV",
        "color": "#218838"
    },
    {
        "id": 26,
        "symbol": "o",
        "text": "feriado",
        "color": "#804000"
    },
    {
        "id": 27,
        "symbol": "=",
        "text": "bebida quente",
        "color": "#0069D9"
    },
    {
        "id": 28,
        "symbol": "#",
        "text": "sabor de sorvete",
        "color": "#FF69B4"
    },
    {
        "id": 29,
        "symbol": "@",
        "text": "ilha",
        "color": "#9551A6"
    },
    {
        "id": 30,
        "symbol": "&",
        "text": "osso humano",
        "color": "#C82333"
    },
    {
        "id": 31,
        "symbol": "*",
        "text": "rio",
        "color": "#fbff3a"
    },
    {
        "id": 32,
        "symbol": "x",
        "text": "lingua",
        "color": "#E26310"
    },
    {
        "id": 33,
        "symbol": "+",
        "text": "material de escritório",
        "color": "#218838"
    },
    {
        "id": 34,
        "symbol": "o",
        "text": "arte marcial",
        "color": "#804000"
    },
    {
        "id": 35,
        "symbol": "=",
        "text": "filme cult",
        "color": "#0069D9"
    },
    {
        "id": 36,
        "symbol": "#",
        "text": "filme",
        "color": "#FF69B4"
    },
    {
        "id": 37,
        "symbol": "@",
        "text": "instrumento musical",
        "color": "#9551A6"
    },
    {
        "id": 38,
        "symbol": "&",
        "text": "músico",
        "color": "#C82333"
    },
    {
        "id": 39,
        "symbol": "*",
        "text": "criatura mitologica",
        "color": "#fbff3a"
    },
    {
        "id": 40,
        "symbol": "x",
        "text": "fenômeno natural",
        "color": "#E26310"
    },
    {
        "id": 41,
        "symbol": "+",
        "text": "oceano",
        "color": "#218838"
    },
    {
        "id": 42,
        "symbol": "o",
        "text": "instrumento de corda",
        "color": "#804000"
    },
    {
        "id": 43,
        "symbol": "=",
        "text": "animal doméstico",
        "color": "#0069D9"
    },
    {
        "id": 44,
        "symbol": "#",
        "text": "cantora famosa",
        "color": "#FF69B4"
    },
    {
        "id": 45,
        "symbol": "@",
        "text": "time de futebol",
        "color": "#9551A6"
    },
    {
        "id": 46,
        "symbol": "&",
        "text": "planeta",
        "color": "#C82333"
    },
    {
        "id": 47,
        "symbol": "*",
        "text": "planta",
        "color": "#fbff3a"
    },
    {
        "id": 48,
        "symbol": "x",
        "text": "música pop",
        "color": "#E26310"
    },
    {
        "id": 49,
        "symbol": "+",
        "text": "sinal de pontuação",
        "color": "#218838"
    },
    {
        "id": 50,
        "symbol": "o",
        "text": "canal de tv",
        "color": "#804000"
    },
    {
        "id": 51,
        "symbol": "=",
        "text": "roedor",
        "color": "#0069D9"
    },
    {
        "id": 52,
        "symbol": "#",
        "text": "jogador de futebol",
        "color": "#FF69B4"
    },
    {
        "id": 53,
        "symbol": "@",
        "text": "super heroi",
        "color": "#9551A6"
    },
    {
        "id": 54,
        "symbol": "&",
        "text": "rockstar",
        "color": "#C82333"
    },
    {
        "id": 55,
        "symbol": "*",
        "text": "esporte com bola",
        "color": "#fbff3a"
    },
    {
        "id": 56,
        "symbol": "x",
        "text": "espécie de pássaro",
        "color": "#E26310"
    },
    {
        "id": 57,
        "symbol": "+",
        "text": "tipo de barco",
        "color": "#218838"
    },
    {
        "id": 58,
        "symbol": "o",
        "text": "tipo de queijo",
        "color": "#804000"
    },
    {
        "id": 59,
        "symbol": "=",
        "text": "espécie de peixe",
        "color": "#0069D9"
    },
    {
        "id": 60,
        "symbol": "#",
        "text": "fruta",
        "color": "#FF69B4"
    },
    {
        "id": 61,
        "symbol": "@",
        "text": "cidade do brasil",
        "color": "#9551A6"
    },
    {
        "id": 62,
        "symbol": "&",
        "text": "tipo de inseto",
        "color": "#C82333"
    },
    {
        "id": 63,
        "symbol": "*",
        "text": "estilo de musica",
        "color": "#fbff3a"
    },
    {
        "id": 64,
        "symbol": "x",
        "text": "personagem de star wars",
        "color": "#E26310"
    },
    {
        "id": 65,
        "symbol": "+",
        "text": "meio de transporte",
        "color": "#218838"
    },
    {
        "id": 66,
        "symbol": "o",
        "text": "vencedor do oscar",
        "color": "#804000"
    },
    {
        "id": 67,
        "symbol": "=",
        "text": "verbo ",
        "color": "#0069D9"
    },
    {
        "id": 68,
        "symbol": "#",
        "text": "jogo de videogame",
        "color": "#FF69B4"
    },
    {
        "id": 69,
        "symbol": "@",
        "text": "website",
        "color": "#9551A6"
    },
    {
        "id": 70,
        "symbol": "&",
        "text": "produtor de luz",
        "color": "#C82333"
    },
    {
        "id": 71,
        "symbol": "*",
        "text": "novela ",
        "color": "#fbff3a"
    },
    {
        "id": 72,
        "symbol": "x",
        "text": "estado do brasil ",
        "color": "#E26310"
    },
  {
        "id": 73,
        "symbol": "+",
        "text": "estrela",
        "color": "#218838"
    },
{
        "id": 74,
        "symbol": "o",
        "text": "felino",
        "color": "#804000"
    },
 {
        "id": 75,
        "symbol": "=",
        "text": "deus grego",
        "color": "#0069D9"
    },
{
        "id": 76,
        "symbol": "#",
        "text": "parte do corpo humano",
        "color": "#FF69B4"
    },
   {
        "id": 77,
        "symbol": "@",
        "text": "apelido",
        "color": "#9551A6"
    },
    {
        "id": 78,
        "symbol": "&",
        "text": "esporte radical",
        "color": "#C82333"
    },
    {
        "id": 79,
        "symbol": "*",
        "text": "serie ",
        "color": "#fbff3a"
    },
]

  const shuffledCards = cards 
  return shuffledCards
}

function getWildcards(ids) {
  const wildcards =[
    {
      "id": ids[0],
      "symbol1": "5",
      "symbol2": "6",
      "color1": "#FF69B4",
      "color2": "#9551A6",
      "text": "coringa",
      "color": "white"
    },
    {
      "id": ids[1],
      "symbol1": "7",
      "symbol2": "4",
      "color1": "#C82333",
      "color2": "#0069D9",
      "text": "coringa",
      "color": "white"
    },
    {
      "id": ids[2],
      "symbol1": "3",
      "symbol2": "4",
      "color1": "#804000",
      "color2": "#0069D9",
      "text": "coringa",
      "color": "white"
    },
    {
      "id": ids[3],
      "symbol1": "7",
      "symbol2": "1",
      "color1": "#C82333",
      "color2": "#E26310",
      "text": "coringa",
      "color": "white"
    },
    {
      "id": ids[4],
      "symbol1": "5",
      "symbol2": "8",
      "color1": "#FF69B4",
      "color2": "#fbff3a",
      "text": "coringa",
      "color": "white"
    },
    {
      "id": ids[5],
      "symbol1": "2",
      "symbol2": "1",
      "color1": "#218838",
      "color2": "#E26310",
      "text": "coringa",
      "color": "white"
    },
    {
      "id": ids[6],
      "symbol1": "2",
      "symbol2": "8",
      "color1": "#218838",
      "color2": "#fbff3a",
      "text": "coringa",
      "color": "white"
    },
    {
      "id": ids[7],
      "symbol1": "3",
      "symbol2": "6",
      "text": "coringa",
      "color1": "#804000",
      "color2": "#9551A6",
      "color": "white"
     }
  ]

  return wildcards
}
export default {
  getCards,
  shuffle,
  getWildcards
}
