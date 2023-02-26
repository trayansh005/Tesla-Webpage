var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next-unique",
        prevEl: ".swiper-button-prev-unique",
    },

    breakpoints: {
        810: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

        700: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        300: {
            slidesPerView: 1,
        },
    },
});


let menuIcon = document.querySelector(".menu-icon") 
let closeMenu = document.querySelector(".close-icon");
let menu = document.querySelector(".sidemenu");

menuIcon.addEventListener("click", () => {
    menu.style.top = 0;
});

closeMenu.addEventListener("click", () => { 
    menu.style.top = "-50%";
});