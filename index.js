import  express from"express";
const app = express();
const PORT = 5000;
import {studentsRouter} from "./routes/students.js"
import cors from "cors";
app.use(cors());
app.use(express.json());
app.use("/students",studentsRouter);
// import Obj from "mongodb";
// import {MongoClient} from "mongodb";
// import dotenv from "dotenv";

app.get("/", (req, res) => {
   res.send("server started");
 });

// dotenv.config();
//  export var ObjectId = Obj.ObjectId;
// //Mongo connection 
// const MONGO_URL = process.env.MONGO_URL


// async function createConnection(){
//    const client = new MongoClient(MONGO_URL)
//    await client.connect();
//    console.log("Mongodb is succesfuly connected")
//    return client ;
// } 
// export const client = await createConnection();


// //to get all students
// app.get("/students", async(req,res)=>{
//    const studentsData = await(await client)
//    .db("guvi")
//    .collection("students")
//    .find(req.query)
//    .toArray()
//    res.status(200).json(studentsData);
// });


// // // get through query
// app.get("/students",async (req,res)=>{
//    if(req.query.age){
//       req.query.age = +req.query.age
//    }
//    const studentsData = await (await client)
//    .db("guvi")
//    .collection("students")
//    .find(req.query)
//    .toArray()
//    res.status(200).json(studentsData);
// })

// //post

// app.post("/students",async(req,res)=>{
//    const newData= req.body;
//    console.log(newData);
//    const result = await (await client)
//    .db("guvi")
//    .collection("students")
//    .insertOne(newData)
//    res.status(200).send(result);
// });
 
// //post many
// app.post("/students/many", async (req,res)=>{
// const result = await (await client).db("guvi").collection("students").insertMany(req.body)

// res.status(200).send(result);

// })

// // for getting data through id
// app.get("/students/:id", async (req,res)=>{
//    const {id}= req.params; 
//    const student = await (await client)
//    .db("guvi").collection("students").findOne({_id:new ObjectId(id)})
//    res.status(200).send(student);
// })

// //put
// app.put("/students/:id",async(req,res)=>{
//    const {id}=req.params;
//    const updated = req.body;
//    console.log(updated);
//    const result = await (await client)
// .db("guvi").collection("students").updateOne({_id:new ObjectId(id)},{$set:updated})
//    res.status(200).send(result)
// })
// //delete
// app.delete("/students/:id",async(req,res)=>{
//    const {id}= req.params;
//    const result = await(await client)
//    .db("guvi").collection("students").deleteOne({_id:new ObjectId(id)});
//       res.status(200).send(result)
// })


app.listen(PORT, () => console.log(`The server started in: ${PORT} `));