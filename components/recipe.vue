<template>
  <div class="recipe">
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>

    <h4>Ingredients</h4>
    <ul>
      <li v-for="ingredient in ingredients" v-bind:key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
    <h4>Directions</h4>
    <ol>
      <li v-for="step in directions" v-bind:key="step">
        {{ step }}
      </li>
    </ol>
    <hr />
  </div>
</template>
<script>
export default {
  props: ["title", "desc", "ingredients", "directions", "index"],
};
</script>
<style scoped>
.recipe {
  padding: 20px;
}
li {
  margin: 0 20px;
}
ul,
ol,
p {
  margin: 0 0 20px 0;
}
</style>
