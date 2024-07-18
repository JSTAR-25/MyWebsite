let slideIndex = 1;
showSlides(slideIndex);

// NEXT/PREVIOUS CONTROLS

function changeSlide(n) {
    showSlides(slideIndex += n);

}

// THUMBNAIL IMAGE CONTROLS

function currentSlide(n) {
    showSlides(slideIndex =n);

}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots =document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slide.length } 
    for (i=0; i < slides.length; i++) {
        slides[i].style.display ="none";
    }
    for (i =0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display ="block";
    dots[slideIndex - 1].className += "active"; 
}

