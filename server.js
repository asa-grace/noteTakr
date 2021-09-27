const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// return notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


// return index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// return home index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// create new note
// app.post('/api/notes', (req, res) => {
    
// });

app.listen(PORT, () => {
    console.log(`API server running on ${PORT}`);
});
