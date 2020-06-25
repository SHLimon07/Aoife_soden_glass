homeMain();

async function homeMain() {
    var banner = document.getElementById('banner');
    var changeDelay = 5000;
    setInterval(autoplay, banner.children.length * changeDelay, banner, changeDelay);
}

async function autoplay(banner, delay) {
    var sz = banner.children.length;
    await setOpacity(banner.children[0], banner.children[sz - 1], delay);

    for (let i = 1; i < sz; i++) {
        await setOpacity(banner.children[i], banner.children[i - 1], delay);
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