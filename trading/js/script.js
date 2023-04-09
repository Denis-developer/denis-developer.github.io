let mainBlockImg = document.querySelectorAll('.main-block__img');
let popup = document.querySelector('.popup');

for (let i = 0; i < mainBlockImg.length; i++) {
    mainBlockImg[i].addEventListener('click', function() {
        let imgParent = this.closest('.main-content');
        console.log(imgParent.nextSibling);
        if (this.getAttribute('data-success') == 1) {
            imgParent.classList.remove('active');
            imgParent.nextElementSibling.classList.add('active');
        }
        else {
            popup.style.display = "flex";
        }
    })
}
