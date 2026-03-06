<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }"> Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'favorites' }">Favorites</RouterLink>
        </li>
        <!-- <li>
          <RouterLink :to="{ name: 'recipe', params: recipe }">REcipe</RouterLink>
        </li> -->
        <li>
          <RouterLink :to="{ name: 'add-recipe' }">Add recipe</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
