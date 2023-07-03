let onlineNumber = document.querySelector('.header-online__text');

function numberSpace(value) {
    let outrez = (value + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    return outrez;
}

function smoothRandomize(startValue, min, max, callback) {
	var currentValue = startValue;
	var range = max - min;
  
	var interval = setInterval(function() {
	  var randomOffset = getRandomValue(2, 10) * (Math.random() < 0.5 ? -1 : 1);
	  currentValue += randomOffset;
	  
	  // Проверяем, чтобы значение не выходило за границы диапазона
	  if (currentValue < min) {
		currentValue = min;
	  } else if (currentValue > max) {
		currentValue = max;
	  }
	  
	  // Сохраняем текущее значение в переменной onlineNumber
	  var onlineNumber = currentValue;
	  
	  // Вызываем функцию обратного вызова и передаем текущее значение
	  callback(onlineNumber);
	}, 4000);
  
	function getRandomValue(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
  }
 
  smoothRandomize(6908, 5000, 8000, function(value) {
	// Обновляем значение элемента HTML
	onlineNumber.innerHTML = numberSpace(value);
  });
  


let image = document.querySelector('.sidebar__slider_1');

let offset = 0;
let randomNumber;

function moveImage() {
	offset -= 102;
	image.style.bottom = offset + 'px';

	randomNumber = Math.floor(Math.random() * (2500 - 500 + 1)) + 500;
	if (!(offset <= -12000)) {
		setTimeout(moveImage, randomNumber);
	}
}


setTimeout(moveImage, randomNumber);

const popupLinks = document.querySelectorAll('.popup-link'),
	body = document.querySelector('body'),
	lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		})
	}
}

const popupCloseIcon = document.querySelectorAll('.popup__close');

if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		})
	}
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		}
		else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup-content')) {
				popupClose(e.target.closest('.popup'));
			}
		})
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').clientWidth + 'px';

	if (lockPadding, length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.getElementsByClassName.paddingRight = lockPaddingValue
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnlock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = "0px";
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
})

	(function () {
		// проверяем поддержку
		if (!Element.prototype.closest) {
			// реализуем
			Element.prototype.closest = function (css) {
				var node = this;

				while (node) {
					if (node.matches(css)) return node;
					else node = node.parentElement;
				}
				return null;
			};
		}
	})();

(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();



