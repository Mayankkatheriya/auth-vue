// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCYMdkR_i1SdPZE_xfLo9cxoI71YzDCJT8",
    authDomain: "vue-project-6f223.firebaseapp.com",
    projectId: "vue-project-6f223",
    storageBucket: "vue-project-6f223.appspot.com",
    messagingSenderId: "943405656099",
    appId: "1:943405656099:web:a2b705b60fe9638057a996"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
