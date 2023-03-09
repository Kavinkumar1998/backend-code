import  express from"express";
const app = express();
const PORT = 5000;
import {studentsRouter} from "./routes/students.js"
import cors from "cors";
app.use(cors());
app.use(express.json());
app.use("/students",studentsRouter);

app.get("/", (req, res) => {
   res.send("server started");
 });

app.listen(PORT, () => console.log(`The server started in: ${PORT} `));