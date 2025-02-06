let slideindex = 0;
showslides();

function showslides(){
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
    for ( i = 0 ; i < slides.length; i++){
        slides[i].style.display="none";
    }
    slideindex++;
    if ( slideindex > slides.length ) {
        slideindex = 1
    }
    for ( i = 0 ; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideindex-1].style.display = "block";
    dots[slideindex-1].className += " active";
    setTimeout(showslides,4000);
}

