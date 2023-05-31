import { ObjectId } from "bson";
import { client } from "../db.js";


export function assignStudent(req){
    return client
    .db("Guvi").collection("class")
    .insertOne(req)
}


export function getClassData(req){
    return client
    .db("Guvi").collection("class")
    .find(req.query).toArray();
}

export function ChangeMentor(id,UpdatedData){
    return client
    .db("Guvi").collection("class")
    .findOneAndUpdate({id},{$set:UpdatedData})
}

export function DeleteClassData(id){
    return client
    .db("Guvi").collection("class")
    .deleteOne({_id:new ObjectId(id)})
}