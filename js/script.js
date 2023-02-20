document.addEventListener('DOMContentLoaded', function () {

    const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        let projectsWrapper = document.querySelectorAll('.projects-block__wrapper');
        for (let i = 0; i < projectsWrapper.length; i++) {
            projectsWrapper[i].style.transform = "translateY(0)";
        }
    }

    SmoothScroll({ stepSize: 40 });
})