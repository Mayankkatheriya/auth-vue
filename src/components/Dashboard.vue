<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Navbar -->
    <div class="flex items-center justify-between p-4 bg-gray-800">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png" alt="Logo" class="h-8 w-8 mr-2" />
        <span class="text-xl font-bold">Auth-Demo</span>
      </div>
      <!-- Menu Items -->
      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="hover:underline">Home</a>
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Docs</a>
        <a href="#" class="hover:underline">API</a>
        <a href="#" class="hover:underline">Contact</a>
        <!-- Add more menu items as needed -->
      </div>
      <!-- Profile Picture with Logout Dropdown -->
      <div class="flex items-center space-x-4" @click="toggleDropdown">
        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        <div class="group relative">
          <button class="group-hover:underline focus:outline-none">
            {{ authStore.user ? authStore.user.displayName || 'Profile' : 'Profile' }}
          </button>
          <div v-if="authStore.user && isDropdownOpen" class="absolute right-0 mt-2 bg-white text-gray-800 rounded-md p-2">
            <!-- Dropdown content, e.g., additional profile options -->
            <button @click="logout" class="block w-full text-left hover:underline">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Body Content -->
    <div class="w-full p-6 mx-auto">
      <h1 class="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
      <div class="mt-3" v-if="authStore.user">
        <p class="text-xl">User ID: {{ authStore.user.uid || 'N/A' }}</p>
        <p class="text-xl">User Email: {{ authStore.user.email || 'N/A' }}</p>
      </div>
      <div v-else>
        <p>Please wait...</p>
      </div>
    </div>

    <!-- Fixed Bottom Navigation for Small Screens -->
    <nav class="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 md:hidden">
      <div class="flex justify-between">
        <a href="#" class="text-white hover:underline">Home</a>
        <a href="#" class="text-white hover:underline">About</a>
        <a href="#" class="text-white hover:underline">Docs</a>
        <a href="#" class="text-white hover:underline">API</a>
        <a href="#" class="text-white hover:underline">Contact</a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuthStore } from '../store/authStore';
import router from '../router';

const authStore = useAuthStore();
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      router.push('/login');
    } else {
      authStore.setUser(currentUser);
    }
  });
});

const logout = async () => {
  try {
    await signOut(auth);
    authStore.clearUser();
    router.push('/');
  } catch (error: any) {
    console.error('Logout error:', error.message);
  }
};
</script>
