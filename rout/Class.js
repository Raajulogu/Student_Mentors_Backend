import express from "express";
import { DeleteStudentData, addStudentsData, getAllStudents, getStudentsById } from "../Controllers/students.js";
import { ChangeMentor, DeleteClassData, assignStudent, getClassData } from "../Controllers/Class.js";
import { getMentorById } from "../Controllers/mentor.js";

let router=express.Router();

//Assign a Student for a Mentor:
router.post("/assign",async (req,res)=>{
    try {
        let data=req.body;
        if(!data){
            return res.status(400).json({data:"Please Enter a Student Id"})
        }
        let student=await getStudentsById(data.student)
        let mentor=await getMentorById(data.mentor);
        let result=await assignStudent({mentor:mentor.data.name
                                        ,mentorId:data.mentor
                                        ,Student:student.data.name,
                                        StudentId:data.student})
        DeleteStudentData(data.student);
        res.status(200).json({data:result})
    } catch (error) {
        console.log(error);
        res.status(500).json({data:"Internal Server Error"})
    }
})

//Get Class Details
router.get("/details",async (req,res)=>{
    try {
        let details=await getClassData(req)
        if(!details){
            return res.status(400).json({data:"No Classes Sheduled"})
        }
        res.status(200).json({data:details})
    } catch (error) {
        console.log(error);
        res.status(500).json({data:"Internal Server Error"})
    }
})

//change a mentor for a Student
router.put("/edit",async (req,res)=>{
    try {
        let data=req.body
        let id;
        if(!data){
            return res.status(400).json({data:"Please Enter the details"})
        }
        let temp=await getClassData(req);
        temp.forEach(element => {
            if(element.StudentId==data.student){
                id=element._id;
            }
        });

        let mentor=await getMentorById(data.mentor);
        let UpdatedData={
            mentor:mentor.data.name,
            mentorId:mentor._id
        }
        let result=await ChangeMentor(id,UpdatedData)
        res.status(200).json({data:result})
    } catch (error) {
        console.log(error);
        res.status(500).json({data:"Internal Server Error"})
    }
})

router.delete("/delete/:id",async (req,res)=>{
    try {
        let {id}=req.params;
        let result=await DeleteClassData(id);
        if(!id){
            return res.status(400).json({data:"Class Id needed"})
        }
        res.status(200).json({data:"Class Data deleted Successfully"})
    } catch (error) {
        res.status(500).json({data:"Internal Server Error"})
    }
})

export let Class_list=router;