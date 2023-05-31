import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllStudents(req){
    return client
    .db("Guvi").collection("students")
    .find(req.query).toArray()
}

export function getStudentsById(id){
    return client
    .db("Guvi").collection("students")
    .findOne({_id:new ObjectId(id)})
}

export function addStudentsData(data){
    return client
    .db("Guvi").collection("students")
    .insertOne({data})
}

export function DeleteStudentData(id){
    return client
    .db("Guvi").collection("students")
    .deleteOne({_id:new ObjectId(id)})
}