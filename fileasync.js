import fs from "fs/promises";
const asyncwriter = async()=>{
    try{
        await fs.writeFile("./datasync.csv","This is the async file.");
        console.log("File has been written successfully,(async)");
    }catch(error){
        console.log("unable to write file.(async)",error);
    }
    

}
asyncwriter();

const asyncreader = async()=>{
    try{
        const fileData= await fs.readFile("./datasync.csv","utf-8");
        console.log(fileData);
        console.log("File has been read successfully,(async)");
        return fileData
    }catch(error){
        console.log("unable to read file.(async)",error);
    }
}
const data = await asyncreader();
console.log(data);
export default{asyncwriter,asyncreader};