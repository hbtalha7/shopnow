import express from "express";
import expressasynchandler from "express-async-handler";
import User from "../models/usermodel.js";
import data from "../data.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressasynchandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);
export default userRouter;
userRouter.post(
  "/signin",
  expressasynchandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      // if (bcrypt.compareSync(req.body.password, user.password)) {
      if (user.password === req.body.password) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

userRouter.post(
  '/register',
  expressasynchandler(async (req, res) => {
    console.log(req.body.name)
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    });
    const createdUser = await user.save();
    res.send({
      // _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
    });
  })
);

userRouter.get(
  '/seed',
  expressasynchandler(async(req,res)=>{
      await User.remove({})
      const createitems=await User.insertMany(data.users);
      res.send(createitems)
  })
)


