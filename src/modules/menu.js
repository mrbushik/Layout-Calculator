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

    menu.addEventListener('click', (e) => {
        if (e.target.classList == 'close-btn') {
            event.preventDefault();
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


};
export default menu;