document.addEventListener('DOMContentLoaded', function () {
	let humburger = document.getElementsByClassName('humburger'),
	    span = document.getElementsByClassName('line'),
  		section2 = document.querySelector('.section-2'),
  		section3 = document.querySelector('.section-3'),
  		section4 = document.querySelector('.section-4'),
  		section5 = document.querySelector('.section-5'),
  		section6 = document.querySelector('.section-6'),
  		section7 = document.querySelector('.section-7'),
  		section8 = document.querySelector('.section-8'),
      section2Logo = document.querySelector('.section-2__logo'),
      menu = document.querySelector('.menu');

      const max756 = window.matchMedia( "(max-width: 756px)" );

	// АНИМАЦИЯ ГАМБУРГЕРА

    for (let i = 0; i < humburger.length; i++) {
        humburger[i].addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('dn');
            for (let i = 0; i < span.length; i++) {
		        span[i].style.background = '#000';
		    }
        });
    }
     document.addEventListener('scroll', function () {
     //  if(document.documentElement.scrollTop >= section2.offsetTop - 100 && document.documentElement.scrollTop <= section3.offsetTop - 100
     //  	|| document.documentElement.scrollTop >= section5.offsetTop - 100 && document.documentElement.scrollTop <= section6.offsetTop - 100
     //  	|| document.documentElement.scrollTop >= section8.offsetTop - 100){
     //  	if(menu.classList.contains('dn')){
     //  		for (let i = 0; i < span.length; i++) {
		   //      span[i].style.background = '#000';
		   //  }
     //  	}else{
     //  		for (let i = 0; i < span.length; i++) {
		   //      span[i].style.background = '#fff';
		   //  }
     //  	}
      	
     //  }
     //  else if(document.documentElement.scrollTop >= section3.offsetTop - 100 || document.documentElement.scrollTop <= section2.offsetTop - 100 
     //  	 || document.documentElement.scrollTop >= section6.offsetTop - 100){
     //  	for (let i = 0; i < span.length; i++) {
	    //     span[i].style.background = '#000';
	    // }
     //  }
     if(document.documentElement.scrollTop > $('.section-1').offset().top){
      // for (let i = 0; i < span.length; i++) {
      //        span[i].style.background = '#fff';
      //    }
      alert('sdasd')
     }
      
    })
     if(max756.matches){
      section2Logo.src = 'img/logo-2.png';
     }

	
})