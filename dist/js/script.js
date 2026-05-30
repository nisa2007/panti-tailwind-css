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

   const contact = document.querySelector("#contact form");
const successPopup = document.getElementById("successPopup");
const popupContent = document.getElementById("popupContent");

if (contact) {
    contact.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("message").value.trim();

        // DATA BELUM LENGKAP
        if (nama === "" || email === "" || pesan === "") {

            popupContent.innerHTML = `
    <div class="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
         style="background-color:#FEE2E2;">
        <svg class="w-10 h-10"
             style="color:#EF4444;"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24">
            <path stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M6 6L18 18M18 6L6 18"/>
        </svg>
    </div>

    <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-3">
        Data Belum Lengkap
    </h3>

    <p class="text-slate-600 dark:text-slate-300 mb-6">
        Silakan isi Nama, Email, dan Pesan terlebih dahulu.
    </p>

    <button
    type="button"
    onclick="closePopup()"
    class="bg-primary text-white px-6 py-3 rounded-full hover:opacity-80">
        Tutup
    </button>
`;

            successPopup.classList.remove("opacity-0", "invisible");

            setTimeout(() => {
                popupContent.classList.remove("scale-75");
                popupContent.classList.add("scale-100");
            }, 100);

            // Kosongkan field
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            return;
        }

        // BERHASIL DIKIRIM
        popupContent.innerHTML = `
            <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M5 13l4 4L19 7"/>
                </svg>
            </div>

            <h3 class="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                Pesan Berhasil Dikirim 
            </h3>

            <p class="text-slate-600 dark:text-slate-300 mb-6">
                Pesan yang Anda kirim sudah diterima. Pesan selanjutnya akan dibalas oleh pihak panti melalui email yang Anda masukkan.
            </p>

            <button
            type="button"
            onclick="closePopup()"
            class="bg-primary text-white px-6 py-3 rounded-full hover:opacity-80">
                Tutup
            </button>
        `;

        successPopup.classList.remove("opacity-0", "invisible");

        setTimeout(() => {
            popupContent.classList.remove("scale-75");
            popupContent.classList.add("scale-100");
        }, 100);

        // Kosongkan field
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
}

function closePopup() {
    popupContent.classList.remove("scale-100");
    popupContent.classList.add("scale-75");

    setTimeout(() => {
        successPopup.classList.add("opacity-0");
        successPopup.classList.add("invisible");
    }, 200);
}