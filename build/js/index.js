document.addEventListener("DOMContentLoaded", function () {

    let baner12Swiper = new Swiper(".baner12Swiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: ".baner12Swiper-pagination",
        },
        navigation: {
            nextEl: ".baner12Swiper_next",
            prevEl: ".baner12Swiper_prev",
        },
    });
    let popularSwiper = new Swiper(".popularSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".popularSwiper-button-next",
            prevEl: ".popularSwiper-button-prev",
        },
        breakpoints: {
            400: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1044: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1636: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
    let docs_12Swiper = new Swiper(".docs_12Swiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".docs_12Swiper-button-next",
            prevEl: ".docs_12Swiper-button-prev",
        },
        breakpoints: {
            600: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    function toggleOpenMenu(el) {
        el.classList.toggle('open-menu');
    }
    function toggleOpenSearch(el) {
        el.classList.toggle('open-search');
    }
    function toggleOpen(el) {
        el.classList.toggle('open');
    }
    function addInvise(el) {
        el.classList.add('invise');
    }

    if (document.querySelector('footer')) {
        const footer = document.querySelector('footer');
        if (document.querySelector('.sogl')) {
            const sogl = document.querySelector('.sogl');
            const soglBtn = sogl.querySelector('.button');

            if (!sogl.classList.contains('invise')) {
                footer.classList.add("marg");
                soglBtn.addEventListener('click', () => {
                    addInvise(sogl);
                    footer.classList.remove("marg");
                })
            }

        }
    }

    if (document.querySelector('.menu__list')) {
        const headerTeg = document.querySelector('header');
        const menuList = headerTeg.querySelector('.menu__list');

        const mobTopCont = headerTeg.querySelector('.mob_top_cont');
        const bottomСont = headerTeg.querySelector('.bottom_cont');
        const zapisBtn = headerTeg.querySelector('a.button');
        let copyMenu = menuList.cloneNode(true);
        let copyMenu_2 = menuList.cloneNode(true);
        let copyBtn = zapisBtn.cloneNode(true);
        mobTopCont.appendChild(copyMenu);
        mobTopCont.appendChild(copyBtn);
        bottomСont.appendChild(copyMenu_2).classList.add('hid');

        if (headerTeg.querySelector('.menu__item-dropdown')) {
            const menuItemDrop = headerTeg.querySelectorAll('.menu__item-dropdown');
            menuItemDrop.forEach(element => {
                let elLink = element.querySelector('.menu__link');
                elLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    toggleOpen(element);
                })
            });
        }

        if (headerTeg.querySelector('.menu__burger')) {
            const menuBurger = headerTeg.querySelector('.menu__burger');

            menuBurger.addEventListener('click', () => {
                toggleOpenMenu(headerTeg);
            })
        }

        if (headerTeg.querySelector('.search_btn')) {
            const searchBtn = headerTeg.querySelector('.search_btn');
            const searchBtnClose = headerTeg.querySelector('.close-search');
            searchBtn.addEventListener('click', () => {
                toggleOpenSearch(headerTeg);
            })
            searchBtnClose.addEventListener('click', () => {
                toggleOpenSearch(headerTeg);
            })
        }
    }


});