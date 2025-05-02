const menus=document.querySelector("nav ul");
const header=document.querySelector("header");
const menuBtn=document.querySelector(".menu-btn");
const closeBtn=document.querySelector(".close-btn");
const scrollTop=document.querySelector("#scroll-top")

menuBtn.addEventListener("click",() => {
    menus.classList.add("display");
})
closeBtn.addEventListener("click",() => {
    menus.classList.remove("display")
})

//scroll sticky navbar
window.addEventListener("scroll",() => {
    if (document.documentElement.scrollTop > 20) {
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky')
    }
});
window.addEventListener("scroll",() => {
    if(document.documentElement.scrollTop > 80){
        scrollTop.style.display='flex'
    }
    else{
        scrollTop.style.display='none'
    }
})

//static counter
const countersEl=document.querySelectorAll(".numbers");
countersEl.forEach((counters) => {
    counters.textContent=0;
    increamentCounters();
    function increamentCounters() {
        let counterNum = +counters.textContent;
        const dataCiel= counters.getAttribute("data-ceil");
        const increment = dataCiel / 25;
        counterNum=Math.ceil(counterNum + increment);
        if(counterNum < dataCiel){
            counters.textContent=counterNum;
            setTimeout(increamentCounters , 50);
        }else {
            counters.textContent=dataCiel;
        }
    }
})