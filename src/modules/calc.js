import {
    animate
} from "./helper";
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');
    const calcTypeOne = calcType.querySelector('option');
    total.style.opacity = 0;

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        //расчет по дням
        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;

        }
        //расчет по комнатам
        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }
        if (calcSquare.value && calcSquare.value) {
            totalValue = price * calcSquareValue * calcTypeValue * calcCountValue * calcDayValue;

        } else {
            totalValue = 0;
        }
        total.textContent = totalValue;
    };
    calcBlock.addEventListener('input', (e) => {
        // countCalc();
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc();
            animate({
                duration: 1000,
                timing(x, timeFraction) {
                    return timeFraction;
                },
                draw(progress) {

                    total.style.opacity = progress;

                }

            });
        }
    });
    calcTypeOne.addEventListener('click', () => {
        calcSquare.value = '';
        calcCount.value = '';
        calcDay.value = '';
        total.textContent = 0;
    });

};
export default calc;