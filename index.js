import  express from "express";
import { Students_list } from "./rout/students.js";

let PORT=9000;

let app=express();

app.use(express.json())

app.use("/students",Students_list)

app.listen(PORT,()=>console.log(`Server running in localhost:${PORT}`))