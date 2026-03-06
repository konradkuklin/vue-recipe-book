import AddRecipeView from '@/views/AddRecipeView.vue';
import FavouritestView from '@/views/FavouritestView.vue';
import HomeView from '@/views/HomeView.vue';
import RecipeView from '@/views/RecipeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import EditRecipeView from '@/views/EditRecipeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'home',
    },
    {
      path: '/favorites',
      component: FavouritestView,
      name: 'favorites',
    },
    {
      path: '/add-recipe',
      component: AddRecipeView,
      name: 'add-recipe',
    },
    {
      path: '/recipe/:id',
      component: RecipeView,
      name: 'recipe',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
    {
      path: '/recipe/:id/edit',
      component: EditRecipeView,
      name: 'edit-recipe',
    },
  ],
});

export default router;
