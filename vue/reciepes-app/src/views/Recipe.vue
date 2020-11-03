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
  computed: mapGetters(['getRecipe']),
  mounted () {
    const recipe = this.getRecipe(this.$route.params.id)
    this.title = recipe.title
    this.text = recipe.text
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
