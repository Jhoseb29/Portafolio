window.addEventListener('load', () => {
    const scan = document.querySelector('.scan')
    scan.style.opacity = 0
    scan.style.visibility = 'hidden'
})       

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}



