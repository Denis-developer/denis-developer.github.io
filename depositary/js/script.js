const accordions = document.querySelectorAll('.accordion__title');
let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        accordions[i].classList.toggle('active');
        const accordionContent = accordions[i].nextElementSibling;
        if (accordionContent.style.maxHeight == "" && viewport_width > 576) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 64 + "px";
            accordionContent.style.padding = "32px";
        }
        else if (accordionContent.style.maxHeight == "" && viewport_width <= 576) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 40 + "px";
            accordionContent.style.padding = "20px";
        }
        else if (!accordionContent.style.maxHeight == "" && viewport_width > 576) {
            accordionContent.style.maxHeight = null;
            accordionContent.style.padding = "0px 32px 0px 32px";
        }
        else {
            accordionContent.style.maxHeight = null;
            accordionContent.style.padding = "0px 20px 0px 20px";
        }
    })
}

let logo = document.querySelector('.header-logo'),
    logoText = logo.querySelector('span'),
    headerContainers = document.querySelectorAll('.header .container');

if (viewport_width <= 1650 && window.scrollY >= 1 && viewport_width > 992) {
    for (let i = 0; i < headerContainers.length; i++) {
        headerContainers[i].classList.add('active');
    }
}
else if (window.scrollY >= 1 && viewport_width > 992) {
    logoText.classList.add('active');
}
else {
    for (let i = 0; i < headerContainers.length; i++) {
        headerContainers[i].classList.remove('active');
    }
}


// HEADER

function handleScroll() {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewport_width > 992) {
        if (window.scrollY > 0) {
            if (viewport_width <= 1650) {
                for (let i = 0; i < headerContainers.length; i++) {
                    headerContainers[i].classList.add('active');
                }
            }
            logo.style.width = "auto";
            logoText.classList.add('active');

        } else {
            logoText.classList.remove('active');
            setTimeout(() => {
                logo.style.width = "40px";
            }, 300);
            for (let i = 0; i < headerContainers.length; i++) {
                headerContainers[i].classList.remove('active');
            }
        }
    }

}

window.addEventListener("scroll", handleScroll);

// Burger menu
const menuBurger = document.querySelector('.header__hamburger');
const menuMobile = document.querySelector('.header__top .container');

menuBurger.addEventListener('click', function (e) {
    document.body.classList.toggle('lock')
    menuBurger.classList.toggle('active');
    menuMobile.classList.toggle('show');
})

function smoothScrollToAnchor(anchor) {
    viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let offset = 50;
    if(viewport_width < 577) {
        offset = 80;
    }
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
      smoothScrollToAnchor(hash);
    });
  }
  
  