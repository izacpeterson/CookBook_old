<template>
  <div>
    <h2>My Recipes</h2>
    <NuxtLink to="newrecipe"><button>New</button></NuxtLink>
    <ul class="recipe">
      <li v-for="recipe in recipes" v-bind:key="recipe.title">
        <h3>{{ recipe.title }}</h3>
        <p>{{ recipe.desc }}</p>
        <h4>Ingredients</h4>
        <ul>
          <li v-for="ingredient in recipe.ingredients" v-bind:key="ingredient">
            {{ ingredient }}
          </li>
        </ul>
        <h4>Directions</h4>
        <ol>
          <li v-for="step in recipe.directions" v-bind:key="step">
            {{ step }}
          </li>
        </ol>
        <hr />
      </li>
    </ul>
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
      this.getData();
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
  },
};
</script>
<style>
.recipe {
  padding: 20px;
}
ul,
p,
ol {
  padding: 0 0 10px 0;
}
li {
  margin: 0 20px;
}
</style>
