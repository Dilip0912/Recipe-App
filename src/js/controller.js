import * as model from './model.js'
import recipeView from "./view/recipeView.js";

import 'core-js/stable';
import 'regenerator-runtime/runtime';
const recipeContainer=document.querySelector(".recipe");



const controlRecipe = async function () {
  try {

    const id=window.location.hash.slice(1);   //Hash is the id in website url.

    if(!id) return;
    recipeView.renderSpinner();

    //1.Loading recipe
    await model.loadRecipe(id)
    // const {recipe}=model.state;

    //2.Redndering recipe
    recipeView.render(model.state.recipe);

  } catch(err) {
        // console.log(err);
        recipeView.renderError();
  }
};
// showRecipe();

const init=function(){
  recipeView.addHandlerRender(controlRecipe);
}
init();
// window.addEventListener("hashchange",showRecipe);
// window.addEventListener("load",showRecipe);