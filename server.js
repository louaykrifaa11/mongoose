const express=require("express")
const app=express()
const mongoose=require("mongoose")

app.use(express.json())

const port=8081

mongoose.connect("mongodb+srv://louaykrifaaa11:1234@cluster0.6eeywmw.mongodb.net/myfirstapp?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))
app.use("/",require("./routes/userRoute"))
app.listen(port,(err)=>{
    err?console.log(err):console.log("server is running")
})
