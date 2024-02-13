const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const xyBlack = [
    [140, 270],
    [160, 250],
    [180, 230],
    [200, 210],
    [220, 190],
    [240, 170],
    [260, 150],
    [280, 130],
    [260, 110],
    [240, 90],
    [220, 70],
    [200, 50],
    [180, 70],
    [160, 90],
    [140, 110],
    [120, 90],
    [100, 70],
    [80, 50],
    [60, 70],
    [40, 90],
    [20, 110],
    [0, 130],
    [20, 150],
    [40, 170],
    [60, 190],
    [80, 210],
    [100, 230],
    [120, 250],
];

const xyRedOne = [
    [140, 250],
    [160, 230],
    [180, 210],
    [200, 190],
    [220, 170],
    [240, 150],
    [260, 130],
    [240, 110],
    [220, 90],
    [200, 70],
    [180, 90],
    [160, 110],
    [140, 130],
    [120, 110],
    [100, 90],
    [80, 70],
    [60, 90],
    [40, 110],
    [20, 130],
    [40, 150],
    [60, 170],
    [80, 190],
    [100, 210],
    [120, 230],
];

const xyRedTwo = [
    [140, 230],
    [160, 210],
    [180, 190],
    [200, 170],
    [220, 150],
    [240, 130],
    [220, 110],
    [200, 90],
    [180, 110],
    [160, 130],
    [140, 150],
    [120, 130],
    [100, 110],
    [80, 90],
    [60, 110],
    [40, 130],
    [60, 150],
    [80, 170],
    [100, 190],
    [120, 210],
];

const xyRedThree = [
    [140, 210],
    [160, 190],
    [180, 170],
    [200, 150],
    [220, 130],
    [200, 110],
    [180, 130],
    [160, 150],
    [140, 170],
    [120, 150],
    [100, 130],
    [80, 110],
    [60, 130],
    [80, 150],
    [100, 170],
    [120, 190],
];

const xyRedFour = [
    [140, 190],
    [160, 170],
    [180, 150],
    [200, 130],
    [80, 130],
    [100, 150],
    [120, 170],
];

const wh = [20, 20];

function animation() {
    drawHeartBlack();
}

animation();

function drawHeartBlack() {
    let i = 0;
    ctx.fillStyle = "rgb(0,0,0)";

    let id = setInterval(() => {
        ctx.fillRect(...xyBlack[i], ...wh);
        i++;
        if (i == xyBlack.length) {
            drawHeartRedOne();
            clearInterval(id);
        } 
    }, 60);
}

function drawHeartRedOne() {
    let i = 0;
    ctx.fillStyle = "rgb(110, 2, 2)";

    let id = setInterval(() => {
        ctx.fillRect(...xyRedOne[i], ...wh);
        i++;
        if (i == xyRedOne.length) {
            drawHeartRedTwo();
            clearInterval(id);
        } 
    }, 60);
}

function drawHeartRedTwo() {
    let i = 0;
    ctx.fillStyle = "rgb(146, 2, 2)";

    let id = setInterval(() => {
        ctx.fillRect(...xyRedTwo[i], ...wh);
        i++;
        if (i == xyRedTwo.length) {
            drawHeartRedThree();
            clearInterval(id);
        } 
    }, 60);
}

function drawHeartRedThree() {
    let i = 0;
    ctx.fillStyle = "rgb(172, 2, 2)";

    let id = setInterval(() => {
        ctx.fillRect(...xyRedThree[i], ...wh);
        i++;
        if (i == xyRedThree.length) {
            drawHeartRedFour();
            clearInterval(id);
        } 
    }, 60);
}

function drawHeartRedFour() {
    let i = 0;
    ctx.fillStyle = "rgb(188, 2, 2)";

    let id = setInterval(() => {
        ctx.fillRect(...xyRedFour[i], ...wh);
        i++;
        if (i == xyRedFour.length) {

            clearInterval(id);
        } 
    }, 60);
}