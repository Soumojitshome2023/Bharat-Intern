
function progressvalue(value, pgindex) {
    let circularProgress = document.querySelectorAll(".circular-progress")[pgindex];
    let progressValue = document.querySelectorAll(".progress-value")[pgindex];


    let progressStartValue = 0,
        progressEndValue = value,
        speed = 100;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`
        circularProgress.style.background = `conic-gradient(#8300cf ${progressStartValue * 3.6}deg, #ededed 0deg)`

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);

}

progressvalue(60, 0);
progressvalue(40, 1);
progressvalue(30, 2);
progressvalue(80, 3);
progressvalue(30, 4);
progressvalue(70, 5);
progressvalue(30, 6);
progressvalue(20, 7);