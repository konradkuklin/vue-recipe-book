<template>
  <div>
    <h1>{{ recipe?.name }}</h1>
    <p>{{ recipe?.description }}</p>
    <div>
      <RouterLink :to="{ name: 'edit-recipe', params: { id: recipe?.id } }"> Edit</RouterLink>
    </div>
    <button v-if="recipe" @click="recipeStore.toggleFavorite(recipe.id)">
      {{ isfavorite ? 'Remove from fav' : 'Add to favs' }}
    </button>
  </div>
  <div>Recipe {{ $route.params.id }}</div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const recipeStore = useRecipeStore();
const route = useRoute();

const recipe = computed(() => recipeStore.getRecipeById(route.params.id as string));

const isfavorite = computed(() =>
  recipe.value ? recipeStore.isFavorite(recipe.value.id as string) : false,
);

console.log(recipeStore.recipes, 'recipes');
// watch(
//   () => route.params.id,
//   () => console.log('fetching in watch'),
//   { immediate: true },
// );
</script>
