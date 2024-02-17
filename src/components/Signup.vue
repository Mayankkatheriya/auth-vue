<!-- src/components/Signup.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center text-white ">
    <div class="max-w-md w-full p-6 backdrop-blur-md bg-white/30 rounded-md shadow-md">
      <h2 class="text-2xl font-bold text-center">Sign Up</h2>
      <form @submit.prevent="signup" class="mt-4 space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-white ">Email:</label>
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
          class="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Sign Up
        </button>
      </form>
      <p class="mt-4 text-sm">
        Already have an account? <router-link to="/" class="text-green-500 hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import router from '../router';

const email = ref('');
const password = ref('');

const signup = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    alert("Successfully signed up!");
    console.log('User signed up:', user);
    router.push('/');
  } catch (error:any) {
    console.error('Signup error:', error.message);
  } finally {
    email.value = '';
    password.value = '';
  }
};
</script>
