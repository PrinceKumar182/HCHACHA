import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    // size: {
    //   type: String, // Assuming size is represented as a string, adjust data type as needed
    //   enum: ["Small", "Medium", "Large"], // Example sizes, modify as per your requirement
    //   required: true,
    // },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);