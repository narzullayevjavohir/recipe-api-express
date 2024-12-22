import Recipe from "../models/Recipe.js";

export const createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error.message);
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error.message);
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, { new: true });
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error.message);
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};

export const deleteAllRecipes = async (req, res) => {
  try {
    await Recipe.deleteMany();
    res.status(200).json({ message: "All recipes deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};
