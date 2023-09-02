var main = document.querySelector('#main');
var crsr = document.querySelector('.cursor');

main.addEventListener("mousemove", function (dets) {
    // dets have the mouseEvent which is an object with deatils of multiple properties; one of that properties is x and y they tell how much you move your ccursor on the x and y axis respectively; on top left corner both have a value of 0 .
    crsr.style.left = dets.x + 'px'
    crsr.style.top = dets.y + 'px'
})