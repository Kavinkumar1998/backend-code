import {client} from "./db.js";
import Obj from "mongodb";
export var ObjectId = Obj.ObjectId;


export function getStudents(req) {
    return client
    .db("guvi")
    .collection("students")
    .find(req.query)
    .toArray()
 }
 
 export function getStudenteByParams(id){
    return client
    .db("guvi").collection("students")
    .findOne({_id:new ObjectId(id)})
 }
 
 export function addStudent(newData) {
   return client
   .db("guvi")
   .collection("students")
   .insertOne(newData)
 }
 
 export function editStudents(id, updated){
     return client
     .db("guvi").collection("students")
     .updateOne({_id:new ObjectId(id)},
     {$set:updated})
 }
 
 export function deleteStudent(id){
     return client
     .db("guvi").collection("students")
     .deleteOne({_id:new ObjectId(id)});
 }
 
 export function addBulckStudents(newData) {
     return client
     .db("guvi")
     .collection("students")
     .insertMany(newData)
 }