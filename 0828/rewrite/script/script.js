
const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');

const images = [];  // 存放图片的数组
let currentImageIndex = 0;  // 当前显示图片的索引

// 加载图片
const imageCount = 44;  // 假设你有10张图片，可以根据实际情况调整
for (let i = 1; i <= imageCount; i++) {
    const img = new Image();
    img.src = `frames/${i}.png`;  // 图片路径
    images.push(img);
}

// 设置canvas尺寸
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// 绘制图片到canvas
function drawImage() {
    if (images[currentImageIndex]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[currentImageIndex], 0, 0, canvas.width, canvas.height);
    }
}

// 监听鼠标滚轮事件
window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        currentImageIndex = (currentImageIndex + 1) % images.length;  // 下一个图片
    } else {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;  // 上一个图片
    }
    drawImage();
});

