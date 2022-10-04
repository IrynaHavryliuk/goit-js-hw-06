const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// let ulList = document.getElementById("ingredients");
// const foodIngredients = ingredients.map(ingredient => {
//   let items = document.createElement("li");
//   items.classList.add('item');
//   items.textContent = ingredient.ingredients;
//   ulList.append(items);
//   foodIngredients.append(...items);
//   return items;
// });
// console.log(foodIngredients);
// ulList.append(ingredients);

// foodIngredients.append(...ingredients);
// return foodIngredients;

// const foodIngredientsOptions = options => {
//   return options.map(option => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent = option.ingredients;
//     return itemEl;
//   });
// };
// const elements = foodIngredientsOptions(foodIngredients);
// foodIngredients.append(...ingredients);
// let ulList = document.getElementById('ingredients');
// // console.log(foodIngredients);
// const foodIngredientsEl = document.querySelectorAll('ul');
// const elements = foodIngredientsOptions.map(option => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = option.ingredients;
//   return itemEl;
// });
// console.log(elements);

// foodIngredientsEl.append(...elements);
// const ulList = document.querySelector('ul')

// for (let ingredient of ingredients) {
//   const items = document.createElement('li');
//   items.textContent = ingredient;
//   items.classList.add('item');
//   ulList.append(items);
//   // document.append(liEl);
//   console.log(items);
// }

const ulList = document.querySelector('ul');
const items = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});

ulList.append(...items);