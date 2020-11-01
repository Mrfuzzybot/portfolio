<template>
  <div class="home">
    <div class="container">
      <h1>All recipes</h1>

      <div class="recipes">
        <div class="recipes_actions">
          <label for="all_cbx" class="recipe_checkbox">
            <input type="checkbox" id="all_cbx">
            <span></span>
          </label>
          <a href="#" class="recipes_add">
            <img src="../assets/img/icons/plus.svg" alt="">
          </a>
          <div class="recipe_actions">
            <button>
              <img src="../assets/img/icons/delete.svg" alt="">
            </button>
          </div>
        </div>

        <div class="recipe">
          <label for="cbx1" class="recipe_checkbox">
            <input type="checkbox" id="cbx1">
            <span></span>
          </label>
          <a href="#" class="recipe_title">Рецепт 1</a>
          <div class="recipe_actions">
            <button>
              <img src="../assets/img/icons/edit.svg" alt="">
            </button>
            <button>
              <img src="../assets/img/icons/delete.svg" alt="">
            </button>
          </div>
        </div>

        <div class="recipe">
          <label for="cbx2" class="recipe_checkbox">
            <input type="checkbox" id="cbx2">
            <span></span>
          </label>
          <a href="#" class="recipe_title">Рецепт 2</a>
          <div class="recipe_actions">
            <button>
              <img src="../assets/img/icons/edit.svg" alt="">
            </button>
            <button>
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
  name: 'Home'
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
    border-radius: 10px;
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
    img {
      width: 30px;
      height: 30px;
    }
  }
}

.recipe {
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 20px;
  margin-bottom: 10px;

  &_checkbox {
    margin-right: 10px;
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
    }
  }

  &_title {
    font-size: 28px;
    margin-right: auto;
    text-decoration: none;
    color: #000;
  }

  &_actions {
    display: flex;
    align-items: center;
    margin: 0 -10px;
    button {
      margin: 0 10px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border-radius: 5px;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
