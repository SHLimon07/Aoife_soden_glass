homeMain();

async function homeMain() {
    var bannerImg = document.getElementById('banner').querySelectorAll('.images');
    var changeDelay = 5000;
    setInterval(autoplay, bannerImg.length * changeDelay, bannerImg, changeDelay);
}

async function autoplay(bannerImg, delay) {
    var sz = bannerImg.length;
    await setOpacity(bannerImg[0], bannerImg[sz - 1], delay);

    for (let i = 1; i < sz; i++) {
        await setOpacity(bannerImg[i], bannerImg[i - 1], delay);
    }
}

function setOpacity(now, prev, delay) {
    now.style.opacity = '1';
    prev.style.opacity = '0';
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}