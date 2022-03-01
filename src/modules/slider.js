const slider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');
    // const dots = document.querySelectorAll('.dot');
    const dotsList = document.querySelector('.portfolio-dots');
    const sliderItem = document.querySelectorAll('.portfolio-item');
    console.log(sliderItem.length);

    let currentSlide = 0;
    let interval;
    const timeInterval = 2000;
    let quantityDots = sliderItem.length;
    console.log(quantityDots);
    while (quantityDots) {
        const dots = document.createElement('li');
        dots.classList.add('dot');
        dotsList.prepend(dots);
        quantityDots--;
    }
    // const createDots = () => {
    //     let dots = document.createElement('li');
    //     dots.classList.add('dot');
    //     dotsList.prepend(dots);
    //     dots = sliderItem.length;
    // };

    const pervSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };


    const autoSlide = () => {
        pervSlide(slides, currentSlide, 'portfolio-item-active');
        pervSlide(dots, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };


    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };


    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }
        pervSlide(slides, currentSlide, 'portfolio-item-active');
        pervSlide(dots, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });


    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    // createDots();
    startSlide(timeInterval);
};
export default slider;