function penjualanBuku(
    data, diskon = 10, pajak = 10) {
    let result = 0;
    if (data && data.harga) {
        const jumlahDiskon = data.harga * (diskon / 100);
        const hargaSetelahDiskon = data.harga - jumlahDiskon;
        const jumlahPajak = hargaSetelahDiskon * (pajak / 100);
        const hargaSetelahPajak = hargaSetelahDiskon + jumlahPajak;

        console.log(`Judul Buku\t\t: ${data.judul}`);
        console.log(`Jumlah Diskon\t: Rp.${jumlahDiskon}`);
        console.log(`Harga Setelah Diskon\t: Rp.${hargaSetelahDiskon}`);
        console.log(`Jumlah Pajak\t\t: Rp.${jumlahPajak}`);
        console.log(`Harga Setelah Pajak\t\t: Rp.${hargaSetelahPajak}`);
    }
    return result;
}

penjualanBuku({ 
    judul: "Bumi Manusia", harga: 110000, printingStatus: true 
}, 10, 10);
console.log("");

penjualanBuku({ 
    judul: "Laskar Pelangi", harga: 69300, printingStatus: true 
}, 10, 10);
console.log("");

penjualanBuku({ 
    judul: "Anak Semua Bangsa", harga: 118800, printingStatus: true 
}, 10, 10);
console.log("");