<template>
  <div class="recipe">
    <label for=""
      >Name: <input type="text" v-model="title" placeholder="Sweet Potato Pie"
    /></label>
    <label for=""
      >Description: <input type="text" v-model="desc" placeholder="I like it!"
    /></label>
    <label for=""
      >Ingredients:
      <ul v-if="ingredients.length > 0">
        <li v-for="ing in ingredients" v-bind:key="ing">
          {{ ing }}
        </li>
      </ul>
      <span>
        <input type="text" v-model="ingredient" placeholder="Salt" />
        <button @click="addIngredient">+</button>
      </span>
    </label>
    <label for=""
      >Directions:
      <ol v-if="directions.length > 0">
        <li v-for="st in directions" v-bind:key="st">{{ st }}</li>
      </ol>
      <span>
        <input type="text" v-model="step" placeholder="Bake at 600&deg;" />
        <button @click="addStep">+</button>
      </span>
    </label>
    <button @click="save">Save</button>
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
      title: "",
      desc: "",
      ingredient: "",
      step: "",
      ingredients: [],
      directions: [],
      user: {},
    };
  },
  methods: {
    addIngredient() {
      this.ingredients.push(this.ingredient);
      this.ingredient = "";
    },
    addStep() {
      this.directions.push(this.step);
      this.step = "";
    },

    async save() {
      const docRef = doc(db, "users", this.user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap.data().recipes);
        let arr = docSnap.data().recipes;
        arr.push({
          title: this.title,
          desc: this.desc,
          ingredients: this.ingredients,
          directions: this.directions,
        });
        console.log(arr);
        setDoc(doc(db, "users", this.user.uid), {
          recipes: arr,
        });
      } else {
        setDoc(doc(db, "users", this.user.uid), {
          recipes: [
            {
              title: this.title,
              desc: this.desc,
              ingredients: this.ingredients,
              directions: this.directions,
            },
          ],
        });
      }
      navigateTo("/");
    },
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
      console.log(this.user.uid);
    });
  },
};
</script>
<style>
label {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100%;
}
label * {
  margin: 5px 0;
}
li {
  margin: 0 20px;
}
input {
  font-size: 16px;
  padding: 5px;
  border: none;
  background-color: #d6d6d6;
}
</style>
