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
            <button @click="toggleVisibilityOfSearchBar">
              <img src="../assets/img/icons/search.svg" alt="">
            </button>
            <button @click="removeChosen">
              <img src="../assets/img/icons/delete.svg" alt="">
            </button>
          </div>
        </div>

        <div class="recipes_search" v-if="isVisibleSearchBar">
          <input
            type="text"
            @input="search($event.target.value)"
          >
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
              @change="choseRecipe({id: recipe.id, isChosen: $event.target.checked})"
            >
            <span></span>
          </label>
          <router-link
            :to="`/recipe/${recipe.id}`"
            class="recipe_title"
          >{{ recipe.title | truncate(truncateLength) }}
          </router-link>
          <div class="recipe_actions">
            <router-link :to="`/edit/${recipe.id}`">
              <img src="../assets/img/icons/edit.svg" alt="">
            </router-link>
            <button @click="removeRecipe(recipe.id)">
              <img src="../assets/img/icons/delete.svg" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Home',
  methods: {
    ...mapMutations([
      'removeRecipe',
      'removeChosen',
      'removeRecipe',
      'choseRecipe',
      'choseAllRecipes',
      'getRecipesFromStorage',
      'toggleVisibilityOfSearchBar',
      'search'
    ])
  },
  computed: {
    ...mapGetters([
      'getRecipes',
      'isChosenAllRecipes',
      'isVisibleSearchBar',
      'foundedRecipes'
    ]),
    recipes () {
      console.log('this.foundedRecipes', this.foundedRecipes)
      return this.isVisibleSearchBar ? this.foundedRecipes : this.getRecipes
    },
    truncateLength () {
      const documentWidth = document.documentElement.clientWidth
      if (documentWidth < 370) {
        return 10
      } else if (documentWidth < 575) {
        return 14
      } else if (documentWidth < 800) {
        return 20
      }
      return 30
    }
  },
  mounted () {
    this.getRecipesFromStorage()
  }
}
</script>

<style lang="scss">
.recipes {
  &_actions {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 5px;
  }

  &_search {
    height: 60px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 10px;
    input {
      padding-left: 75px;
      padding-right: 120px;
      border: none;
      width: 100%;
      height: 100%;
      font-size: 28px;
    }
  }

  &_add {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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

    &:hover span {
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

@media screen and (max-width: 480px){
  .recipes {
    &_actions {
      height: 60px;
    }
    &_add {
      width: 40px;
      height: 40px;
      img {
        width: 25px;
        height: 25px;
      }
    }
    &_search {
      height: 40px;
      input {
        padding-left: 65px;
        padding-right: 90px;
        font-size: 20px;
      }
    }
  }

  .recipe {
    height: 60px;
    &_actions {
      margin: 0 -5px;
      button, a {
        margin: 0 5px;
        width: 30px;
        height: 30px;

        img {
          width: 15px;
          height: 15px;
        }
      }
    }
    &_checkbox span {
      width: 25px;
      height: 25px;
    }
    &_title {
      font-size: 20px;
    }
  }
}
</style>
