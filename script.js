// 1. Вариант простой
// document.getElementById('orderForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     // Validation
//     if (!name) {
//         alert('Please enter your name!');
//         return;
//     }
//     if (!phone) {
//         alert('Please enter your phone!');
//         return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//         alert('Please enter phone 10 letters!');
//         return;
//     }
//     if (!address) {
//         alert('Please enter your address!');
//         return;
//     }
//     alert(`Thank you for order, ${name}!\nYour order will be to address: ${address}.\nYour phone ${phone}`);
// });

// 2. Второй способ
// const form = document.getElementById('orderForm');
// function validationForm(event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     // Validation
//     if (!name) {
//         alert('Please enter your name!');
//         return;
//     }
//     if (!phone) {
//         alert('Please enter your phone!');
//         return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//         alert('Please enter phone 10 letters!');
//         return;
//     }
//     if (!address) {
//         alert('Please enter your address!');
//         return;
//     }
//     alert(`Thank you for order, ${name}!\nYour order will be to address: ${address}.\nYour phone ${phone}`);
// };
// form.addEventListener('submit', validationForm);

// 3. Третий способ
// const form = document.querySelector('form');
// function validationForm(event) {
//     event.preventDefault();
//     const name = form[0].value.trim();
//     const phone = form[1].value.trim();
//     const address = form[2].value.trim();
//     // Validation
//     if (!name) {
//         alert('Please enter your name!');
//         return;
//     }
//     if (!phone) {
//         alert('Please enter your phone!');
//         return;
//     }
//     if (!/^\d{10}$/.test(phone)) {
//         alert('Please enter phone 10 letters!');
//         return;
//     }
//     if (!address) {
//         alert('Please enter your address!');
//         return;
//     }
//     const order = {
//         name: name,
//         phone: phone,
//         address: address,
//     };
//     console.log(order);
//     alert(`Thank you for order, ${name}!\nYour order will be to address: ${address}.\nYour phone ${phone}`);
//     form.reset();
// };
// form.addEventListener('submit', validationForm);

// Validation message
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const addressError = document.getElementById('addressError');

// Показ ошибок
function showError(input, errorElement, message) {
    input.classList.add('error');
    input.classList.remove('valid');
    errorElement.textContent = message;
    errorElement.classList.add('active');
}

// Сброс ошибок
function clearError(input, errorElement) {
    input.classList.remove('error');
    input.classList.add('valid');
    errorElement.textContent = '';
    errorElement.classList.remove('active');
}

const form = document.querySelector('form');
function validationForm(event) {
    event.preventDefault();
    const name = form[0].value.trim();
    const phone = form[1].value.trim();
    const address = form[2].value.trim();
    let hasError = false;
    // Validation
    if (!name) {
        showError(form['name'], nameError, 'Please enter your name!');
        hasError = true;
    } else {
        clearError(form['name'], nameError);
    }
    // validateName()
    if (!phone) {
        showError(form['phone'], phoneError, 'Please enter your phone!');
        hasError = true;
    } else if (!/^\d{10}$/.test(phone)) {
        showError(form['phone'], phoneError, 'Please enter 10 digit numbers!');
        hasError = true;
    } else {
        clearError(form['phone'], phoneError);
    }
    if (!address) {
        showError(form['address'], addressError, 'Please enter your address!');
        hasError = true;
    } else {
        clearError(form['address'], addressError);
    }
    // Если все поля заполнены корректно
    if (hasError) return;
    const order = {
        name: name,
        phone: phone,
        address: address,
    };
    console.log(order);
    alert(`Thank you for order, ${name}!\nYour order will be to address: ${address}.\nYour phone ${phone}`);
    form.reset();
    form.querySelectorAll('input').forEach(input => {
        input.classList.remove('valid');
    });
};
form.addEventListener('submit', validationForm);

