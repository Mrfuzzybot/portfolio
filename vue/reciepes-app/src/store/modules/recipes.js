export default {
  mutations: {
    setRecipes (state, recipes) {
      state.recipes = recipes
    },
    addRecipe (state, recipe) {
      recipe.id = Date.now()
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
      { title: 'Рецепт 1', id: 'a', isChosen: false },
      { title: 'Рецепт 2', id: 'b', isChosen: false },
      { title: 'Рецепт 3', id: 'c', isChosen: false }
    ],
    isChosenAllRecipes: false
  },
  getters: {
    getRecipes: state => state.recipes,
    getRecipe: (state, id) => state.find(r => r.id === id),
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
