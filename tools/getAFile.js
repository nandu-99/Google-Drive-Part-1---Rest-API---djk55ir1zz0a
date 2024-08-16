import fs from 'fs';
const getAFile = (filepath) => {
    try{
        const file = fs.readFileSync(filepath, 'utf8');
        return file;
    }catch(err){
        console.log(err);
    }
}

export default getAFile;
