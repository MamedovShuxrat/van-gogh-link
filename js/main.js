document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav')

    burger.addEventListener('click', () => {
        burger.classList.toggle('open')
        nav.classList.toggle('open')
    })

    document.addEventListener('click', (event) => {
        const isNavigationClick = nav.contains(event.target);
        const isBurgerClick = burger.contains(event.target);

        if (!isNavigationClick && !isBurgerClick && nav.classList.contains('open')) {
            burger.classList.remove('open');
            nav.classList.remove('open');
        }
    });

    const searchInput = document.querySelector('.search-cart__input')
    const cards = document.querySelectorAll('.card__item')
    const resultTitle = document.querySelector('.result__title')

    function filterCards() {
        const searchQuery = searchInput.value.toLowerCase()
        let found = false

        cards.forEach(card => {
            const cardName = card.querySelector('.card__name').textContent.toLocaleLowerCase()

            if (cardName.includes(searchQuery)) {
                card.classList.remove('hide')
                found = true
            } else {
                card.classList.add('hide')
            }
        })
        if (found) {
            resultTitle.textContent = 'Результаты поиска'
        } else {
            resultTitle.textContent = 'Ничего не найдено'

        }
    }
    searchInput.addEventListener('input', filterCards)
})