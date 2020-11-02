<template>
  <div class="container">
    <h1>Edit recipe:</h1>
    <router-link to="/">Back</router-link>
    <form class="grid" @submit.prevent="handleSubmit">
      <div class="half">
        <input
          type="text"
          placeholder="Title"
          v-model="title"
        >
      </div>
      <div class="full">
        <textarea
          v-model="text"
          placeholder="Recipe"
        ></textarea>
      </div>
      <div class="full">
        <button class="submit_btn" type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Edit',
  data: () => ({
    title: '',
    text: '',
    id: ''
  }),
  computed: mapGetters(['getRecipes']),
  methods: {
    ...mapMutations(['updateRecipe']),
    handleSubmit () {
      this.updateRecipe(this)
      this.$router.push('/')
    }
  },
  mounted () {
    this.id = this.$route.params.id
    const { title, text } = this.getRecipes.find(r => r.id === this.id)
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

input {
  height: 40px;
  width: 100%;
  padding-left: 15px;
  font-size: 20px;
}

textarea {
  padding-left: 15px;
  padding-top: 10px;
  font-size: 20px;
  width: 100%;
  resize: none;
  margin-top: 30px;
  height: 160px;
}

.submit_btn {
  margin-top: 30px;
  background-color: transparent;
  height: 40px;
  width: 120px;
  transition: 200ms border-color ease, 200ms color ease;

  &:hover {
    border-color: #2077e7;
    color: #2077e7;
  }
}

</style>
