document.addEventListener('DOMContentLoaded', function () {

    let optionBtn = document.getElementsByClassName('option-block__btn'),
        optionBlock = document.getElementsByClassName('option-block'),
        calcBtn = document.getElementsByClassName('calc-btn'),
        callLink = document.getElementsByClassName('calc-link__additionally'),
        btnNext = document.getElementsByClassName('block-step'),
        calcBlocks = document.getElementsByClassName('calc-blocks');

    let calcOut = {};

    for (let i = 0; i < optionBtn.length; i++) {
        optionBtn[i].addEventListener('mouseenter', function () {
            let num = this.getAttribute('data-num');
            for (let z = 0; z < optionBlock.length; z++) {
                if (optionBlock[z].getAttribute('data-block') == num)
                    optionBlock[z].classList.toggle('active-block');
            }
        });
        optionBtn[i].addEventListener('mouseleave', function () {
            for (let z = 0; z < optionBlock.length; z++) {
                optionBlock[z].classList.remove('active-block');
            }
        });
    }

    for (let i = 0; i < btnNext.length; i++) {
        btnNext[i].addEventListener('click', function (event) {
            let num = this.getAttribute('data-calcBtn');
            let out = [];
            if(event && event.srcElement && event.srcElement.classList && event.srcElement.classList.contains('calc-pass')){
                out.push('Пропущенно');
            } else {
                let blocksOpt = calcBlocks[num - 1].getElementsByClassName('calc-btn');
                for (let y = 0; y < blocksOpt.length; y++) {
                    if (blocksOpt[y].classList.contains('active-btn'))
                        out.push(blocksOpt[y].outerText);
                }

                blocksOpt = calcBlocks[num - 1].getElementsByClassName('calc-link__additionally');
                for (let y = 0; y < blocksOpt.length; y++) {
                    if (blocksOpt[y].classList.contains('active-ok'))
                        out.push(blocksOpt[y].outerText);
                }
            }
            calcOut[num-1] = out;
            num++;
            for (let z = 0; z < calcBlocks.length; z++) {
                calcBlocks[z].style.display = 'none';
                if (calcBlocks[z].getAttribute('data-calc') == num) {
                    calcBlocks[z].style.display = 'block';
                    if (calcBlocks[z].getAttribute('data-calc') == 10)
                        document.querySelector('.calc-title').innerHTML = 'Оставьте заявку';
                    document.querySelector('.calc').style.height = 'auto';
                }
            }
        });
    }


    for (let i = 0; i < calcBtn.length; i++) {
        calcBtn[i].addEventListener('click', function () {
            for (let y = 0; y < calcBtn.length; y++) {
                calcBtn[y].classList.remove('active-btn');
            }
            this.classList.add('active-btn');
        })
    }

    for (let i = 0; i < callLink.length; i++) {
        callLink[i].addEventListener('click', function (event) {
            event.preventDefault();
            this.classList.toggle('active-ok');
        })
    }

    // SLICK SLIDER
    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 100,
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    speed: 500,
                    slidesToShow: 1
                }
            }
        ]
    });

    const service_id = "default_service";
    const template_id = "template_ZSRPwZx1";

    function sendAlert(from, text) {
        const templateParams ={
            source: from,
            message_html: text
        };
        emailjs.send(service_id, template_id, templateParams)
            .then(function(){
                alert("Заявка отправлена.");
                myform.find("button").text("Send");
            }, function(err) {
                alert("Не удалось отправить заявку.");
                console.log("Send email failed!", err);
                alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                myform.find("button").text("Send");
            });

        alert( JSON.stringify(text));
    }

    $("#request-form").submit(function (event) {
        let text = 'Заявка ' + $("#request-form-tel").val() + ' от ' + $("#request-form-name").val();
        sendAlert('Заявка', text);
        event.preventDefault();
    });

    $("#calc-form").submit(function (event) {
        let text = 'Калькулятор ' + $("#calc-form-tel").val() + ' от ' + $("#calc-form-name").val();
        let out = '';

        for (let z = 0; z < calcBlocks.length - 1; z++) {
            let t = '-';
            if (calcBlocks[z] && calcBlocks[z].firstElementChild)
                t = calcBlocks[z].firstElementChild.innerText;
            out += t + ' ' + calcOut[z].join(', ') + '<br>';
        }

        out += 'Пожелания ' + $("#calc-wishes").val() + '<br>';

        let sel = document.getElementsByClassName('active-btn');
        for (let i = 0; i < sel.length; i++) {
            out += optionBlock[i].outerText + '\n';
        }
        console.log(calcOut);
        document.getElementsByClassName('active-btn').each(function (i, e) {
            out += e.outerText + '\n';
            // do stuff
        });
        sendAlert('Калькулятор', text + '\n<br>' + out);
        event.preventDefault();
    });

    // Очистка полей формы

    var inputForm = $('.form-input');
    inputForm.focus(function(event) {
        if($(this).hasClass('foc')){
        }
        else{
            $(this).val('');
            $(this).addClass('foc')
        }
    });

    // Якоря

        $('.header-list__link, .menu__link').on('click', function(event) {
              event.preventDefault();
              var id = $(this).attr('href'),
              top = $(id).offset().top;
              $('body,html').animate({scrollTop: top}, 800);
          });

    let humburger = document.getElementsByClassName('humburger'),
        menu = document.querySelector('.menu');

  // АНИМАЦИЯ ГАМБУРГЕРА

    for (var i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('dn');
        });
    }

    // Меню
    $('.menu__link, .menu__links').on('click', function() {
            menu.classList.toggle('dn');
            $('.humburger').removeClass('active');
    });

});
