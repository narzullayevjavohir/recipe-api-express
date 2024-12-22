import express from "express";
import {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  deleteAllRecipes,
} from "../controllers/recipeControllers.js";

const router = express.Router();

router.post("/recipes", createRecipe);
router.get("/recipes", getAllRecipes);
router.get("/recipes/:id", getRecipeById);
router.put("/recipes/:id", updateRecipe);
router.delete("/recipes/:id", deleteRecipe);
router.delete("/recipes", deleteAllRecipes);

export default router;
