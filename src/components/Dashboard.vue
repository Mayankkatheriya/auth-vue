<!-- src/components/Dashboard.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h2 class="text-2xl font-bold text-center">Dashboard</h2>
      <div v-if="authStore.user">
        <p class="mt-4 text-sm">
          User ID: {{ authStore.user.uid }}
        </p>
        <p class="mt-2 text-sm">
          User Name: {{ authStore.user.email || 'N/A' }}
        </p>
        <button
          @click="logout"
          class="w-full mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
        >
          Logout
        </button>
      </div>
      <div v-else>
        <p>Please wait...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuthStore } from '../store/authStore';
import router from '../router';

const authStore = useAuthStore();

onMounted(() => {
  // Check if the user is authenticated
  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      // Redirect to login if the user is not authenticated
      router.push('/login');
    } else {
      // Update the user state in the Pinia store
      authStore.setUser(currentUser);
    }
  });
});

const logout = async () => {
  try {
    await signOut(auth);
    // Clear user state in the Pinia store
    authStore.clearUser();
    router.push('/'); // Redirect to login after logout
  } catch (error) {
    console.error('Logout error:', error.message);
  }
};
</script>
