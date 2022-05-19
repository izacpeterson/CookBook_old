<template>
  <div>
    <h2>Account</h2>
    <button @click="loginGoogle">Sign in with Google</button>
  </div>
</template>
<script>
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9EOSlnmGS-kseGdB2F9nOWG9UIlSBP_E",
  authDomain: "cookbook-769df.firebaseapp.com",
  projectId: "cookbook-769df",
  storageBucket: "cookbook-769df.appspot.com",
  messagingSenderId: "644720982505",
  appId: "1:644720982505:web:7ddfea4d742c26c2c23378",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export default {
  methods: {
    loginGoogle() {
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        console.log(user);
        navigateTo("/");
      });
    },
  },
};
</script>
