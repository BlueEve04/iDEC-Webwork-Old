// Scroll to the top 
const scrolltp = document.querySelector("#scrolltp")
scrolltp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
window, addEventListener('scroll', function () {
    if (window.scrollY >= 700) {
        scrolltp.style.opacity = 1;
    } else {
        scrolltp.style.opacity = 0;
    }
})


// description侧边导航栏自动消失
window, addEventListener('scroll', function () {
    if (window.scrollY <= 750) {
        description_cb.style.opacity = 0;
    }
    else if (window.scrollY >= 5000) {
        description_cb.style.opacity = 0;
    }
    else {
        description_cb.style.opacity = 1;

    }
})
// result侧边导航栏自动消失
window, addEventListener('scroll', function () {
    if (window.scrollY <= 750) {
        result_cb.style.opacity = 0;
    }
    else if (window.scrollY >= 15200) {
        result_cb.style.opacity = 0;
    }
    else {
        result_cb.style.opacity = 1;

    }
})
// design侧边导航栏自动消失
window, addEventListener('scroll', function () {
    if (window.scrollY <= 750) {
        design_cb.style.opacity = 0;
    }
    else if (window.scrollY >= 5250) {
        design_cb.style.opacity = 0;
    }
    else {
        design_cb.style.opacity = 1;

    }
})