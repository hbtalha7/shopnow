import mongoose from  'mongoose'

const itemSchema=new mongoose.Schema(
    {
        // name: { type: String, required: true, unique: true },
        name: { type: String, required: true},
        image: { type: String, required: true },
        brand: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },
      },
      {
        timestamps: true,
      }
)

const Items=mongoose.model('Items',itemSchema)

export default Items;