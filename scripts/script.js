let circle1 = document.querySelector('#circle1');
let circle2 = document.querySelector('#circle2');
let circle3 = document.querySelector('#circle3');
let circle4 = document.querySelector('#circle4');
let circleBox = document.querySelector('#circleBox');


let width = document.body.clientWidth - circle1.offsetWidth;
let arrWidth = [0, 1];

let height = document.body.clientHeight - circle1.offsetHeight;
let arrHeight = [0, 1];

circleBox.style.height = height - circle1.offsetWidth;



function parallaxEffectWidth(circle1, circle2, width, arr) {

    if (arr[0] >= width) { arr[1] = 0 }
    if (arr[0] <= 0) { arr[1] = 1 }

    circle1.style.left = arr[0] + 'px';
    circle2.style.right = arr[0] + 'px';

    if (arr[1]) { arr[0] += 3; } else { arr[0] -= 3; }

}


function parallaxEffectHeight(circle3, circle4, height, arr) {

    if (arr[0] >= height) { arr[1] = 0 }
    if (arr[0] <= 0) { arr[1] = 1 }

    circle3.style.top = arr[0] + 'px';
    circle4.style.bottom = arr[0] + 'px';

    if (arr[1]) { arr[0] += 3; } else { arr[0] -= 3; }

}

function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function BGChange(circleBox) {

    circleBox.style.background = randColor();
}



let changeStatus = document
    .querySelector('#changeStatus');

changeStatus
    .addEventListener('input', toChangeStatus)


function toChangeStatus(event) {
    event.preventDefault();
    let i = changeStatus.value;
    console.log(i);
    if (i == 0) {
        return;
    };
    if (i > 0) {
        if (i == 1 || i == 3) {
            let startParallaxEffectWidth =
                setInterval(parallaxEffectWidth, 0, circle1, circle2, width, arrWidth);

            let startParallaxEffectHeight =
                setInterval(parallaxEffectHeight, 0, circle3, circle4, height, arrHeight);
        }
        if (i == 2 || i == 3) {
            let startScreenBGChange =
                setInterval(BGChange, 1500, circleBox);
        }
    }
}