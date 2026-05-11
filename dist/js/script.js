// Navbar-fix
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};
// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
// humburger
window.addEventListener('click',function(e) {
    if (e.target != hamburger && e.target != navMenu) {
     hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');   
    }
});
// untuk tombol topnya
const toTop = document.querySelector('#to-top');

window.addEventListener('scroll', function () {

    if (window.pageYOffset > 100) {
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }

});
// dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
if (darkToggle.checked){
    html.classList.add('dark');
    localStorage.theme = 'dark';
}else{
    html.classList.remove('dark');
    localStorage.theme = 'light';
}
});
// pindahkan toggle ttp di dark jika kita memilih tombol darknya
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        darkToggle.checked = true;
    }else{
        darkToggle.checked = false;
    }