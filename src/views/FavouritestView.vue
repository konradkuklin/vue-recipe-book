<template>
  <h1>favorite recipes</h1>
  <RecipeList :recipes="recipeStore.favoriteRecipes"></RecipeList>
</template>

<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue';
import { useRecipeStore } from '@/stores/recipe';

const recipeStore = useRecipeStore();
</script>
