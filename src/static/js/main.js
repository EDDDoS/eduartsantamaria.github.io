// Parallax
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(Layer => {
        const speed = Layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        Layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}

// Lateral Menu
const menu = document.querySelector('.menu');
const rmenu = document.querySelector('.responsive-menu');
const rmenuEnlace = document.querySelector('.responsive-menu a');

menu.addEventListener('click', ()=>{
    rmenu.classList.toggle('responsive-menu-show');
});

function remove(){
    rmenu.classList.remove('responsive-menu-show');
}