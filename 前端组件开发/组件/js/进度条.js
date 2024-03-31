window.addEventListener('scroll', function () {
    // 获取页面的总高度
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var fullHeight = document.documentElement.scrollHeight;

    // 计算滚动进度
    var scrolled = (window.scrollY / (fullHeight - windowHeight)) * 100;

    // 更新进度条的宽度
    var progressBar = document.getElementById('progress-bar');
    progressBar.style.width = scrolled + '%';
});