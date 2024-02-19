const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

// Motivational quotes array
const quotes = [
    "Every sunrise is an invitation to brighten someone's day.",
    "Life is a mosaic of experiences, each piece valuable, even the ones that hurt.",
    "You are the author of your own life story; make it a masterpiece.",
    "In the symphony of life, your melody is unique; let it play loudly.",
    "You're not a drop in the ocean but the entire ocean in a drop. Embrace your depth.",
    "Storms make trees take deeper roots. Stand strong, no matter the weather.",
    "Life's beauty is in its diversity. Celebrate your unique color in the tapestry of existence.",
    "Each day is a new canvas. Paint it with your brightest colors.",
    "Your life is your message to the world. Ensure it's inspiring.",
    "Life is not about waiting for the storm to pass but learning to dance in the rain.",
    "You are a lighthouse in someone's storm. Never underestimate your impact.",
    "Life is a garden. Sow kindness and compassion and watch them grow.",
    "You're a star in the constellation of the universe. Shine your light.",
    "Every breath is a second chance. Breathe deeply and embrace life.",
    "You're the artist of your life. Don't hand the paintbrush to anyone else.",
    "In the book of life, the answers aren't at the back. They're in the journey.",
    "Your footsteps are your legacy. Walk with purpose and love.",
    "Life's ripple effect means your actions matter. Make waves of positive change.",
    "You're a melody in the music of the universe. Sing your song.",
    "Every moment is a new beginning. Embrace the fresh starts.",
    "You are the captain of your soul, the master of your fate.",
    "Life is a tapestry of moments. Weave yours with joy and passion.",
    "Your life is a precious gift. Cherish it, celebrate it, and share its light.",
    "The world is a canvas to our imagination. Live life in bold colors.",
    "You have the power to turn challenges into opportunities. Seize them.",
    "Life is a journey with problems to solve, lessons to learn, but most of all, experiences to enjoy.",
    "Your life's significance is not in its duration, but in its donation.",
    "Be the light in the darkness, the hope in despair, and the love in indifference.",
    "Every heartbeat is an opportunity to love, live, and learn.",
    "Life is like a book. Don't skip to the end to see if it's worth it. Enjoy the story as it unfolds."
];

app.get('/', function (req, res) {
    console.log("something else");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});

app.get('/api/quotes', (req, res) => {
    console.log("being called?");
    const randomIndex = Math.floor(Math.random( ) * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});
