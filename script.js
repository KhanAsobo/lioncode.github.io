/*====================scroll section active link=============*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
};
/*====================scroll section active link=============*/
let section =document.queryselectorAll('section');
let navlinks =document.queryselectorAll('header nav a');

window.onscroll  = ()=>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id +']').classList.add('active');
            });
        };
        
    });
    /*====================sticky navbar=============*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
     /*====================remove toggle icon and navbar when click  navbar (scroll)=============*/
     menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');
}; 
/*====================r (scroll) reveal=============*/
scrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
scrollReveal().reveal('.home-content, .heading',{origin: 'top'});
scrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form',{origin: 'bottom'});
scrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
scrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});