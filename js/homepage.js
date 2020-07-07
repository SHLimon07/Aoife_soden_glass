// Getting the elements from HTML
const carousel = document.getElementById('carousel');
const size = carousel.children.length;
var carouselCounter;

homeMain();

async function homeMain() {
    var bannerImg = document.getElementById('banner').querySelectorAll('.images');
    var changeDelay = 5000;
    setInterval(autoplay, bannerImg.length * changeDelay, bannerImg, changeDelay);

    //since initialy the slider is on the postion of the last clone
    gotoFirst();

    //starting the autoplay 
    setInterval(autoPlay, 5000);
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

function autoPlay()
{
    //continiously move to the next slide
    gotoNext();
}

function gotoFirst()
{
    //takes the slider straight to the first image, without any sliding effect to create the loop
    carouselCounter=1;
    carousel.classList.add('noTransition');
    carousel.style.transform = 'translateX(-100%)';
}

function gotoLast()
{
    //takes the slider straight to the last image, without any sliding effect to create the loop
    carouselCounter=size-2;
    carousel.classList.add('noTransition');
    carousel.style.transform += 'translateX(-' + (size-2)*100 + '%)';
}


function gotoNext() {
    // Does the transition to the next slide
    if(carouselCounter>=size-1)//this condition is for handing errors of counter
        return;

    //the class that was added by gotofirst()/gotolast()
    carousel.classList.remove('noTransition');
    carouselCounter++;
    carousel.style.transform = 'translateX(-' + carouselCounter*100 + '%)';
    if(carouselCounter==size-1)checkIf();//checking if the current slide is a clone one
}

function gotoPrev() {
    // Does the transition to the next slide

    if(carouselCounter<=0)//this condition is for handing errors of counter
        return;

    //the class that was added by gotofirst()/gotolast()
    carousel.classList.remove('noTransition');
    carouselCounter--;
    carousel.style.transform = 'translateX(-' + carouselCounter*100 + '%)';
    if(carouselCounter==0)checkIf();//checking if the current slide is a clone one
}

function checkIf()
{
    carousel.addEventListener('transitionend',function()
    {
        if(carousel.children[carouselCounter].id=="firstClone")
        {
            gotoFirst();//to create the loop effect
        }
        else if(carousel.children[carouselCounter].id=="lastClone")
        {
            gotoLast();//to create the loop effect
        }
    });
}