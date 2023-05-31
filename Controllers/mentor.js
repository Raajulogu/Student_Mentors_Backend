import { ObjectId } from "bson";
import { client } from "../db.js";


export function getAllMentor(req){
    return client
    .db("Guvi").collection("mentor")
    .find(req.query).toArray()
}

export function getMentorById(id){
    return client
    .db("Guvi").collection("mentor")
    .findOne({_id:new ObjectId(id)})
}

export function addMentorData(data){
    return client
    .db("Guvi").collection("mentor")
    .insertOne({data})
}

export function DeleteMentorData(id){
    return client
    .db("Guvi").collection("mentor")
    .deleteOne({_id:new ObjectId(id)})
}