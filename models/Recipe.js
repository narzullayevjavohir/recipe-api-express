import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  },

  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipesSchema);

export default Recipe;
