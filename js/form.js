const buttonLink = document.querySelector(".button-link");
const formPopup = document.querySelector(".popup");
const dateArrival = document.querySelector(".date-arrival");
const dateDeparture = document.querySelector(".date-departure");
const adultNumber = document.querySelector('[name="adult-number"]');
const childNumber = document.querySelector('[name="child-number"]');

let isStorageSupport = true;
let adult = "";
let child = "";

try {
  adult = localStorage.getItem("number-adult");
} catch (err) {
  isStorageSupport = false;
}

try {
  child = localStorage.getItem("number-child");
} catch (err) {
  isStorageSupport = false;
}



formPopup.classList.add('modal-close');

buttonLink.addEventListener("click", function() {
formPopup.classList.toggle('modal-close');
formPopup.classList.toggle('modal-show');

if (adult) {
	adultNumber.value = adult;
}

if (child) {
	childNumber.value = child;
}


});

formPopup.addEventListener('submit', function(evt) {
	if (!dateArrival || !dateField) {
		evt.preventDefault();
	} else {
		if (isStorageSupport) {
			localStorage.setItem("number-adult", adultNumber.value);
			localStorage.setItem("number-child", childNumber.value);
		}
		
	}
	
});