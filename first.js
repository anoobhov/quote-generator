const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
];
const colors = [
    "#FF5733", // Bright Orange
    "#33FF57", // Lime Green
    "#5733FF", // Purple
    "#F0FF33", // Bright Yellow
    "#33FFF0", // Cyan
    "#FF33A6", // Pink
    "#33A6FF", // Sky Blue
    "#A633FF", // Violet
    "#FF8C33", // Coral
    "#33FF8C", // Mint Green
    "#8C33FF", // Deep Purple
    "#FF3333", // Red
    "#33FF33", // Green
    "#3333FF", // Blue
    "#FFBD33", // Gold
    "#33FFBD", // Aqua
    "#BD33FF", // Magenta
    "#FF333A", // Crimson
    "#33AFFF", // Light Blue
    "#AFF033"  // Light Green
  ]
function generator(){
const element = document.getElementById("qwer");
let index = Math.floor(Math.random()*quotes.length)
element.textContent = quotes[index]

let colorIndex = Math.floor(Math.random() * colors.length);
document.body.style.backgroundColor = colors[colorIndex];
}
setInterval(generator,5000)