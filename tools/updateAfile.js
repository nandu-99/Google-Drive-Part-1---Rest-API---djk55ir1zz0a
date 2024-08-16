import fs from 'fs';

const updateAfile = (filepath, newFilepath, fileData) => {
    try{
        const newFile = fs.renameSync(filepath, newFilepath);
       fs.appendFileSync(newFilepath, fileData);
    }catch(err){
        console.error(err);
    }
};

export default updateAfile
