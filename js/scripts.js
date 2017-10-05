var acc = document.getElementsByClassName("accordion");
var con = document.getElementsByClassName("panel");
var elem = document.getElementsByClassName("accordion_tog");
var i;

for (i=0; i < acc.length; i++){
	acc[i].addEventListener("click", function () {
		if (!(this.classList.contains("active"))) {
			for (i=0; i < acc.length; i++){
				acc[i].classList.remove("active");
				acc[i].firstElementChild.innerHTML = '+';
				acc[i].nextElementSibling.classList.remove("show");
			}
			this.classList.add("active");
			this.firstElementChild.innerHTML = '-';
			this.nextElementSibling.classList.add("show");
		}	else {
			this.classList.remove("active");
			this.firstElementChild.innerHTML = '+';
			this.nextElementSibling.classList.remove("show");
		}
	});
}

var tog = document.querySelector(".main-head .toggle_mnu");
var sandwich = document.querySelector(".main-head .menu");

tog.addEventListener("click", function () {
    sandwich.classList.toggle("active");

});
