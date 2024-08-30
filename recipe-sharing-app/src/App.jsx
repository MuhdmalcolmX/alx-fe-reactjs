// App.jsx
import create from 'zustand';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe]
  })),
  initializeRecipes: (initialRecipes) => set({ recipes: initialRecipes })
}));

export default useRecipeStore;
