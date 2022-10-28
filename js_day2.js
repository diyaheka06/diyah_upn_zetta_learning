function penjualanBuku(
    data, diskon = 10, pajak = 10, stok = 15, banyak = 1) 
    {
    let result = 0;
    let beli = 0;
    let repurchase = true;

    for (let i = 0; i < banyak; i++){
        if(i>stok-1){
            repurchase = false;
        }
        beli++;
    }
    if (data && data.harga) {
        const jumlahDiskon = data.harga * (diskon / 100);
        const hargaSetelahDiskon = data.harga - jumlahDiskon;
        const jumlahPajak = hargaSetelahDiskon * (pajak / 100);
        const hargaSetelahPajak = hargaSetelahDiskon + jumlahPajak;

        console.log(`Judul Buku\t\t: ${data.judul}`);
        console.log(`Sisa Stok\t\t: ${stok}`);
        console.log(`Jumlah Checkout\t\t: ${beli}`);
        console.log(`Jumlah Diskon\t: Rp.${jumlahDiskon}`);
        console.log(`Harga Setelah Diskon\t: Rp.${hargaSetelahDiskon}`);
        console.log(`Jumlah Pajak\t\t: Rp.${jumlahPajak}`);
        console.log(`Harga Setelah Pajak\t\t: Rp.${hargaSetelahPajak}`);

        if(repurchase && (stok - beli > 0)){
            console.log ('stok masih tersedia');
        }
        else{
            console.log ('Stok sudah habis!');
        }
    }
    return result;
}

penjualanBuku({ 
    judul: "Bumi Manusia", harga: 110000, printingStatus: true 
}, 10, 10, 12, 1);
console.log("");

penjualanBuku({ 
    judul: "Laskar Pelangi", harga: 69300, printingStatus: true 
}, 10, 10, 30, 1);
console.log("");

penjualanBuku({ 
    judul: "Anak Semua Bangsa", harga: 118800, printingStatus: true 
}, 10, 10, 17, 1);
console.log("");