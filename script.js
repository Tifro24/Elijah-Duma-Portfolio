const title = new Typed("#title",{
    strings : ["Elijah Duma"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

const vid1 = document.querySelector('#vid1')
const vid2 = document.querySelector('#vid2')

vid1.addEventListener('mouseenter', () =>{
    vid1.play()
})

vid1.addEventListener('mouseleave', () =>{
    vid1.pause()
})

vid2.addEventListener('mouseenter', () =>{
    vid2.play()
})

vid2.addEventListener('mouseleave', () =>{
    vid2.pause()
})


const sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = '0'
}

function closemenu(){
    sidemenu.style.right = '-200px'
}

window.addEventListener('scroll', reveal)

function reveal(){

    const reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i< reveals.length; i++){
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
}