<template>
  <div>
    <div v-if="user.email">
      <h2>My Recipes</h2>
      <NuxtLink to="newrecipe"><button class="fab">+</button></NuxtLink>
      <div
        class="recipe"
        v-for="(recipe, index) in recipes"
        v-bind:key="recipe.title"
      >
        <h3 @click="toggle(index)">{{ recipe.title }}</h3>
        <Recipe
          v-if="recipe.visible"
          v-bind:index="index"
          v-bind:title="recipe.title"
          v-bind:desc="recipe.desc"
          v-bind:ingredients="recipe.ingredients"
          v-bind:directions="recipe.directions"
        ></Recipe>
      </div>
    </div>
    <div v-if="!user.email" class="loginview">
      <h2>Welcome to the cookbook</h2>
      <p>Click the Sign In button to get started</p>
    </div>
  </div>
</template>
<script>
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  arrayUnion,
  updateDoc,
  getDoc,
} from "firebase/firestore";

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
const db = getFirestore(app);

export default {
  data() {
    return {
      user: {},
      recipes: [],
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
      if (!user) {
        this.user = {};
      } else {
        this.getData();
      }
    });
  },
  methods: {
    async getData() {
      const docRef = doc(db, "users", this.user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        this.recipes = docSnap.data().recipes;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    toggle(index) {
      this.recipes[index].visible = !this.recipes[index].visible;
    },
  },
};
</script>
<style>
.loginview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
a {
  position: fixed;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
}
.fab {
  padding: 10px;
  font-size: 40px;
  border-radius: 500px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.recipe {
  margin: 10px;
}
</style>
