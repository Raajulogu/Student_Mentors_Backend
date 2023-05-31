import express from "express";
import { DeleteMentorData, addMentorData, getAllMentor, getMentorById } from "../Controllers/mentor.js";

let router=express.Router();

//All Mentors data
router.get("/data",async (req,res)=>{
    try {
        let mentors=await getAllMentor(req)
        if(!mentors){
            res.sendStatus(400).json({data:"User Not Found"})
            return
        }
        return res.status(200).json({data:mentors})
        
    } catch (error) {
        console.log(error); 
        res.status(500).json({data:"Internal Server Error"})
    }
})



//Adding New Mentors in the Database
router.post("/add",async(req,res)=>{
    try {
        let newdata=req.body;
        if(!newdata){
            return res.send(400).json({data:"No details provided"})
        }
        let result=await addMentorData(newdata);
        res.status(200).json({data:{result:result,message:"New mentor added successfully"}})
    } catch (eroor) {
        console.log(error)
        res.status(500).json({data:"Internal Server Error"})
    }
})


//Delete Mentor Data
router.delete("/delete/:id",async (req,res)=>{
    try {
        let {id}=req.params;
        let result=await DeleteMentorData(id);
        if(!id){
            return res.status(400).json({data:"Mentor Id needed"})
        }
        res.status(200).json({data:"Mentor Data deleted Successfully"})
    } catch (error) {
        res.status(500).json({data:"Internal Server Error"})
    }
})



export let Mentors_list=router;