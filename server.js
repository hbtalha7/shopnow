import express from "express";
import path from "path";
import mongoose from "mongoose";
import itemsRouter from "./backend/routers/itemsrouter.js";
import userRouter from "./backend/routers/userRouter.js";
import dotenv from 'dotenv'
import orderRouter from "./backend/routers/orderrouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __dirname = path.resolve();
const port = process.env.PORT || 5000;
const CONNECTION_URL =
  "mongodb+srv://demo:demo123@cluster0.mtf0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => {
      console.log(`server at http://localhost:${port}`);
    })
  );

// app.get('/',(req,res)=>{
//     res.send('Server is ready'+ process.env.NODE_ENV.trim() +1)
//     console.log(process.env.NODE_ENV)
// })
console.log("production Hi");
app.use("/api/items", itemsRouter);
app.use("/api/users", userRouter);
app.use('/api/orders', orderRouter);

if (process.env.NODE_ENV === "production") {
  console.log("production Hi");
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
