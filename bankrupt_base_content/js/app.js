document.addEventListener('DOMContentLoaded', function () {

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

    
    // ANIMATION
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".guide",
            start: "top center",
        }
    });

    const elements1 = gsap.utils.toArray(".gs-anim");

    elements1.forEach((element) => {
        tl1.from(element, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power1.out",
            delay: 0.1,
        });
    });

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".benefits",
            start: "top center",
        }
    });

    const elements2 = gsap.utils.toArray(".gs-anim2");

    elements2.forEach((element) => {
        tl2.from(element, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power1.out",
            delay: 0.1,
        });
    });

})