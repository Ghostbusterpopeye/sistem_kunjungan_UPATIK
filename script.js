// script.js - Multi-Page Architecture Version
document.addEventListener('DOMContentLoaded', () => {

    // Fungsi Login Simulation (Menggunakan Session Storage)
    window.loginUser = function() {
        const usernameInput = document.getElementById('login-id').value;
        
        if (!usernameInput) {
            alert('Silakan masukkan identitas!');
            return;
        }

        if(usernameInput.toLowerCase() === 'admin') {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userRole', 'admin');
            alert('Login Admin Berhasil!');
            window.location.href = 'admin-dashboard.html';
        } else {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userRole', 'user');
            alert('Login User Berhasil!');
            window.location.href = 'user-riwayat.html';
        }
    };

    // Fungsi Logout Simulation
    window.logoutUser = function() {
        const confirmLogout = confirm('Apakah Anda yakin ingin keluar?');
        if (confirmLogout) {
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userRole');
            window.location.href = 'index.html';
        }
    };

    // Fungsi Buka Tutup Modal Admin
    window.openModal = function() {
        const modal = document.getElementById('modal-detail');
        if(modal) modal.classList.add('active');
    };

    window.closeModal = function() {
        const modal = document.getElementById('modal-detail');
        if(modal) modal.classList.remove('active');
    };
});