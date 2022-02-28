const textForm = () => {
    const mainName = document.getElementById('form1-name');
    const mainEmail = document.getElementById('form1-email');
    const mainNumber = document.getElementById('form1-phone');
    const calcInput = document.querySelectorAll('.calc-item');
    const questionFormName = document.getElementById('form2-name');
    const questionFormEmail = document.getElementById('form2-email');
    const questionFormNumber = document.getElementById('form2-phone');
    const questionFormMassage = document.getElementById('form2-message');

    //Первая форма

    mainName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я]/, '');
    });
    mainEmail.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\w\-\@\.\!\~\*\']/gi, '');
    });
    mainNumber.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d\-\(\)]/, '');
    });
    // калькулятор
    calcInput[1].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    });
    calcInput[2].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    });
    calcInput[3].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    });
    // форма с оставшимися вопросами
    questionFormName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    });
    questionFormEmail.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\w\-\@\.\!\~\*\']/gi, '');
    });
    questionFormNumber.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d\-\(\)]/, '');
    });
    questionFormMassage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\а-яА-Я]/, '');
    });
};
export default textForm;