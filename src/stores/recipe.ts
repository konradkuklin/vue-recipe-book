import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export interface Recipe {
  id: string;
  name: string;
  description: string;
}

type NewRecipe = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);
  const favoriteIds = ref<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favoriteIds.value.includes(id)) {
      favoriteIds.value = favoriteIds.value.filter((favId) => favId !== id);
    } else {
      favoriteIds.value.push(id);
    }
  };

  const isFavorite = (id: string) => {
    return favoriteIds.value.includes(id);
  };

  const addRecipe = (recipe: NewRecipe) => {
    const newRecipe = { ...recipe, id: Date.now().toString() };

    recipes.value.push(newRecipe);
    return newRecipe;
  };

  const editRecipe = (updatedRecipe: Recipe) => {
    const index = recipes.value.findIndex((recipe) => recipe.id === updatedRecipe.id);

    if (index !== -1) {
      recipes.value[index] = updatedRecipe;
    }
  };

  const getRecipeById = (id: string) => {
    return recipes.value.find((r) => r.id === id);
  };

  const searchQuery = ref('');
  const filteredRecipes = computed(() => {
    return recipes.value.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
    );
  });

  const favoriteRecipes = computed(() =>
    recipes.value.filter((recipe) => favoriteIds.value.includes(recipe.id)),
  );

  return {
    recipes,
    addRecipe,
    getRecipeById,
    filteredRecipes,
    searchQuery,
    editRecipe,
    favoriteIds,
    toggleFavorite,
    isFavorite,
    favoriteRecipes,
  };
});
