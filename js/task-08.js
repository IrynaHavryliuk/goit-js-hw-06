// console.log(navigator.userAgent);
// if (navigator.userAgent.includes("Chrome")) {
//     console.log("Brauser Chrom");
// }
// else if (navigator.userAgent.includes("Firefox")) {
//     console.log("Brauser Firefox");
// }

// console.log(navigator.platform);

// history.back();
// history.forward();

// console.log(location.href);
// alert("Hello!");
const loginForm = document.querySelector('.login-form');
const doneSubmit = event => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === '') {
        if (password.value === '') {
            alert('Ошибка! Поля Email и Password не заполнены!');
        } else {
            alert('Ошибка! Поле Email не заполнено!');
        }
    } else {
        if (password.value === '') {
            alert('Ошибка! Поле Password не заполнено!');
        } else {
            const loginFields = { email: email.value, password: password.value };
            console.log(loginFields);
        }
    };
    event.currentTarget.reset();
};
loginForm.addEventListener('submit', doneSubmit);