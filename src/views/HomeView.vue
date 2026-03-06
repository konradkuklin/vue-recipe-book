<template>
  <main>
    <h1>Recipe Book</h1>
    <div>
      <input type="text" placeholder="Seach recipes..." v-model="recipeStore.searchQuery" />
    </div>
    <RecipeList :recipes="recipeStore.filteredRecipes"></RecipeList>
  </main>
</template>

<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue';
import { useRecipeStore } from '@/stores/recipe';
import { RouterLink } from 'vue-router';

const recipeStore = useRecipeStore();
</script>
