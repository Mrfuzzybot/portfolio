<template>
  <div class="container">
    <h1>Рецепт: {{ title }} </h1>
    <router-link to="/">Back</router-link>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  data: () => ({
    title: 'Картошка по-киевски',
    text: 'Картошка по-киевски, Картошка по-киевски, Картошка по-киевски, Картошка по-киевски'
  })
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
