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
    if (e.tagName = "parallax_div") {
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


/* ROCKET PARALLAX*/

secPar = document.querySelector('.second_parallax');
window.addEventListener('scroll', function (event){
    console.log(window.pageYOffset);
    console.log(secPar.getBoundingClientRect().top);
    console.log(this.pageYOffset);
    console.log(`----`);

   
        let layers = document.querySelectorAll('.parallax__layer');
        let top = this.pageYOffset;
        let speed, yPos;
        layers.forEach(function(layer){
            speed = layer.getAttribute("data-speed")
            yPos = -(top * speed / 100);
            layer.setAttribute('style','transform: translate3d(0px, ' + yPos + 'px, 0px)')
        })

    
});

