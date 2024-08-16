import fs from 'fs';
const deleteAFile = (fileName) => {
    try{
        fs.unlinkSync(fileName);
        return ('file deleted successfully')
    }catch(err){
        return err
    }
};

export default deleteAFile;
