import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import itemsRouter from './backend/routers/itemsrouter.js'
import userRouter from './backend/routers/userRouter.js';
const app=express();
const __dirname = path.resolve();
const port=process.env.PORT || 5000;
const CONNECTION_URL='mongodb+srv://demo:demo123@cluster0.mtf0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(
        ()=>app.listen(port,()=>{
            console.log(`server at http://localhost:${port}`)
        })
    )

app.get('/',(req,res)=>{
    res.send('Server is ready'+ process.env.NODE_ENV.trim() +1)
    console.log(process.env.NODE_ENV)
})
console.log("production Hi")
app.use('/api/items',itemsRouter)
app.use('/api/users',userRouter)

if(process.env.NODE_ENV.trim()==="production"){
    console.log("production Hi")
    app.use(express.static("frontend/build"))
    app.get("/start",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}


