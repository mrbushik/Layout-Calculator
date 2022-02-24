const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    let count = 0;
    let idInterval;
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            modal.style.display = 'block';
            modal.classList.toggle('active-menu')
            modalAnimation();

        });
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    // const modalAnimation = () => {
    //     count++;
    //     idInterval = requestAnimationFrame();
    //     if (count < 200) {
    //         modal.style.left = count + 'px';
    //     } else {
    //         cancelAnimationFrame(idInterval);
    //     }

    // };



    const modalAnimation = () => {
        count++

        let test = setTimeout(modalAnimation, 10);
        modal.style.transform = ('translateX ' + count + 'px');

    };
};
export default modal;