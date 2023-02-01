const express = require('express');
const path = require ('path');
const fs = require('fs');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/notes.html'))
);
/* #region main - GET Request used to show details of previously created requests*/
// GET request for reviews
// app.get('/api/notes', (req, res) => {
//   // Send a message to the client
//   res.json(`${req.method} request received to get reviews`);

//   // Log our request to the terminal
//   console.info(`${req.method} request received to get reviews`);
// });
/* #endregion */ 

// POST Request to add review
app.post('/api/notes', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);

  // Destructuring assignment for the items in req.body
  const {title, text} = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
    };

    // Convert the data to a string so we can save it
    const reviewNote = JSON.stringify(newNote);


  /* #region Main - this is to write to a file, REMOVE BEFORE FINAL */  
    // Write the string to a file
    fs.writeFile(`./db/${newNote.title}.json`, reviewNote, (err) =>
      err
        ? console.error(err)
        : console.log(
            `Review for "${newNote.title}" has been written to JSON file`
          )
    );
  /* #endregion */

  fs.writeFile(`./db/${newNote.title}.json`, reviewNote, (err) =>
      err
        ? console.error(err)
        : console.log(
            `Review for "${newNote.title}" has been written to JSON file`
          )
    );




    const Note = {
      status: 'success',
      body: newNote,
    };

    console.log(Note);
    res.status(201).json(Note);
  } else {
    res.status(500).json('Error - note not posted, please try again or contact IT Help Desk for for additional support');
  }
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


