
// const changeColorBtn = document.querySelector('.change-color');
// const nameOfColor = document.querySelector('.color');
// const body = document.querySelector('body');


// nameOfColor.textContent = getRandomHexColor('click') => {
//   const bodyStyle = body.style.backgroundColor;
// };
// // changeColorBtn.addEventListener('click', getRandomHexColor);
// body.style.backgroundColor = nameOfColor.textContent;


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// 
// function changeColor('click', colorValue) {
//     document.body.style.background = document.getElementById(colorValue).dataset.color;
// }
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const changeColorBtn = document.querySelector('.change-color');
// function generateRandomColor()
// {
//     const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//     return randomColor;
//     // The random color will be freshly served
// }
// document.body.style.backgroundColor = generateRandomColor();
// // changeColorBtn.addEventListener("click", generateRandomColor);
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const refs = {
//   button: document.querySelector('.change-color'),
//   span: document.querySelector('.color'),
// };

// refs.button.addEventListener('click', onChangeColor);

// function onChangeColor(event) {
//   console.log(getRandomHexColor());
//   document.body.style.backgroundColor = getRandomHexColor();
//   refs.span.textContent = getRandomHexColor();
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

refs.button.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.span.textContent = color;
}