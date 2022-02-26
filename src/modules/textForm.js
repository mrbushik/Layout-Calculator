const textForm = () => {
    // const formOne = document.getElementById('form1');
    const mainName = document.getElementById('form1-name');
    const mainEmail = document.getElementById('form1-email');
    const mainNumber = document.getElementById('form1-phone');
    const calcInput = document.querySelectorAll('.calc-item')
    console.log(calcInput)
    // formOne.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     let isError = false;
    //     if (!/[^а-яА-Я]/g.test(mainName.value) && mainName.value !== '') {
    //         alert('Только кирилица good');
    //     } else {
    //         isError = true;
    //     }
    //     if(!//g.test(mainEmail))
    //     if (!isError) {
    //         alert('данные отправленны');
    //     }
    // });

    mainName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я]/, '');
    });

    mainEmail.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[\-\.\w]+@([\w]+\.)+[\w]+/gi, '')
    });
    mainNumber.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[\D\^-]/, '');
    });
    calcInput[1].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    });
    calcInput[2].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    });
    calcInput[3].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d]/, '');
    });
    // mainEmail.addEventListener('input', (e) => {
    //     e.target.value = e.target.value.replace(/[\-\.\w]+@([\w]+\.)+[\w]+/gi, '')
    // });

};
export default textForm;