import  express from"express";
const app = express();
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
import {studentsRouter} from "./routes/students.js"
import cors from "cors";
app.use(cors());
app.use(express.json());
app.use("/students",studentsRouter);

app.get("/", (req, res) => {
   res.send("server started");
 });

app.listen(PORT, () => console.log(`The server started in: ${PORT} `));