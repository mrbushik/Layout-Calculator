 'use strict';
 export const sendForm = ({
     formId,
     someElem = []
 }) => {
     const nameInput = document.getElementById(formId + '-name');
     const phoneInput = document.getElementById(formId + '-phone');
     const form = document.getElementById(formId);

     const statusBlock = document.createElement('div');
     statusBlock.className = 'statusBlock';
     statusBlock.style.color = 'white';

     const loadText = 'загрузка...';
     const errorText = 'Ошибка...';
     const successText = 'Спасибо, наш менеджер с вами свяжется';
     const deleteStatusBlock = () => {
         statusBlock.textContent = '';
     };

     const validate = (list) => {
         nameInput.value.trim();
         let success = true;
         list.forEach((input) => {
             //   if (!input.classList.contains('success')) {
             if (input.value.trim() === '') {
                 success = false;
                 //проверка на буквы в имени

             } else if (nameInput.value.length < 2) {
                 success = false;

                 //проверка на количество цифр в номере
             } else if (phoneInput.value.length < 4 || phoneInput.value.length > 16) {
                 success = false;
             }
         });
         return success;
     };

     const sendData = (data) => {
         return fetch(' https://jsonplaceholder.typicode.com/posts', {
             method: 'POST',
             body: JSON.stringify(data),
             headers: {
                 'Content-Type': 'application/json'
             }
         }).then(res => res.json());
     };

     const submitForm = () => {

         //  console.log(nameInput.value);
         statusBlock.textContent = loadText;
         form.append(statusBlock);
         const formDate = new FormData(form);
         const formBody = {};
         const formElements = form.querySelectorAll('input');

         formDate.forEach((val, key) => {
             formBody[key] = val;
         });
         someElem.forEach((elem) => {
             const element = document.getElementById(elem.id);
             if (element.textContent === '0') {

             } else {
                 if (elem.type === 'block') {
                     formBody[elem.id] = element.textContent;
                 } else if (elem.type === 'input') {
                     formBody[elem.id] = element.value;
                 }
             }

         });

         if (validate(formElements)) {
             sendData(formBody)
                 .then(data => {
                     console.log(data);
                     statusBlock.textContent = successText;
                     setTimeout(deleteStatusBlock, 3000);
                     formElements.forEach(input => {
                         input.value = '';
                     });
                 })
                 .catch(error => {
                     statusBlock.textContent = errorText;
                 });
         } else {
             statusBlock.textContent = errorText;
             setTimeout(deleteStatusBlock, 3000);
             alert('заполните все формы');

         }
     };
     try {
         if (!form) {
             throw new Error('добавьте элемент');
         }
         form.addEventListener('submit', (e) => {
             e.preventDefault();
             submitForm();

         });
     } catch (error) {
         console.log(error.message);
     }
 };