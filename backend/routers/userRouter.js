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

export default userRouter;
