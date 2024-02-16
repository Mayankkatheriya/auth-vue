// src/store/authStore.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(newUser) {
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
