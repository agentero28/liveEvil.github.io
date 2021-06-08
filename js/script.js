/* =========================================
                preloader
============================================ */
$(window).on('load', function() {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut();
});

/* =========================================
                Scroll reveal
============================================ */

window.addEventListener('scroll', reveal);

function reveal(){
	var reveals = document.querySelectorAll('.reveal');

	for(var i = 0; i < reveals.length; i++){
		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 100;

		if(revealtop < windowheight - revealpoint){
			reveals[i].classList.add('active');
		}

		else{
			reveals[i].classList.remove('active');
		}
	}
}

/* =========================================
                fotoalbum
============================================ */
var slideIndex = 1;
function showSlides() {
	var slides = document.getElementsByClassName("mySlides");
	if (slideIndex > slides.length) {slideIndex = 1;}
	if (slideIndex < 1) {slideIndex = slides.length;}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
	var dots = document.getElementsByClassName("slide-dot");
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" slide-dot-active", "");
	}
	dots[slideIndex-1].className += " slide-dot-active";
 }
function plusSlides(n) {
	slideIndex += n;
	showSlides();
}
function currentSlide(n) {
	slideIndex = n;
	showSlides();
}
window.onload = showSlides;

/* =========================================
                smooth scrolling
============================================ */
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});