window.onload = function() {

    var countdown = document.getElementById("countdown");
    var btn = document.getElementById("start");
    var counting = false;

    function start(count) {
        //console.log(counting);
        if (!counting) {
            counting = true;
            countdown.innerHTML = count;
            var timer = setInterval(function() {
                if (count >= 0) {
                    countdown.innerHTML = count;
                    count--;
                } else {
                    clearInterval(timer);
                    count = arguments[0];
                    counting = false;
                }
            }, 1000);
        }
    }

    btn.onclick = function() {
        start(5);
    };

};