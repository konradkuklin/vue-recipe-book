<template>
  <nav v-if="recipes.length > 0">
    <ul>
      <li v-for="recipe in recipes" :key="recipe.id">
        <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">{{
          recipe.name
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { type Recipe } from '@/stores/recipe';

defineProps<{
  recipes: Recipe[];
}>();
</script>
