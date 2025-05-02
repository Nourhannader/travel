const swiper = new Swiper(".swiper", {
    slidesPerView: 1, // typo fixed
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    loop: true, // typo fixed (Loop -> loop)
    direction: "horizontal", // typo fixed (horizantal -> horizontal)
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    spaceBetween: 100,
});

const swiper2 = new Swiper(".swiper2", {
    slidesPerView: 3, // typo fixed
    spaceBetween:35,
    slidesPerGroup:1,
    loop: true, // typo fixed (Loop -> loop)
     fade:true,
     centerSlide:true,
     grabCursor:true,
     LoopfillGroupwithBlank:true,
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    breakpoints: {
        320:{
            slidesPerView:1,
        },
        768:{
           slidesPerView:2,
    
        },
        968:{
            slidesPerView:3,
        }
    }
});

const swiper3 = new Swiper(".swiper3", {
    slidesPerView: 2, // typo fixed
    spaceBetween:35,
    slidesPerGroup:1,
    loop: true, // typo fixed (Loop -> loop)
     fade:true,
     centerSlide:true,
     grabCursor:true,
     LoopfillGroupwithBlank:true,
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    breakpoints: {
        320:{
            slidesPerView:1,
        },
        768:{
           slidesPerView:1,
    
        },
        968:{
            slidesPerView:2,
        }
    }
});

const swiper4 = new Swiper(".swiper4", {
    slidesPerView: 1, // typo fixed
    spaceBetween:95,
    slidesPerGroup:1,
    loop: true, // typo fixed (Loop -> loop)
     fade:true,
     centerSlide:true,
     grabCursor:true,
     LoopfillGroupwithBlank:true,
    autoplay: {
        delay: 5000,
    },
    speed: 400,
    breakpoints: {
        320:{
            slidesPerView:1,
        },
        768:{
           slidesPerView:1,
    
        },
        968:{
            slidesPerView:1,
        }
    }
});