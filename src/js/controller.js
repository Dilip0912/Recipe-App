// console.log("Test");
// console.log("acsdvcyl");

const showRecipe = async function () {
  try {
    const res = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
    );
    const data=await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`);
    console.log(res);
    console.log(data);
  } catch(err) {
        alert(err);
  }
};
showRecipe();
