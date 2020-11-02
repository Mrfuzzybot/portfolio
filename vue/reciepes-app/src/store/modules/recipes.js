export default {
  mutations: {
    setRecipes (state, recipes) {
      state.recipes = recipes
    },
    addRecipe (state, recipe) {
      recipe.id = Date.now().toString()
      state.recipes.push(recipe)
    },
    removeRecipe (state, id) {
      state.recipes = state.recipes.filter(r => r.id !== id)
    },
    removeChosen (state) {
      state.recipes = state.recipes.filter(r => !r.isChosen)
    },
    choseRecipe (state, { id, isChosen }) {
      state.recipes = state.recipes.map(r => {
        if (r.id === id) {
          r.isChosen = isChosen
        }
        return r
      })
    },
    choseAllRecipes (state) {
      // Было бы неплохо сделать computed свойство isChosenAllRecipes
      let isChosenAllRecipes = true

      if (state.recipes.length > 0) {
        state.recipes.forEach(r => {
          if (!r.isChosen) {
            isChosenAllRecipes = false
          }
        })
      } else {
        isChosenAllRecipes = false
      }

      state.recipes = state.recipes.map(el => {
        el.isChosen = !isChosenAllRecipes
        return el
      })
    }
  },
  state: {
    recipes: [
      { title: 'Рецепт 1', id: 'a', text: 'Lorem lorem lorem. Lorem lorem lorem lorem lorem. Lorem lorem lorem', isChosen: false },
      { title: 'Рецепт 2', id: 'b', text: 'Lorem lorem lorem. Lorem lorem lorem lorem lorem. Lorem lorem lorem', isChosen: false },
      { title: 'Рецепт 3', id: 'c', text: 'Lorem lorem lorem. Lorem lorem lorem lorem lorem. Lorem lorem lorem', isChosen: false }
    ]
  },
  getters: {
    getRecipes: state => state.recipes,
    isChosenAllRecipes: (state) => {
      let isChosenAllRecipes = true

      if (state.recipes.length > 0) {
        state.recipes.forEach(r => {
          if (!r.isChosen) {
            isChosenAllRecipes = false
          }
        })
      } else {
        isChosenAllRecipes = false
      }

      return isChosenAllRecipes
    }
  }
}
