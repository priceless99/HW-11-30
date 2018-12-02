let TS = 60;


class timer {

    constructor() {

    }

    myTimer() {

        let countdown = setInterval( () => {
            let btn = document.getElementById('times');
            document.getElementById('times').innerText = 'Countdown ' + TS;
            TS--;

            // // set to negative one  because alert usually executes on the 1 sec mark,
            // while my countdown on page still shows 2 seconds
            if (TS == -1) {
                clearTimeout(countdown);
                this.alert();

            }
        }, 1000);

    } 

    alert() {
        alert('Times Up!!!');
    
    }
}

let clock = new timer();
