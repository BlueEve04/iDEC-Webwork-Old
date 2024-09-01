const canvas_earth = document.getElementById('gifCanvas_earth');
const ctx = canvas_earth.getContext('2d');

const frames = [];
const totalFrames = 87; // 假设GIF有87帧
for (let i = 0; i < totalFrames; i++) {
    const img = new Image();
    img.src = `frames/${i}.png`; // 假设每帧图像文件命名为 0.png, 1.png...
    frames.push(img);
}

let currentFrame = 0; // 当前动画帧
let positionX = 0; // 初始水平位置
let positionY = 0; // 初始垂直位置
let canChangeAnime = false;
let stopstatus = false;

function drawFrame(frameIndex) {
    ctx.clearRect(0, 0, canvas_earth.width, canvas_earth.height);
    ctx.drawImage(frames[frameIndex], 0, 0, canvas_earth.width, canvas_earth.height);
}

function updateCanvasPosition(scrollPositionY) {
    let transformValue = 'translate(0%, 0%)';
    if(scrollPositionY >= 200){
        canChangeAnime=true
    }
    if (scrollPositionY >= 1000) {
        transformValue = 'translate(120%,85%)';
        console.log('Moved to position 1');
    }
    if (scrollPositionY >= 1500) {
        transformValue = 'translate(0%, 150%)';
        console.log('Moved to position 2');
    }
    
    canvas_earth.style.transform = transformValue;
}

function isElementInCenter(elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('Element not found');
        return false;
    }

    const rect = element.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const elementCenterY = rect.top + rect.height / 2;
    const tolerance = 200;

    return Math.abs(elementCenterY - windowHeight / 2) < tolerance;
}

window.addEventListener('scroll', function() {
    let scrollPositionY = window.scrollY || window.pageYOffset;
    updateCanvasPosition(scrollPositionY);
});

window.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (isElementInCenter('gifCanvas_earth') && !stopstatus) {
        canChangeAnime = true;
    }

    if (canChangeAnime) {
        let speedLevel = 5;
        let moveSpeedX = 30;

        if (event.deltaY < 0) {
            currentFrame = (currentFrame - speedLevel >= 0) ? Math.floor(currentFrame - speedLevel) : 0;
        }
        if (event.deltaY > 0) {
            currentFrame = (currentFrame + speedLevel < totalFrames) ? Math.floor(currentFrame + speedLevel) : totalFrames - 1;
        }

        // Apply changes
        drawFrame(currentFrame);

        // Update canvas position based on new scroll position
        let scrollPositionY = window.scrollY || window.pageYOffset;
        updateCanvasPosition(scrollPositionY);

        // Update the canvas position based on animation
        canvas_earth.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }
});
