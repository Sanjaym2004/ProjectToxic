const toxicQuotes = [
   "You are the exact definition of wasted potential—a walking disappointment to everyone who ever expected better from you.",
   "Every single day you prove that people were right to lower their expectations of you.",
   "You are your own worst enemy, mostly because you're too weak to actually put up a fight against yourself.",
   "This is exacty why she left you—you couldn't even commit to your own goals, let alone a life with someone else.",
   "If you put half as much effort into your life as you do into making excuses, maybe people would stick around.",
   "You wonder why you keep getting passed over, but look at you. Why would anyone choose you when you wouldn't even choose yourself?",
   "You want the life of a winner with the work ethic of a loser, and that is why you will always be second best.",
   "No one is ever going to fight for you because you have made it painfully easy for them to walk away.",
   "You aren't hard to love, but you are exhausting to stay with. There's a massive difference, and that's why you're alone.",
   "Nobody looks back at a burning bridge and wishes they were still standing on it. That’s how people feel about you—you were the fire they had to flee.",
];
let favQuotes = [];
let savedItems = localStorage.getItem("toxicFavorites");

if (savedItems === null) {
   favQuotes = [];
} else {
   favQuotes = JSON.parse(savedItems);
}

let randomNumIndex = Math.floor(Math.random() * toxicQuotes.length);
let randomQuote = toxicQuotes[randomNumIndex];

let toxicPara = document.getElementById("t-quote");
toxicPara.textContent = randomQuote;

let nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", () => {
   randomNumIndex = Math.floor(Math.random() * toxicQuotes.length);
   randomQuote = toxicQuotes[randomNumIndex];
   toxicPara.textContent = randomQuote;
   favQuoteIndex = favQuotes.indexOf(randomQuote);

   if (favQuoteIndex !== -1) {
      isFavourite = true;
      favImg.src = "assets/filled.png";
   } else {
      isFavourite = false;
      favImg.src = "assets/fav.png";
   }
});

let isFavourite = false;
let favBtn = document.getElementById("fav-btn");
let favImg = document.getElementById("favImg");

favBtn.addEventListener("click", () => {
   isFavourite = !isFavourite;
   if (isFavourite === true) {
      favImg.src = "assets/filled.png";
      favQuotes.push(randomQuote);
   } else {
      favImg.src = "assets/fav.png";
      let favQuoteIndex = favQuotes.indexOf(randomQuote);
      if (favQuoteIndex >= 0) {
         favQuotes.splice(favQuoteIndex, 1);
      }
   }

   localStorage.setItem("toxicFavorites", JSON.stringify(favQuotes));
});
