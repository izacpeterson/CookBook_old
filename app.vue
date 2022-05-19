<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <header>
      <h1>Cook Book</h1>
      <!-- <button>Logout</button> -->
    </header>
    <main>
      <NuxtPage></NuxtPage>
    </main>
  </div>
</template>
<script></script>
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
