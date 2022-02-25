const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn');
    const modal = document.querySelector('.popup');
    const closeBtn = modal.querySelector('.popup-close');
    const content = modal.querySelector('.popup-content');
    const menu = document.querySelector('.menu');


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            let count = 0;
            let idInterval;

            content.style.top = '0%';
            const anim = () => {

                if (document.documentElement.offsetWidth < 768) {
                    modal.style.display = 'block';
                } else {
                    count++;
                    idInterval = requestAnimationFrame(anim);

                    if (count <= 20) {
                        modal.style.display = 'block';
                        content.style.top = count * 0.8 + '%';
                    } else {
                        cancelAnimationFrame(idInterval);
                    }
                }
            };

            anim();
        });
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';

    });

};
export default modal;