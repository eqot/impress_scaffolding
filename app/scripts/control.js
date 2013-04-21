(function() {

    var State = {
        STOP: 0,
        START: 1,
        PAUSE: 2
    };
    var state = State.STOP;

    var startTime = null;
    var time = $('#time');
    var timer = null;

    $(document).ready(function() {
        console.log('ok');

        $('#time').click(activateTimer);
        $('#time').dblclick(resetTimer);
    });

    function activateTimer() {
        // console.log('timer');

        if (state === State.STOP) {
            startTimer();
            state = State.START;
        } else if (state === State.PAUSE) {
            resumeTimer();
            state = State.START;
        } else {
            pauseTimer();
            state = State.PAUSE;
        }
    };

    function startTimer() {
        // console.log('startTimer');

        startTime = Date.now();
        resumeTimer();
    };

    function resumeTimer() {
        // console.log('resumeTimer');

        timer = setInterval(function() {
            time = Math.floor((Date.now() - startTime) / 1000);
            showTimer(time);
        }, 1000);
    };

    function pauseTimer() {
        // console.log('pauseTimer');

        clearInterval(timer);
    };

    function resetTimer() {
        // console.log('resetTimer');

        pauseTimer();
        showTimer(0);
        state = State.STOP;
    };

    function showTimer(time) {
        // console.log('showTimer');
        // console.log(time);

        var min = Math.floor(time / 60);
        var sec = time % 60;
        var timeStr = (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
        // console.log(timeStr);
        $('#time').text(timeStr);
    };

})();
