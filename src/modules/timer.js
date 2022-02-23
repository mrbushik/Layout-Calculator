const timer = (deadline) => {
    let idInterval;
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const zeroFormat = function (x) {
        if (x < 10) {
            x = '0' + x;
        }
        return x;
    };
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor((timeRemaining / 60 / 60));
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
        return {
            hours,
            minutes,
            seconds,
            timeRemaining,
        };
    };
    const updateClock = () => {
        let getTime = getTimeRemaining();
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;
        if (getTime.timeRemaining < 0) {
            timerHours.textContent = '00';
            timerHours.style.color = 'red';
            timerMinutes.textContent = '00';
            timerMinutes.style.color = 'red';
            timerSeconds.textContent = '00';
            timerSeconds.style.color = 'red';


        } else if (getTime.timeRemaining > 0) {
            timerHours.textContent = zeroFormat(getTime.hours);
            timerMinutes.textContent = zeroFormat(getTime.minutes);
            timerSeconds.textContent = zeroFormat(getTime.seconds);
        }


    };
    const interval = () => {
        let intervalId;
        let getTime = getTimeRemaining();
        updateClock();
        if (getTime.timeRemaining > 0) {
            intervalId = setInterval(updateClock, 1000);

        } else {
            clearInterval(intervalId);
        }
    };
    interval();


};
export default timer;