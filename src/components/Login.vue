<!-- src/components/Login.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center text-white ">
    <div class="max-w-md w-full p-6 backdrop-blur-md bg-white/30 rounded-md shadow-md">
      <h2 class="text-2xl font-bold text-center">Login</h2>
      <form @submit.prevent="login" class="mt-4 space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-white">Email:</label>
          <input
            type="email"
            v-model="email"
            required
            class="mt-1 p-2 w-full border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-white">Password:</label>
          <input
            type="password"
            v-model="password"
            required
            class="mt-1 p-2 w-full border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          class="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
      </form>
      <p class="mt-4 text-sm">
        Don't have an account? <router-link to="/signup" class="text-blue-500 hover:underline">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuthStore } from '../store/authStore';
import router from '../router';

const email = ref('');
const password = ref('');
const authStore = useAuthStore();

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    console.log('User logged in:', user);

    // Update the user state in the Pinia store
    authStore.setUser(user);

    // Redirect to the dashboard after successful login
    router.push('/dashboard');
  } catch (error:any) {
    alert(error.message);
    console.error('Login error:', error.message);
  }
};
</script>
