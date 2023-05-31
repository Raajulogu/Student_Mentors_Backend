import  express from "express";
import { Students_list } from "./rout/students.js";
import { Mentors_list } from "./rout/mentor.js";
import { Class_list } from "./rout/Class.js";

let PORT=9000;

let app=express();

app.use(express.json());

app.use("/students",Students_list);

app.use("/mentors",Mentors_list);

app.use("/class",Class_list);

app.listen(PORT,()=>console.log(`Server running in localhost:${PORT}`))