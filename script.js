// Fungsi untuk menghitung luas
function hitungLuas() {
    // Mengambil nilai panjang dan lebar dari input
    var panjang = document.getElementById('length').value;
    var lebar = document.getElementById('width').value;

    // Memeriksa apakah panjang atau lebar kosong
    if (panjang === '' || lebar === '') {
        // Jika salah satu atau keduanya kosong, tampilkan pesan dan hentikan fungsi
        alert('Masukkan panjang dan lebar terlebih dahulu');
        return;
    }

    // Menghitung luas berdasarkan panjang dan lebar
    var luas = panjang * lebar;

    // Menampilkan hasil luas di elemen dengan id 'result'
    document.getElementById('result').innerHTML = `Hasil: ${luas} cm2`;
}
