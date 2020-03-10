let circle1 = document.querySelector('#circle1');
let circle2 = document.querySelector('#circle2');
let circle3 = document.querySelector('#circle3');
let circle4 = document.querySelector('#circle4');
let circleBox = document.querySelector('#circleBox');


let width = circleBox.offsetWidth - circle1.offsetHeight;
let arrWidth = [0, 1];

let height = circleBox.offsetHeight - circle1.offsetHeight;
let arrHeight = [0, 1];


function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}



let checkboxStatus = document.querySelectorAll('input[type="checkbox"]')
checkboxStatus.forEach((check) => {
    check.addEventListener('click', toChangeStatus);
});


let stop = {
    circles: 1,
    BG: 1,
}


function toChangeStatus(event) {
    let i = event.target.value;
    console.log(i);

    i = +i;

    if (i == 0) {
        stop["circles"] = 1;
        stop["BG"] = 1;


        checkboxStatus.forEach((check) => {
           
            check.checked = false;
        });
       
        return;
        
    }

    if (i < 2) {
        if (stop["circles"] == 1) { stop["circles"] = 0; } else { stop["circles"] = 1; }
        let widthAnim = setInterval(function () {

            if (stop["circles"] == 1) {
                clearInterval(widthAnim);
                return;
            }
            else {
                let arr = arrWidth;
                if (arr[0] >= width) { arr[1] = 0 }
                if (arr[0] <= 0) { arr[1] = 1 }

                circle1.style.left = arr[0] + 'px';
                circle2.style.right = arr[0] + 'px';

                if (arr[1]) { arr[0] += 3; } else { arr[0] -= 3; }
            }

        }, 10);

        let heightAnim = setInterval(function () {

            if (stop["circles"] == 1) {
                clearInterval(heightAnim);
                return;
            }
            else {
                let arr = arrHeight;
                if (arr[0] >= height) { arr[1] = 0 }
                if (arr[0] <= 0) { arr[1] = 1 }

                circle3.style.top = arr[0] + 'px';
                circle4.style.bottom = arr[0] + 'px';

                if (arr[1]) { arr[0] += 3; } else { arr[0] -= 3; }
            }
        }, 10);
    }

    if (i == 2) {

        if (stop["BG"] == 1) { stop["BG"] = 0; } else { stop["BG"] = 1; }
        let BGChange = setInterval(function () {
            if (stop["BG"] == 1) {
                clearInterval(BGChange);
                return;
            }
            circleBox.style.background = randColor();
        }, 500);
    }
}
