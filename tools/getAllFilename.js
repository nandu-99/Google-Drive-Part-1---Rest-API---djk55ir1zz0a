import fs from 'fs';
const getAllFiles = () => {
    try{
        const files = fs.readdirSync('root');
        return files
    }catch(err){
        console.log(err)
    }
};

export default getAllFiles;
