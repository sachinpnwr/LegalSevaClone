var wlcm_bg = document.getElementsByClassName('wlcm-bg')[0]
setTimeout(() => {
    wlcm_bg.classList.add('close')
    console.log('hey')
}, 00)


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


window.addEventListener('scroll', () => {
    let header = document.getElementsByTagName('header')[0];
    let windowPosition = window.scrollY > 300;
    header.classList.toggle('scrolling-active', windowPosition)
})


const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener("click", function () {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})
next.addEventListener("click", function () {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})

// circle indicator

function circleIndicator() {
    for (let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
            // div.innerHTML=i+1;
        div.setAttribute("onclick", "indicateSlide(this)")
            div.id = i;
            if (i == 0) {
                div.className = "active";
            }
        indicator.appendChild(div);
    }
}
circleIndicator();

function indicateSlide(element){
    index=element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}
function updateCircleIndicator(){
    for(let i=0; i<indicator.children.length;i++){
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

// prev slide function
function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
    }
    else {
        index--;
    }
    changeSlide();
}

// next slide function
function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay, 4000);
}

function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}
let timer = setInterval(autoPlay, 4000);


// testimonial slider

const pages = document.querySelector(".test-slider").children
const back = document.querySelector(".back");
const frwrd = document.querySelector(".frwrd");
let index1 = 0;

back.addEventListener("click",function(){
    backPage();
    resetTimer1();
})

frwrd.addEventListener("click",function(){
    frwrdPage();
    resetTimer1();
})

function indicatePage(element){
    index1=element.id;
    changePage();
    resetTimer1();
}

//back page function

function backPage(){
    if(index1==0){
        index1=pages.length-1;
    }
    else{
        index1--;
    }
    changePage();
}

//frwrd page function

function frwrdPage(){
    if(index1==pages.length-1){
        index1=0;
    }
    else{
        index1++;
    }
    changePage();
}

function changePage(){
    for(let i=0; i<pages.length;i++){
        pages[i].classList.remove("active");
    }
    pages[index1].classList.add("active");
}

function resetTimer1() {
    clearInterval(timer1);
    timer = setInterval(autoPlay, 4000);
}

function autoPlay1() {
    frwrdPage();
}
let timer1 = setInterval(autoPlay1, 4000);