document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistem Siap!");

    // Fungsi Navigasi Halaman
    window.navigateTo = function(pageId) {
        // Sembunyikan semua section yang punya class 'page'
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        // Tampilkan halaman yang diklik
        const target = document.getElementById(`page-${pageId}`);
        if (target) {
            target.classList.add('active');
        }

        // Update tampilan menu di sidebar agar terlihat mana yang aktif
        const menuItems = document.querySelectorAll('.sidebar ul li');
        menuItems.forEach(item => {
            item.classList.remove('active');
            if(item.innerText.toLowerCase().includes(pageId)) {
                item.classList.add('active');
            }
        });
    };

    // Fungsi Carousel
    let currentSlide = 0;
    window.moveCarousel = function(direction) {
        const img = document.querySelector('.main-logo');
        // Tambahkan efek kedip saat ganti gambar
        img.style.opacity = '0.5';
        setTimeout(() => {
            img.style.opacity = '1';
            console.log("Slide berpindah ke: " + direction);
        }, 100);
    };
});

// Fungsi navigasi yang lebih aman
function navigateTo(pageId) {
    // Sembunyikan semua page
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');

    // Tampilkan page tujuan
    const target = document.getElementById(`page-${pageId}`);
    if (target) {
        target.style.display = 'block';
    }

    // Scroll otomatis ke atas jika pindah halaman
    window.scrollTo(0, 0);
}

// Jalankan home saat pertama kali buka
window.onload = () => {
    navigateTo('home');
};

window.navigateTo = function(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.style.display = 'none';
        p.classList.remove('active');
    });

    const target = document.getElementById(`page-${pageId}`);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active');
    }
    
    // Update menu aktif di semua sidebar
    const allMenus = document.querySelectorAll('.sidebar ul li');
    allMenus.forEach(li => {
        li.classList.remove('active');
        if (li.innerText.toLowerCase().includes(pageId === 'form-layanan' ? 'layanan' : pageId)) {
            li.classList.add('active');
        }
    });
};