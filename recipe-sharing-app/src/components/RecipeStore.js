import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe]
  })),
  initializeRecipes: (initialRecipes) => set({ recipes: initialRecipes })
}));

export default useRecipeStore;