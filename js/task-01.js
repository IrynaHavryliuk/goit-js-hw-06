"use strict";

// const totalCategories = document.querySelectorAll(".item");
// console.log(`В списке ${totalCategories.length} категории.`);

// const categoriesArray = [...totalCategories]
//   .map(
//     categories => `Категория: ${categories.children[0].textContent}
// Количество элементов: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);

const categories = document.querySelectorAll('.item');
console.log(' ');
console.log(`Number of categories: ${categories.length}`);
console.log(' ');
categories.forEach(category => {
    const group = [...category.children];
    group.forEach(element => {
        if (element.tagName === 'H2') {
            console.log(`Elements: ${element.textContent}`);
        }
    });
    group.forEach(element => {
        if (element.tagName === 'UL') {
            console.log(`Elements: ${element.children.length}`);
        }
    });
    console.log(' ');
});



