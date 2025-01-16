document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav')

    burger.addEventListener('click', () => {
        burger.classList.toggle('open')
        nav.classList.toggle('open')
    })

    document.addEventListener('click', (event) => {
        const isClickInsideNav = nav.contains(event.target);
        const isClickInsideBurger = burger.contains(event.target);

        if (!isClickInsideNav && !isClickInsideBurger && nav.classList.contains('open')) {
            burger.classList.remove('open');
            nav.classList.remove('open');
        }
    });
})