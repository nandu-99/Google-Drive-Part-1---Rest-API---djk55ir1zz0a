import express from 'express';
import  createAfile from './tools/createAfile.js';
import getAFile from './tools/getAFile.js';
import getAllFiles from './tools/getAllFilename.js';
import updateAfile from './tools/updateAfile.js';
import deleteAFile from './tools/deleteAFile.js';
const app = express();
const port = 8000;

app.use(express.json());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
