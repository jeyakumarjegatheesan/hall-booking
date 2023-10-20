import express from "express"
import cors from "cors"
import roomRouter from "./Routers/room.router.js";
import { IsAppWorking } from "./Controllers/room.controller.js";



const app=express();
const PORT=4000

app.use(cors())
app.use(express.json())
app.use("/api",roomRouter)

const appRouter = express.Router()
app.use("/",appRouter.get('/',IsAppWorking))


app.listen(PORT,()=>{
    console.log("App is lisening",PORT);
})