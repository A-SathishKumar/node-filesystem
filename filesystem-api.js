import  express from "express";
import { Createfiles,getfiles } from "./modules/file-creation-deletions.js";

const server = express();
server.post("/create-file",(req,res)=>{
    const data = new Date();
    const timestramp = data.getTime().toString();
    const isotime = data.toISOString().replaceAll(":","-");
    Createfiles("./api-files",`${isotime}.txt`,timestramp,()=>{
        res.status(201).json({msg:"file created Successfully"});
    });
});

server.get("/get-files",(req,res)=>{
    getfiles("./api-files",(data)=> res.json(data),()=>res.status(500).json({msg:"Somthing Went Wrong!!!"}))
})

const PORT = 4500;
server.listen(PORT,()=>{
    console.log("Server Listen to: ",PORT);
});