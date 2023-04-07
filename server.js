const express = require('express');
const path = require ('path');
const fs = require('fs');
const uuid = require('./public/helpers/uuid');
const notesDb = require('./db/db.json');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/assets/index.html'))
// );

// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
// );
// /* #region main - GET Request used to show details of previously created requests*/
// // GET request for reviews
// app.get('/api/notes', (req, res) => { 
 
//   res.json(notesDb); 
//   console.info(`${req.method} request received to get notes`);
//   console.log(notesDb);

// });

// // POST Request to add review
// app.post('/api/notes', (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to add a note`);

//   // Destructuring assignment for the items in req.body
//   const { title, text} = req.body;

//   // If all the required properties are present
//   if (title && text) {
//     // Variable for the object we will save
//     const newNote = {
//       id: uuid(),
//       title,
//       text,
//     };

// fs.readFile('./db/db.json', 'utf8', (err, data) => {
//   if (err){ 
//     console.log(err)
//   } else {

//     const parsedNotes = JSON.parse(data);

//     parsedNotes.push(newNote);
  

//   fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 4), (err) =>
//       err
//         ? console.error(err)
//         : console.log(
//             `Review for "${newNote.title}" has been added`)
//     );
//   }
// });
//     const Note = {
//       status: 'success',
//       body: newNote,
//     };

//     console.log(Note);
//     res.status(201).json(Note);
//   } else {
//     res.status(500).json('Error - note not posted, please try again or contact IT Help Desk for for additional support');
//   };
// });
 
// app.delete('/api/notes/:id', (req, res) => {
//   const noteId = req.params.id;

//   fs.readFile('./db/db.json', 'utf8', (err, data) => {
//   if (err) {
//     return res.status(500).json('Error deleting');
//   }
//   const parsedNotes = JSON.parse(data);
//   const noteIndex = parsedNotes.findIndex(note => note.id === noteId);

//   if (noteIndex === -1) {
//     return res.status(404).json('Note not found');
//   }
//   parsedNotes.splice(noteIndex, 1);

//     fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 4), (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json('Error deleting the note');
//     }
//       res.sendStatus(204);
//     });
//   });
// });

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


