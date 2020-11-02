<template>
  <div class="container">
    <h1>Recipe: {{ title }} </h1>
    <router-link to="/">Back</router-link>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Recipe',
  data: () => ({
    title: 'Undefined',
    text: ''
  }),
  computed: mapGetters(['getRecipes']),
  mounted () {
    console.log(this.getRecipes)
    const id = this.$route.params.id
    const { title, text } = this.getRecipes.find(r => r.id === id)
    this.title = title
    this.text = text
  }
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  font-size: 20px;
  transition: 200ms color ease;
  color: #000;
  display: inline-block;
  margin-bottom: 20px;

  &:hover {
    color: #2077e7;
  }
}

</style>
