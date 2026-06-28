import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express();

const port = process.env.PORT || 5000
app.use(express.json());

app.get("/health",(req,res)=>{
   return res.status(200).json({message:"all is good👍"})
})

app.get("/",async (req,res) =>{
    res.status(200).json({message: "Hello Akash from AWS EC2 Instance v3🧑‍💻"});
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})