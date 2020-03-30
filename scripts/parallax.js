let ciri = first_parallax.querySelector("#parallax-ciri");
let parallaxBackground = first_parallax.querySelector("#parallax-background");
let maxMove = first_parallax.offsetWidth / 30;
let ciriCenterX = ciri.offsetLeft + (ciri.offsetWidth / 2);
let ciriCenterY = ciri.offsetTop + (ciri.offsetHeight / 2);

function getMousePos(xRef, yRef) {
    let panelRect = first_parallax.getBoundingClientRect();
    return {
        x: Math.floor(xRef - panelRect.left) /
            (panelRect.right - panelRect.left) * first_parallax.offsetWidth,
        y: Math.floor(yRef - panelRect.top) /
            (panelRect.bottom - panelRect.top) * first_parallax.offsetHeight
    };
}

parallax_div.addEventListener("mousemove", function (e) {
    if (e.tagName="parallax_div") {
        let mousePos = getMousePos(e.clientX, e.clientY),
            distX = mousePos.x - ciriCenterX,
            distY = mousePos.y - ciriCenterY;
        if (Math.abs(distX) < 500 && distY < 200) {
            ciri.style.transform =
                "translate(" + (-1 * distX) / 12 + "px," + (-1 * distY) / 12 + "px)";
            parallaxBackground.style.backgroundPosition =
                `calc(50% + ${distX / 50}px) calc(50% + ${distY / 50}px)`;
        }
    }
})

function paralax1_mouse (e){

}