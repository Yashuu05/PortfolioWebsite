const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
// (Ensure your index.html is inside a folder named 'public')
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Endpoint Example (Optional)
// If you want to fetch data from the backend instead of embedding it in JS
app.get('/api/portfolio-data', (req, res) => {
    // You could move the huge 'portfolioData' object from index.html to here
    res.json({
        message: "Data fetched from server",
        // ... put your JSON data here
    });
});

// Handle 404
app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});