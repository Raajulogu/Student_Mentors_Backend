import express from "express";
import { DeleteStudentData, UpdateStudentData, addStudentsData, getAllStudents, getStudentsById } from "../Controllers/students.js";

let router=express.Router();

//All students data
router.get("/data",async (req,res)=>{
    try {
        let students=await getAllStudents(req)
        if(!students){
            res.sendStatus(400).json({data:"User Not Found"})
            return
        }
        return res.status(200).json({data:students})
        
    } catch (error) {
        console.log(error); 
        res.status(500).json({data:"Internal Server Error"})
    }
})

//Get students based on students id number
router.get("/:id",async (req,res)=>{
    try {
        let {id}=req.params;
        let students=await getStudentsById(id)
        if(!students){
            res.sendStatus(400).json({data:"Student Not Found"})
            return
        }
        return res.status(200).json({data:students})
        
    } catch (error) {
        console.log(error); 
        res.status(500).json({data:"Internal Server Error"})
    }
})

//Adding Students in the server
router.post("/add",async(req,res)=>{
    try {
        let newdata=req.body;
        if(!newdata){
            return res.send(400).json({data:"No details provided"})
        }
        let result=await addStudentsData(newdata);
        res.status(200).json({data:{result:result,message:"New student added successfully"}})
    } catch (eroor) {
        console.log(error)
        res.status(500).json({data:"Internal Server Error"})
    }
})

//update Students Data
router.put("/edit/:id",async (req,res)=>{
    try {
        let {id}=req.params;
        let updatedData=req.body;
        if(!updatedData){
            return res.status(400).json({data:"Wrong Request:"})
        }
        let result=await UpdateStudentData(id,updatedData)
        res.status(200).json({data:{result:result,message:"Student data updated"}})
    } catch (error) {
        console.log(error)
        res.status(500).json({data:"Enternal Server Error"})
    }
})


//Delete Students Data
router.delete("/delete/:id",async (req,res)=>{
    try {
        let {id}=req.params;
        let result=await DeleteStudentData(id);
        if(!id){
            return res.status(400).json({data:"Student Id needed"})
        }
        res.status(200).json({data:"Student Data deleted Successfully"})
    } catch (error) {
        res.status(500).json({data:"Internal Server Error"})
    }
})
export let Students_list=router;