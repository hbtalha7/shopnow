import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import expressasynchandler from 'express-async-handler'
import Items from '../models/itemsmodel.js'
import data from '../data.js'

const itemsRouter=express.Router()

itemsRouter.get(
    '/',
    expressAsyncHandler(async(req,res)=>{
        const items=await Items.find({});
        res.send(items)
    })
)

itemsRouter.get(
    '/seed',
    expressAsyncHandler(async(req,res)=>{
        await Items.remove({})
        const createitems=await Items.insertMany(data.items);
        res.send(createitems)
    })
)

itemsRouter.get(
    '/:id',
    expressAsyncHandler(async(req,res)=>{
        const item=await Items.findById(req.params.id);
        if(item){
            res.send(item)
        }else{
            res.status(404).send({message:'Product Not Found'})
        }
        
    })
)

export default itemsRouter