const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const {log} = console;


log("PID: ", process.pid);
// RSC
const notes = require('../server/sampleData')
// ..

const app = express(); 

// based on roadside coder
app.get('/', (req,res) => {
    res.send("API is running..");
});

app.get('/api/notes', (req,res) => (
    res.json(notes)
))

app.get('/api/notes/:id/:id2', (req,res) => {
    const note = notes.find((n) => n.id === req.params.id);
   
    res.send(note);
})
// ..

connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port,console.log(`Server running on port ${port}`));