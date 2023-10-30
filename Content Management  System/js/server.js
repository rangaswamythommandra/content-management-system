const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submissions
app.post('/submit', (req, res) => {
    // Your form submission logic here
    // Save the submitted blog data
    const blogData = req.body; // You can store this data in a database

    // In a real application, you would store the blog data and provide a unique ID
    // For simplicity, this example just returns the submitted data
    res.json(blogData);
});

// Serve the blog content (simulated data in this example)
app.get('/get-blog-content', (req, res) => {
    // Retrieve the previously submitted blog content (from a database or storage)
    const blogData = {
        title: 'Sample Blog Title',
        author: 'John Doe',
        publishDate: '2023-10-31',
        content: 'This is the content of the sample blog.',
        imageUrl: 'https://example.com/sample-image.jpg'
    };

    res.json(blogData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
