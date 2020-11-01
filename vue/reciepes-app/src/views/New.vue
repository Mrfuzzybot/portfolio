<template>
  <div class="container">
    <h1>New recipe</h1>
    <router-link to="/">Back</router-link>
    <form class="grid">
      <div class="half">
        <input type="text" placeholder="Название">
      </div>
      <div class="full">
        <textarea placeholder="Рецепт"></textarea>
      </div>
      <div class="full">
        <button class="submit_btn" type="submit">Save</button>
      </div>
    </form>
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
