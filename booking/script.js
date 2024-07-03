// Data hotel dan harga
const hotels = [
  { name: "Hotel Mulia Senayan, Jakarta", price: "Rp 2.500.000 per malam" },
  { name: "The Ritz-Carlton Bali", price: "Rp 3.000.000 per malam" },
  { name: "Amanjiwo Resort, Yogyakarta", price: "Rp 5.000.000 / malam" },
  { name: "Hotel Majapahit, Surabaya", price: "Rp 1.500.000 / malam" },
];

// Fungsi untuk menampilkan harga saat memilih hotel
function showHotelPrice() {
  const selectedHotel = document.getElementById("pilih-hotel").value;
  const hargaInput = document.getElementById("harga");

  // Cari harga berdasarkan hotel yang dipilih
  const hotel = hotels.find((hotel) => hotel.name === selectedHotel);

  // Set nilai input harga jika hotel ditemukan
  if (hotel) {
    hargaInput.value = hotel.price;
  } else {
    hargaInput.value = "";
  }
}

// Panggil fungsi showHotelPrice setiap kali pilihan hotel berubah
document
  .getElementById("pilih-hotel")
  .addEventListener("change", showHotelPrice);

// Fungsi untuk mengirim formulir booking
function submitForm() {
  // Tambahkan logika pengiriman formulir sesuai kebutuhan
  // Contoh:
  alert("Formulir berhasil dikirim!");
}

// Fungsi untuk mencetak detail booking
function printDetails() {
  // Tambahkan logika pencetakan detail sesuai kebutuhan
  // Contoh:
  alert("Detail booking akan dicetak!");
}
