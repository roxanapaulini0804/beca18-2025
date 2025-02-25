window.addEventListener("load", () => {

    
    let blockIngenieria = document.querySelector('.bloque6item1');
    let contentIngenieria = document.querySelector('.bloque6BlockItem1');
    let blockEducacion = document.querySelector('.bloque6item2');
    let contentEducacion = document.querySelector('.bloque6BlockItem2');
    let blockGestion = document.querySelector('.bloque6item3');
    let contentGestion = document.querySelector('.bloque6BlockItem3');
    let blockCiencias = document.querySelector('.bloque6item4');
    let contentCiencias = document.querySelector('.bloque6BlockItem4');
    let blockSalud = document.querySelector('.bloque6item5');
    let contentSalud = document.querySelector('.bloque6BlockItem5');

    blockIngenieria.addEventListener('click', function (e) {
        contentIngenieria.classList.toggle('bloque6BlockItemShow');
    });

    blockEducacion.addEventListener('click', () => {
        contentEducacion.classList.toggle('bloque6BlockItemShow2');
    });

    blockGestion.addEventListener('click', () => {
        contentGestion.classList.toggle('bloque6BlockItemShow3');
    });

    blockCiencias.addEventListener('click', () => {
        contentCiencias.classList.toggle('bloque6BlockItemShow4');
    });

    blockSalud.addEventListener('click', () => {
        contentSalud.classList.toggle('bloque6BlockItemShow5');
    });

    var slider2 = new Swiper(".mySwiper2", {
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet2 ' + className + '"></span>';
            }
        },
        breakpoints: {
            // 1020: {
            //     slidesPerView: 6
            // }
        }
    });

    var slider3 = new Swiper(".mySwiper3", {
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination3",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet3 ' + className + '"></span>';
            }
        },
        breakpoints: {
            1020: {
                slidesPerView: 4
            }
        }
    });

    var slider4 = new Swiper(".mySwiper4", {
        navigation: {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination4",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet4 ' + className + '"></span>';
            }
        },
        breakpoints: {
            1020: {
                slidesPerView: 8
            }
        }
    });

    var slider5 = new Swiper(".mySwiper5", {
        navigation: {
            nextEl: ".swiper-button-next5",
            prevEl: ".swiper-button-prev5"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination5",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet5 ' + className + '"></span>';
            }
        },
        breakpoints: {
            1020: {
                slidesPerView: 1
            }
        }
    });

    var slider6 = new Swiper(".mySwiper6", {
        navigation: {
            nextEl: ".swiper-button-next6",
            prevEl: ".swiper-button-prev6"
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination6",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet6 ' + className + '"></span>';
            }
        },
        breakpoints: {
            1020: {
                slidesPerView: 1
            }
        }
    });

    let btonFlotante = document.querySelector('.bloqueFloat');
    let btonFlotante2 = document.querySelector('.bloqueFloat2');


    window.addEventListener('scroll', (e) => {

        // console.log(window.scrollY) 
        // console.log(window.scrollY);
        if( screen.width >= 319 ) {
            if( window.scrollY > 150 ) {
                btonFlotante.classList.add('bloqueFloatActive');
            }else {
                btonFlotante.classList.remove('bloqueFloatActive');
            }
        }
        if( screen.width >= 320 ) { 
            if( window.scrollY > 1199 && window.scrollY < 4050 ) {
                btonFlotante.classList.add('bloqueFloatActive2');
            }else {
                btonFlotante.classList.remove('bloqueFloatActive2');
            }
        }
        if( screen.width >= 390 ) {
            if( window.scrollY > 1199 && window.scrollY < 4150 ) {
                btonFlotante.classList.add('bloqueFloatActive2');
            }else {
                btonFlotante.classList.remove('bloqueFloatActive2');
            }
        }
        if( screen.width >= 1019 ) {
            if( window.scrollY > 550 && window.scrollY < 3900 ) {
                btonFlotante2.classList.add('bloqueFloatActive2');
            }else {
                btonFlotante2.classList.remove('bloqueFloatActive2');
            }
        }
        if( screen.width >= 1019 ) {
            if( window.scrollY > 550 && window.scrollY < 4150 ) {
                btonFlotante2.classList.add('bloqueFloatActive2');
            }else {
                btonFlotante2.classList.remove('bloqueFloatActive2');
            }
        }
    })

    let bodyContent = document.querySelector('body');
    let closemodal = document.querySelector('.popupcontent--top--close');
    let popContent = document.querySelector('.popup');
    let popup = document.querySelector('.popupcontent');

    closemodal.addEventListener('click', () => {
        popup.classList.add('popupcontentClose');
        popContent.classList.add('popupClose');
        bodyContent.classList.remove('bodyOverflow');
    })

})



