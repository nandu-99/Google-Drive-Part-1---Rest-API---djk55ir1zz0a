import express from 'express';
import fs from 'fs';
import path from 'path';
import createAfile from './tools/createAfile.js';
import deleteAFile from './tools/deleteAFile.js';
import getAFile from './tools/getAFile.js';
import getAllFiles from './tools/getAllFilename.js';
import updateAfile from './tools/updateAfile.js';
const app = express();
const port = 8000;
app.use(express.json());
const __dirname = path.resolve();

app.get("/file", (req, res) => {
  try{
    const files = getAllFiles();
    res.status(200).send({"files":files})
  }catch(err){
    res.status(500).send({"error":'Internal Server Error'})
  }
});

app.get('/file/:fileName', (req, res)=>{
  try{
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, "root" , `${fileName}`);
    if(fs.existsSync(filePath)){
      const fileContent = getAFile(filePath);
      res.status(200).send({"fileContent": fileContent})
    }else{
      res.status(400).send({"message": "File does not exist"})
    }
  }catch(err){
    res.status(500).send({"error":'Internal Server Error'})
  }
})

app.post('/file/create', (req, res)=>{
  try{
    const {fileName, fileData} = req.body;
    const filePath = path.join(__dirname, "root" , `${fileName}`);
    createAfile(filePath, fileData)
    res.status(200).send({"message": "File created successfully"})
  }catch(err){
    res.status(500).send({"error":'Internal Server Error'})
  }
})

app.put('/file/:fileName', (req, res)=>{
  try{
    const fileName = req.params.fileName;
    const {updatedFileName, newFileData} = req.body;
    const filePath = path.join(__dirname, "root" , `${fileName}`);
    const newFilepath = path.join(__dirname, "root", `${updatedFileName}`)
    if(fs.existsSync(filePath)){
      const fileContent = updateAfile(filePath, newFilepath, newFileData);
      res.status(200).send({ "message": "File updated successfully"})
    }else{
      res.status(400).send({"message": "File does not exist"})
    }
  }catch(err){
    res.status(500).send({"error":'Internal Server Error'})
  }
})

app.delete('/file/:fileName', (req, res)=>{
  try{
    const fileName = req.params.fileName;
    const filePath = path.join(__dirname, "root" , `${fileName}`);
    const deleted = deleteAFile(filePath);
    res.status(200).send({"message": "File Deleted Successfully"})
  }catch(err){
    res.status(500).send({"error":'Internal Server Error'})
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
