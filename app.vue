<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <header>
      <h1>Cook Book</h1>
      <button v-if="!user.email" @click="loginGoogle">Sign in</button>
      <button v-if="user.email" @click="logout">Sign out</button>
    </header>
    <main>
      <NuxtPage></NuxtPage>
    </main>
  </div>
</template>
<script>
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
  methods: {
    loginGoogle() {
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        console.log(user);
        this.user = result.user;
      });
    },
    logout() {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.user = {};
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
main {
  padding: 10px;
}
header {
  background-color: #222;
  color: #eee;
  padding: 10px;
  box-shadow: 0 0 5px black;
  display: flex;
  justify-content: space-between;
}
button {
  font-size: 16px;
  padding: 5px;
  border: none;
  background-color: #275bbd;
  color: white;
}
</style>
