// Проверка поддержки webp, добавление класса webp или no-webp для html
function isWebp() {
    function testWebP(callback) {
        // Проверка поддержки webp
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    // Добавление класаа
    testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}

isWebp();

// Аккордионы
const accordions = document.querySelectorAll('.questions-accordion__title');


for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        this.classList.toggle('active');
        viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const accordionContent = accordions[i].nextElementSibling;
        accordionContent.classList.toggle('show');
        if (accordionContent.style.maxHeight == "") {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 57 + "px";
        }
        else {
            accordionContent.style.maxHeight = null;
        }
    })
}

// Плавный скролл к якорям
function smoothScrollToAnchor(anchor, offset = 0) {
    let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const target = document.querySelector(anchor);
    if (!target) return;

    const targetPosition = target.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800;

    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const easing = easeInOutQuad(percentage);
        window.scrollTo(0, startPosition + distance * easing);
        if (progress < duration) {
            requestAnimationFrame(step);
        } else {
            history.replaceState(null, null, anchor); // Заменяем URL без изменения положения на странице
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(step);
}

let linkNav = document.querySelectorAll('[href^="#"]');
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
        e.preventDefault();
        const hash = this.getAttribute('href');
        if (hash == "#about") {
            smoothScrollToAnchor(hash, 70);
        }
        else {
            smoothScrollToAnchor(hash);
        }
    });
}

