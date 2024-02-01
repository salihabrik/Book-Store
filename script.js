// Function to toggle the 'active' class on the search form and hide the navbar
const toggleSearchForm = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
};

// Function to toggle the 'active' class on the login form
const toggleLoginForm = () => {
    loginForm.classList.toggle('active');
};

// Event listener for search button click
document.querySelector('#search-btn').onclick = toggleSearchForm;

// Event listener for login button click
document.querySelector('#login-btn').onclick = toggleLoginForm;

// Event listener for close login button click
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
};

// Function to handle the scroll event and add or remove the 'active' class on header-2
const handleScroll = () => {
    const header2 = document.querySelector('.header .header-2');
    if (window.scrollY > 80) {
        header2.classList.add('active');
    } else {
        header2.classList.remove('active');
    }
};

// Event listener for scroll event
window.onscroll = handleScroll;

// Event listener for window load event
window.onload = () => {
    handleScroll(); // Check scroll position on page load
    fadeOut(); // Call fadeOut function
};

// Function to add 'active' class on header-2 after a timeout (3 seconds)
function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

// Function to fade out loader after 3 seconds
function fadeOut() {
    setTimeout(loader, 3000);
}

// Swiper initialization for the books-slider
new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// Swiper initialization for the featured-slider
new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});

// Swiper initialization for the arrivals-slider
new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Swiper initialization for the reviews-slider
new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});

// Swiper initialization for the blogs-slider
new Swiper(".blogs-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
































/*let searchForm = document.querySelector('.search-form');
let navbar = document.querySelector('.navbar'); // Add this line if you have a navbar element

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
fadeOut();
function loader (){
    document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
    setTimeout(loader, 3000);
}



/*
let searchForm = document.querySelector('.search-form');
let navbar = document.querySelector('.navbar'); // Add this line if you have a navbar element

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
*
window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    
});

new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
            450: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 6,
            },
        },
    
});

new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
                slidesPerView: 2,
            },
        1024: {
                slidesPerView: 3,
            },
        },
    
});

new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
            450: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 6,
            },
        },
    
});

new Swiper(".blogs-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    
});
/*
         var swiper = new Swiper(".books-slider, .featured-slider,.arrivals-slider, .reviews-slider", {
             loop: true,
             slidesPerView: 4,
             spaceBetween: 30,
             centeredSlides: true,
             autoplay: {
                 effect: "coverflow",
                 grabCursor: true,
                 centeredSlides: true,
                 slidesPerView: "auto",
                 coverflowEffect: {
                     rotate: 50,
                     stretch: 0,
                     depth: 100,
                     modifier: 1,
                     slideShadows: true,
                 },
             },
             slidesPerView: 1,
             spaceBetween: 10,
             pagination: {
                 el: ".swiper-pagination",
                 clickable: true,
             },
             navigation: {
                 nextEl: ".swiper-button-next",
                 prevEl: ".swiper-button-prev",
             },
             breakpoints: {
                 "@0.00": {
                     slidesPerView: 1,
                     spaceBetween: 10,
                 },
                 "@0.75": {
                     slidesPerView: 2,
                     spaceBetween: 20,
                 },
                 "@1.00": {
                     slidesPerView: 3,
                     spaceBetween: 40,
                 },
                 "@1.50": {
                     slidesPerView: 4,
                     spaceBetween: 50,
                 },
             },
         });
 */
