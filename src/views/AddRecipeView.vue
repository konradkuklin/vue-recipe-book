<template>
  <p>add recipe</p>

  <form @submit.prevent="addRecipe">
    <div>
      <input type="text" v-model="name" required="true" placeholder="Title" />
    </div>
    <div>
      <textarea v-model="description" placeholder="Recipe description" required="true"></textarea>
    </div>
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useRecipeStore } from '@/stores/recipe';

const recipeStore = useRecipeStore();
const router = useRouter();

const name = ref('');
const description = ref('');

// console.log(recipe, 'added resipe in add recipe view');

const addRecipe = () => {
  console.log('logging');
  console.log(name.value);
  console.log(description.value);

  const recipe = recipeStore.addRecipe({
    name: name.value,
    description: description.value,
  });

  router.push({
    name: 'recipe',
    params: {
      id: recipe.id,
    },
  });
};
</script>
