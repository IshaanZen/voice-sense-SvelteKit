const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();


// Configure multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define a route to handle the audio upload
app.post('/upload-audio', upload.single('audio'), (req, res) => {
  try {
    // Retrieve the uploaded audio file
    const audioFile = req.file;

    // If no file is uploaded or the uploaded file is not an audio file, return an error
    if (!audioFile || audioFile.mimetype.split('/')[0] !== 'audio') {
      return res.status(400).json({ error: 'Invalid audio file' });
    }

    // Save the audio file to disk (or process it as needed)
    fs.writeFileSync('uploaded_audio.wav', audioFile.buffer);

    // Respond with success message
    res.status(200).json({ message: 'Audio uploaded successfully' });
  } catch (error) {
    console.error('Error uploading audio:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
