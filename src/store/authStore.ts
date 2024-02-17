// src/store/authStore.ts
import { defineStore } from 'pinia';
interface User {
  uid: string;
  email: string;
  // Add other properties as needed
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    setUser(newUser:any) {
      this.user = newUser;
    },
    clearUser() {
      this.user = null;
    },
  },
});

export function setupAuthStore() {
  return useAuthStore();
}
