const tabs = document.querySelectorAll('.tabs');

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i].querySelectorAll('.tab'),
        tabsParent = tabs[i].closest('.catalog'),
        tabsContent = tabsParent.querySelectorAll('.catalog__wrapper');
    for (let z = 0; z < tab.length; z++) {
        tab[z].addEventListener('click', function () {
            for (let y = 0; y < tab.length; y++) {
                tab[y].classList.remove('active');
                tab[z].classList.add('active');
                tabsContent[y].style.opacity = '0';
                setTimeout(function () {
                    tabsContent[y].classList.remove('active');
                    tabsContent[z].classList.add('active');
                }, 800)
                setTimeout(function () {
                    tabsContent[z].style.opacity = '1';
                }, 900)
            }
        })
    }
}