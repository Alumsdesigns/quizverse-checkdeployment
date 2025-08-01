
const questions = [
  {
    question: "What is the longest-running TV soap opera in the UK?",
    choices: ["EastEnders", "Emmerdale", "Coronation Street", "Hollyoaks"],
    answer: "Coronation Street",
    correctQuote: "Coronation Street has been on air since 1960, making it the UK’s longest-running soap."
  },
  {
    question: "Who played Jack in Titanic?",
    choices: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Matt Damon"],
    answer: "Leonardo DiCaprio",
    correctQuote: "Leonardo DiCaprio stole hearts as Jack Dawson in the 1997 film Titanic."
  },
  {
    question: "What Netflix series features a character called Eleven?",
    choices: ["The Crown", "Black Mirror", "Stranger Things", "The Witcher"],
    answer: "Stranger Things",
    correctQuote: "Stranger Things features Eleven, a girl with telekinetic powers, played by Millie Bobby Brown."
  },
  {
    question: "Which actor played James Bond in Casino Royale?",
    choices: ["Pierce Brosnan", "Sean Connery", "Daniel Craig", "Roger Moore"],
    answer: "Daniel Craig",
    correctQuote: "Daniel Craig debuted as Bond in Casino Royale (2006), bringing grit to the iconic spy."
  },
  {
    question: "In which year was the first Star Wars film released?",
    choices: ["1975", "1977", "1980", "1983"],
    answer: "1977",
    correctQuote: "The galaxy far, far away began in 1977 with the release of Star Wars: A New Hope."
  },
  {
    question: "Which country has the most natural lakes?",
    choices: ["USA", "Canada", "Russia", "India"],
    answer: "Canada",
    correctQuote: "Canada has over 31,000 natural lakes – more than the rest of the world combined!"
  },
  {
    question: "What is the smallest country in the world by area?",
    choices: ["Monaco", "Nauru", "San Marino", "Vatican City"],
    answer: "Vatican City",
    correctQuote: "Vatican City is just 44 hectares – the world’s tiniest nation!"
  },
  {
    question: "What’s the capital of New Zealand?",
    choices: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    answer: "Wellington",
    correctQuote: "Wellington is the capital of New Zealand, known for its vibrant arts scene."
  },
  {
    question: "Mount Kilimanjaro is located in which country?",
    choices: ["Kenya", "Tanzania", "Uganda", "Ethiopia"],
    answer: "Tanzania",
    correctQuote: "Africa’s tallest peak, Mount Kilimanjaro, is located in Tanzania."
  },
  {
    question: "What river flows through Baghdad?",
    choices: ["Euphrates", "Jordan", "Tigris", "Nile"],
    answer: "Tigris",
    correctQuote: "The Tigris River runs through Baghdad, alongside the Euphrates in Mesopotamia."
  },
  {
    question: "Who wrote Pride and Prejudice?",
    choices: ["Charlotte Brontë", "Jane Austen", "Mary Shelley", "Emily Dickinson"],
    answer: "Jane Austen",
    correctQuote: "Jane Austen’s beloved novel Pride and Prejudice was first published in 1813."
  },
  {
    question: "What’s the longest word in the English dictionary that has no vowels (excluding 'y')?",
    choices: ["Rhythms", "Crypts", "Gypsy", "Lynx"],
    answer: "Rhythms",
    correctQuote: "'Rhythms' stands out for being long and vowel-free – at least when not counting 'y'."
  },
  {
    question: "What author created The Hunger Games trilogy?",
    choices: ["J.K. Rowling", "Suzanne Collins", "Veronica Roth", "Stephanie Meyer"],
    answer: "Suzanne Collins",
    correctQuote: "Suzanne Collins brought us Katniss Everdeen in the dystopian Hunger Games series."
  },
  {
    question: "What is the meaning of the word 'ephemeral'?",
    choices: ["Eternal", "Mysterious", "Short-lived", "Magical"],
    answer: "Short-lived",
    correctQuote: "Something ephemeral lasts only a short time – like a sunset or a shooting star."
  },
  {
    question: "Which Shakespeare play features the line 'To be or not to be'?",
    choices: ["Macbeth", "Romeo and Juliet", "Hamlet", "Othello"],
    answer: "Hamlet",
    correctQuote: "'To be or not to be' is the iconic soliloquy from Hamlet."
  },
  {
    question: "Who was known as the 'King of Pop'?",
    choices: ["Prince", "Michael Jackson", "Elvis Presley", "Stevie Wonder"],
    answer: "Michael Jackson",
    correctQuote: "Michael Jackson earned the title 'King of Pop' with hits like Thriller and Billie Jean."
  },
  {
    question: "What British band released the album A Night at the Opera?",
    choices: ["The Beatles", "Queen", "The Rolling Stones", "Pink Floyd"],
    answer: "Queen",
    correctQuote: "Queen’s 1975 album A Night at the Opera features the epic Bohemian Rhapsody."
  },
  {
    question: "Which artist sang Rolling in the Deep?",
    choices: ["Adele", "Beyoncé", "Amy Winehouse", "Taylor Swift"],
    answer: "Adele",
    correctQuote: "Rolling in the Deep was one of Adele’s biggest hits, from her album 21."
  },
  {
    question: "What instrument has 88 keys?",
    choices: ["Harp", "Organ", "Piano", "Synthesizer"],
    answer: "Piano",
    correctQuote: "A standard piano has 88 keys – 52 white and 36 black."
  },
  {
    question: "Who was the original lead singer of Queen?",
    choices: ["Roger Taylor", "Freddie Mercury", "Brian May", "John Deacon"],
    answer: "Freddie Mercury",
    correctQuote: "Freddie Mercury was Queen’s legendary frontman and vocal powerhouse."
  },
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
    correctQuote: "Paris, the City of Light, has been France's capital since 987 AD."
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    correctQuote: "Mars gets its red color from iron oxide (rust) on its surface."
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    choices: ["William Wordsworth", "William Shakespeare", "George Orwell", "Jane Austen"],
    answer: "William Shakespeare",
    correctQuote: "Shakespeare's Romeo and Juliet was written around 1595-1596."
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
    correctQuote: "Blue whales can grow up to 100 feet long and weigh 200 tons!"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Gold", "Silver", "Iron"],
    answer: "Oxygen",
    correctQuote: "Oxygen is essential for life and makes up about 21% of Earth's atmosphere."
  },
  {
    question: "How many continents are there on Earth?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
    correctQuote: "The seven continents are: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
  },
  {
    question: "What year did World War II end?",
    choices: ["1945", "1939", "1918", "1950"],
    answer: "1945",
    correctQuote: "World War II ended in 1945 with the surrender of Germany in May and Japan in September."
  },
  {
    question: "Which language is the most spoken worldwide?",
    choices: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    answer: "Mandarin Chinese",
    correctQuote: "Mandarin Chinese has over 1.1 billion native speakers worldwide."
  },
  {
    question: "What is the hardest natural substance on Earth?",
    choices: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: "Diamond",
    correctQuote: "Diamond ranks 10 on the Mohs scale of mineral hardness."
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci",
    correctQuote: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519."
  }
];

let currentQuestionIndex = 0; 
let score = 0;                
let username = '';  

const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');

const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');

startBtn.addEventListener('click', startQuiz);
if (welcomeForm) {
  welcomeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    startQuiz();
  });
}

const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('username-error');

if (usernameInput) {
  usernameInput.addEventListener('input', validateUsername);
  usernameInput.addEventListener('blur', validateUsername);
}

const VALIDATION_CONFIG = {
  MIN_LENGTH: 2,
  MAX_LENGTH: 50,
  PATTERNS: {
    VALID_NAME: /^[A-Za-zÀ-ÿ\s'-]+$/,
    SUSPICIOUS: [
      /script/i, /javascript/i, /on\w+\s*=/i, /<[^>]*>/i,
      /union/i, /select/i, /insert/i, /update/i, /delete/i, /drop/i,
      /exec/i, /eval/i, /alert/i, /confirm/i, /prompt/i,
      /document\./i, /window\./i, /location\./i, /history\./i
    ]
  },
  MESSAGES: {
    EMPTY: 'Please enter your name to continue.',
    TOO_SHORT: 'Name must be at least 2 characters long.',
    TOO_LONG: 'Name must be 50 characters or less.',
    INVALID_CHARS: 'Name can only contain letters, spaces, hyphens, and apostrophes.',
    INVALID_SPACES: 'Name cannot start or end with spaces, or have multiple consecutive spaces.',
    SUSPICIOUS: 'Please enter a valid name without special characters.',
    SUCCESS: 'Name looks good!'
  }
};