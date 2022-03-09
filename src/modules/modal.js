import {
    animate
} from "./helper";
const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    const content = modal.querySelector('.popup-content');
    const menu = document.querySelector('.menu');


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            animate({
                duration: 500,
                timing(x, timeFraction) {
                    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
                },
                draw(progress) {
                    modal.style.display = 'block';
                    content.style.top = progress * 25 + '%';
                }
            });

        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });

};
export default modal;