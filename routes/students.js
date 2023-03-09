import express from "express";
const router = express.Router();
import { getStudents,getStudenteByParams,addBulckStudents,addStudent,editStudents,deleteStudent } from "../functions.js";

//to get all students
router.get("/", async(req,res)=>{
   try {
      const studentsData = await getStudents(req);
     res.status(200).json(studentsData);
   }   
   catch (error){
      res.status(500).json({data : "Internal Server Error"})
   }
 });
 
 // for getting data through id
 router.get("/:id", async (req,res)=>{
    const {id}= req.params; 
    try{
      const student = await getStudenteByParams(id);
      if(!student){
         res.status(400).json({data:"User not Found"})
         return
      }
      res.status(200).send(student);
    }
    catch(error){
        res.status(400).json({data:"User not Found"})
    }
   
 })
 
 // // get through query
 router.get("/",async (req,res)=>{
    if(req.query.age){
       req.query.age = +req.query.age
    }
    try{
    const studentsData = await getStudents(req);
    if (studentsData.length<=0) {
      res.status(404).json({data:"No Content available"})
      return
   }
    res.status(200).json(studentsData);
   }
   catch(error){
      res.status(400).json({data:"User not Found"})
   }

 })
 
 //post
 
 router.post("/",async(req,res)=>{
   try{
    const newData= req.body;
    if(!newData){
      res.status(400).json({data:"No content Provided"})
      return
    }
    const result = await addStudent(newData);
    res.status(200).send(result);
   }
catch (error){
   res.status(500).json({data:"Internal server error"})
}
   
 });
  
 //post many
 router.post("/many", async (req,res)=>{
   const data = req.body;
   try {
      const result = await  addBulckStudents(data);
      res.status(201).json({data:"Added bulck data"})
   }
   catch (error) {
      res.status(500).json({data:"Internal server error"})
   }
 
 })
 

 //put
 router.put("/:id",async(req,res)=>{
    const {id}=req.params;
    try{
      const updated = req.body;
      const result = await editStudents(id, updated);
      res.status(200).json({data:"Edited Successfully"})
    }
    catch (error) {
      res.status(500).json({data:"Internal server error"})
  }
 })

 //delete
 router.delete("/:id",async(req,res)=>{
    const {id}= req.params;
    try{
      const result = await deleteStudent(id)
      res.status(201).json({data:"Deleted Successfully"}) 
    }catch (error) {
      console.log("error : ", error)
      res.status(500).json({data:"Internal server error"})
  }
    
 })
 

export const studentsRouter = router;