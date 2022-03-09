import {
    animate
} from "./helper";
const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const header = document.querySelector('header');
    menu.style.opacity = 0;

    const handleMenu = () => {
        //убираем анимацию если разрешение меньше 768 px
        if (document.documentElement.offsetWidth > 768) {
            menu.classList.toggle('active-menu');
        }


    };
    // как я понял что делегирование вешать  только на одну кнопку меню это плохо
    // но по заданию сказано сделать делегированние поэтору реализовал это 
    header.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            handleMenu();
        }
    });

    //обычний обработчик для открытия меню
    // menuBtn.addEventListener('click', handleMenu);

    menu.addEventListener('click', (e) => {
        if (e.target.classList == 'close-btn') {
            e.preventDefault();
            handleMenu();
        }
        menuItems.forEach((menuItem) => {
            if (e.target === menuItem) {
                handleMenu();
            } else if (e.target.classList === 'close-btn') {
                handleMenu();
            }
        });

    });

    animate({
        duration: 10000,
        timing(timeFraction) {
            return timeFraction;
        },
        draw(progress) {
            menu.style.opacity = progress;
        }
    });
};
export default menu;