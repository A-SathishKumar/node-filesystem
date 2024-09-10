import fs from "fs";

export const Createfiles = (filepath,filename,filecontect,cbfn=()=>{})=>{
    if(!fs.existsSync(filepath)){
        fs.mkdir(filepath,()=>{
            console.log("Folder Created Successfully!!!");
        })
    }
    fs.writeFile(`${filepath}/${filename}`,filecontect,cbfn);
}

export const getfiles = (folderpath,successfn,errorfn)=>{
    fs.readdir(folderpath,(err,data)=>{
        if(err){
            errorfn();
        }else successfn(data);
    })
}