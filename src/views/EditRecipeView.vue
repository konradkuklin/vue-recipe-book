<template>
  <p>Edit recipe</p>

  <form @submit.prevent="updateRecipe">
    <div>
      <input type="text" v-model="name" required="true" placeholder="Title" />
    </div>
    <div>
      <textarea v-model="description" placeholder="Recipe description" required="true"></textarea>
    </div>
    <button type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useRecipeStore } from '@/stores/recipe';

const route = useRoute();
const recipeStore = useRecipeStore();
const router = useRouter();

const name = ref('');
const description = ref('');

// console.log(recipe, 'added resipe in add recipe view');

const fetchRecipe = () => {
  const id = route.params.id as string;

  const recipe = recipeStore.getRecipeById(id);

  if (recipe) {
    name.value = recipe.name;
    description.value = recipe.description;
  } else {
    router.push({ name: 'not-found' });
  }
};

onMounted(fetchRecipe);

const updateRecipe = () => {

  recipeStore.editRecipe({
    id: route.params.id as string,
    name: name.value,
    description: description.value,
  });

  router.push({
    name: 'recipe',
    params: {
      id: route.params.id as string,
    },
  });
};
</script>
