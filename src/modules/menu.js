const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handleMenu = () => {
        //убираем анимацию если разрешение меньше 768 px
        if (document.documentElement.offsetWidth > 768) {
            menu.classList.toggle('active-menu');
        }


    };

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', () => {
        event.preventDefault();
        handleMenu();
    });
    // это перебор кнопок 
    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));

};
export default menu;