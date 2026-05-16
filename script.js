// ==================================================
// LOGIKA SISTEM ABSENSI - ATTENDANCE SYSTEM
// DIBUAT DAN DIPROGRAM OLEH:
//           FAHRIL PROJECT
// VERSI: 1.0.0 | TAHUN: 2026
// KODE INI ADALAH MILIK PENGEMBANG
// ==================================================

// Fungsi Tombol Get Started
function pesanMulai() {
    alert("✅ SELAMAT DATANG!\n\nSistem ini dikembangkan sepenuhnya oleh:\n👨‍💻 FAHRIL PROJECT 👨‍💻\n\nSemua fitur dan kode dibuat tangan dingin Fahril.");
}

// Fungsi Tombol Learn More
function pesanInfo() {
    alert("ℹ️ INFORMASI SISTEM:\n\n• Nama Produk: Attendance System\n• Pengembang: Fahril PROJECT\n• Teknologi: HTML, CSS, JavaScript\n• Hak Cipta: Dilindungi Undang-Undang © 2026\n\nKarya Asli Anak Bangsa!");
}

// Fungsi Login Admin
function loginAdmin() {
    let user = prompt("Masukkan Username:\n(Hanya untuk Fahril PROJECT)");
    let pass = prompt("Masukkan Kata Sandi:");

    if(user === "fahril_admin" && pass === "dev2026") {
        alert("🔐 LOGIN BERHASIL!\nSelamat datang kembali, Fahril.\nAnda adalah pemilik tunggal sistem ini.");
    } else {
        alert("❌ AKSES DITOLAK!\nHanya Fahril PROJECT yang boleh masuk.");
    }
}

// SIMULASI DATABASE BUATAN SENDIRI
let DataAbsensi = [];

function CatatKehadiran(nama, status) {
    let waktu = new Date().toLocaleString('id-ID');
    DataAbsensi.push({
        nama: nama,
        status: status,
        waktu: waktu,
        dicatatOleh: "Sistem Buatan Fahril PROJECT"
    });
    alert("Data berhasil disimpan ke sistem karya Fahril!");
}

// JALAN SAAT DIBUKA
window.onload = function() {
    console.log("%c ====================================== ", "color: #ffd700;");
    console.log("%c  ATTENDANCE SYSTEM - BY FAHRIL PROJECT ", "color: #ffd700; font-weight: bold;");
    console.log("%c  HAK CIPTA © 2026 - SEMUA HAK DILINDUNGI  ", "color: #ffd700;");
    console.log("%c ====================================== ", "color: #ffd700;");
};
