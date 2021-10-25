const tabs = (headerSelector, tabSelector, contentSelector, iconSelector) => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    const icon = document.querySelectorAll(iconSelector);

    function hideAll() {
        content.forEach(item => {
            item.style.maxHeight = '0px';
        });
    }

    function showContent(i) {
        // content[i].classList.add('.risks__IsShow');
        // content[i].style.display = 'block';
        content[i].style.maxHeight = '1000px';
    }

    function hideContent(i) {
        content[i].style.maxHeight = '0px';
        // content[i].classList.remove('.risks__IsShow');
    }

    function transformIcon(i) {
        icon[i].style.transform = 'rotate(90deg)';
    }

    function backtransformIcon(i) {
        icon[i].style.transform = 'rotate(0deg)';
    }


    hideAll();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    e.preventDefault();
                    if (!item.classList.contains('.risks__IsShow')) {
                        item.classList.add('.risks__IsShow');
                        showContent(i);
                        transformIcon(i);
                    } else {
                        item.classList.remove('.risks__IsShow');
                        hideContent(i);
                        backtransformIcon(i);
                    }
                }
            });
        }
    });
};

function scrollTo() {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

window.addEventListener('DOMContentLoaded', () => {
    tabs('.risks__content', '.risks__item', '.risks__hide', '.risks__icon');
    scrollTo();
    $('.slick').slick({
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),
        infinite: true
    });

    $('.header__burger').click(function () {
        $('.header__burger').toggleClass('open-menu');
        $('.main__menu').toggleClass('open-menu');
    });
});