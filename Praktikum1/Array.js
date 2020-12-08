let jurusan = ["Rekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]

let tingkatan_kelas = [10,11,12]

let siswa = [
    {
        nama: "Yaya", jurusan: "RPL"
    },
    {
        nama: "Ying", jurusan: "TKJ"
    },
    {
        nama: "Gopal", jurusan: "RPL"
    }
]

console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);


let kota = ["Malang", "Surabaya", "Tulungagung"]

console.log("Isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("-------------------------");

//tambah data kota baru
kota.push("Banyuwangi")

console.log("Isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

console.log("-------------------------");

let barang = [
    { nama: "Rinsoo", harga: 5000},
    { nama: "Moonlight", harga: 4000}
]

console.log("Isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("-------------------------");

//tambah data barang baru
barang.push(
    { nama: "Mloto", harga: 1000}
)

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);


let siswa = [
    { nama_depan: "Jack", nama_belakang: "Ma" },
    { nama_depan: "Johnny", nama_belakang: "English" },
    { nama_depan: "John", nama_belakang: "Cena" }
]

// menampilkan nama lengkap dari array
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)