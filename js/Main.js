let navbar = document.querySelector('.header .navbar');
let menu_bar = document.querySelector('#menu');
let close_menu = document.querySelector('#close_nav');

menu_bar.onclick = () =>{
    navbar.classList.add('active');
}
close_menu.onclick = ()=>{
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}