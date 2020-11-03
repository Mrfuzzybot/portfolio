export default {
  mutations: {
    getRecipesFromStorage (state) {
      localStorage.getItem('recipes')
      state.recipes = JSON.parse(localStorage.getItem('recipes')) || []
    },
    addRecipe (state, recipe) {
      recipe.id = Date.now().toString()
      state.recipes.push(recipe)
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
    updateRecipe (state, { id, title, text }) {
      state.recipes = state.recipes.map(r => {
        if (r.id === id) {
          r.title = title
          r.text = text
        }
        return r
      })
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
    removeRecipe (state, id) {
      state.recipes = state.recipes.filter(r => r.id !== id)
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
    removeChosen (state) {
      state.recipes = state.recipes.filter(r => !r.isChosen)
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
    choseRecipe (state, { id, isChosen }) {
      state.recipes = state.recipes.map(r => {
        if (r.id === id) {
          r.isChosen = isChosen
        }
        return r
      })
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
    choseAllRecipes (state) {
      const isChosenAllRecipes = this.getters.isChosenAllRecipes

      state.recipes = state.recipes.map(el => {
        el.isChosen = !isChosenAllRecipes
        return el
      })
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    }
  },
  state: {
    recipes: []
  },
  getters: {
    getRecipes: state => state.recipes,
    getRecipe: state => (id) => state.recipes.find(r => r.id === id),
    isChosenAllRecipes: state => {
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
