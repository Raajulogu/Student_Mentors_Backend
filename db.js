import {MongoClient} from "mongodb";
import Obj from "mongodb";

let MongoURL="mongodb://127.0.0.1:27017";

async function createConnection(){
    let client =new MongoClient(MongoURL);
    await client.connect()
    console.log("Mongodb is connected Successfully")
    return client;
}

export var ObjectId=Obj.ObjectId;
export let client =await createConnection();

