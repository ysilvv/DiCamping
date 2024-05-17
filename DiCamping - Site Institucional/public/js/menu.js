

function menuScroll (){
    const scroll = window.scrollY;
    if (scroll > 0) {
        document.querySelector('nav').classList.add("active") 
        document.querySelector('#logo').src="img/DICAMPING_LOGOPRETA.png"
    } else {
        document.querySelector('nav').classList.remove("active") 
        document.querySelector('#logo').src="img/DICAMPING_LOGOBRANCA.png"
    }
}

document.addEventListener('scroll', menuScroll)