<template>
  <div class="home">
    <div class="container">
      <h1>All recipes</h1>

      <div class="recipes">
        <div class="recipes_actions">
          <label for="all_cbx" class="recipe_checkbox">
            <input
              type="checkbox"
              id="all_cbx"
              :checked="isChosenAllRecipes"
              @change="choseAllRecipes"
            >
            <span></span>
          </label>
          <router-link to="/new" class="recipes_add">
            <img src="../assets/img/icons/plus.svg" alt="">
          </router-link>
          <div class="recipe_actions">
            <button @click="removeChosen">
              <img src="../assets/img/icons/delete.svg" alt="">
            </button>
          </div>
        </div>

        <div
          class="recipe"
          v-for="(recipe, idx) in recipes"
          :key="idx"
        >
          <label :for="`cbx1_${idx}`" class="recipe_checkbox">
            <input
              type="checkbox"
              :id="`cbx1_${idx}`"
              :checked="recipe.isChosen"
              @change="choseRecipe($event, idx)"
            >
            <span></span>
          </label>
          <a href="#" class="recipe_title">{{ recipe.title }}</a>
          <div class="recipe_actions">
            <a href="#">
              <img src="../assets/img/icons/edit.svg" alt="">
            </a>
            <button @click="removeCurrent(idx)">
              <img src="../assets/img/icons/delete.svg" alt="">
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    recipes: [
      { title: 'Рецепт 1', id: 'a', isChosen: false },
      { title: 'Рецепт 2', id: 'b', isChosen: false },
      { title: 'Рецепт 3', id: 'c', isChosen: false }
    ]
  }),
  methods: {
    choseAllRecipes () {
      const isChosenAllRecipes = this.isChosenAllRecipes

      this.recipes = this.recipes.map(el => {
        el.isChosen = !isChosenAllRecipes
        return el
      })
    },
    choseRecipe (e, i) {
      this.recipes = this.recipes.map((recipe, idx) => {
        if (i === idx) {
          recipe.isChosen = e.target.checked
        }
        return recipe
      })
    },
    removeCurrent (i) {
      this.recipes = this.recipes.filter((_, idx) => i !== idx)
    },
    removeChosen () {
      this.recipes = this.recipes.filter((recipe) => !recipe.isChosen)
    }
  },
  computed: {
    isChosenAllRecipes () {
      let isChosenAllRecipes = true

      if (this.recipes.length > 0) {
        this.recipes.forEach(r => {
          if (!r.isChosen) {
            isChosenAllRecipes = false
          }
        })
      } else {
        isChosenAllRecipes = false
      }

      return isChosenAllRecipes
    }
  },
  watch: {
    recipes (v) {
      console.log(v)
    }
  }
}
</script>

<style lang="scss">
.recipes {
  &_actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 5px;
  }
  &_add {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    transition: 200ms border-color ease;
    img {
      width: 30px;
      height: 30px;
    }
    &:hover {
      border: 1px solid #2077e7;
    }
  }
}

.recipe {
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 20px;
  margin-bottom: 10px;

  &_checkbox {
    margin-right: 20px;
    input {
      visibility: hidden;
      position: absolute;
      z-index: -1;
      &:checked + span {
        background-image: url('../assets/img/icons/check.svg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 20px;
      }
    }
    span {
      width: 35px;
      height: 35px;
      display: block;
      border: 1px solid black;
      border-radius: 5px;
      transition: 200ms border-color ease;
    }
    &:hover span{
      border-color: #2077e7;
    }
  }

  &_title {
    font-size: 28px;
    margin-right: auto;
    text-decoration: none;
    color: #000;
    transition: 200ms color ease;
    &:hover {
      color: #2077e7;
    }
  }

  &_actions {
    display: flex;
    align-items: center;
    margin: 0 -10px;
    button, a {
      transition: 200ms border-color ease;
      margin: 0 10px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border-radius: 5px;
      border: 1px solid #000000;
      img {
        width: 20px;
        height: 20px;
      }
      &:hover {
        border-color: #2077e7;
      }
    }
  }
}

</style>
