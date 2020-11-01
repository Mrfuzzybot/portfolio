<template>
  <div class="container">
    <h1>New recipe</h1>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'New'
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  font-size: 20px;
  transition: 200ms color ease;
  color: #000;
  &:hover {
    color: #2077e7;
  }
}
</style>
