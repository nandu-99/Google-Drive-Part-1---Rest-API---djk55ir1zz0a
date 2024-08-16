import fs from 'fs';
const createAfile = (filePath, fileData) => {
    try{
        const data = fs.writeFileSync(filePath, fileData);
        return ("created successfully")
    }catch(err){
        return err
    }
};

export default createAfile;
