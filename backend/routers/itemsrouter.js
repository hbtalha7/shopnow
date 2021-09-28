import express from "express";
import expressAsyncHandler from "express-async-handler";
import expressasynchandler from "express-async-handler";
import Items from "../models/itemsmodel.js";
import data from "../data.js";

const itemsRouter = express.Router();

itemsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const items = await Items.find({});
    res.send(items);
  })
);

itemsRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Items.remove({});
    const createitems = await Items.insertMany(data.items);
    res.send(createitems);
  })
);

itemsRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const item = await Items.findById(req.params.id);
    if (item) {
      res.send(item);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

itemsRouter.post(
  "/additem",
  expressasynchandler(async (req, res) => {
    console.log(req.body.name);
    const item = new Items({
      name: req.body.title,
      category: "Laptop",
      image: req.body.imageId,
      price: req.body.price,
      brand: "Apple",
      rating: 5,
      numReviews: 1007,
      description: req.body.descrip,
      countInStock: req.body.qty,
      seller: req.body.seller,
    });
    const createditem = await item.save();
    res.send({
      // _id: createdUser._id,
      name: createditem.name,
      category: "Laptop",
      image: req.body.imageId,
      price: createditem.price,
      brand: "Apple",
      seller: req.body.seller,
    });
  })
);

export default itemsRouter;
