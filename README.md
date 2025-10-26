# Segar Dari Kebun - Website Penjualan Produk Organik

Website modern dan responsif untuk menjual produk kebun organik tanpa pestisida.

## Fitur Utama

✅ **Desain Modern & Menarik**
- UI yang bersih dan modern dengan tema warna natural (hijau)
- Animasi smooth dan transisi yang halus
- Visual yang membuat orang tertarik untuk membeli

✅ **Daftar Produk Lengkap**
- Setiap produk dilengkapi dengan:
  - Foto berkualitas tinggi
  - Nama produk
  - Kategori (Sayuran, Bumbu, dll)
  - Deskripsi lengkap
  - Harga per kg/ikat
  - Badge khusus (HOT, NEW, BEST)

✅ **Penekanan pada Keunggulan "Tanpa Pestisida"**
- Badge "Tanpa Pestisida" di setiap produk
- Hero section yang menonjolkan keunggulan produk organik
- Section khusus "Mengapa Memilih Produk Kami?"
- Penekanan visual pada keamanan dan kesehatan

✅ **Responsive Design**
- Tampilan optimal di desktop, tablet, dan mobile
- Mobile menu yang user-friendly
- Touch-friendly buttons untuk mobile

✅ **Fitur Interaktif**
- Smooth scrolling navigation
- Quick view product details
- Add to cart functionality
- Contact form
- Scroll to top button
- Mobile hamburger menu

## Struktur File

```
.
├── index.html      # Halaman utama
├── styles.css       # Styling dan responsive design
├── script.js        # JavaScript untuk interaktivitas
└── README.md        # Dokumentasi
```

## Cara Menggunakan

1. Buka file `index.html` di browser Anda
2. Untuk mengubah konten produk:
   - Edit bagian product card di `index.html`
   - Ganti gambar produk dengan URL gambar Anda atau simpan lokal
   - Ubah harga, nama, dan deskripsi sesuai produk Anda

3. Untuk mengubah informasi kontak:
   - Edit section contact di `index.html`
   - Update nomor telepon, email, dan alamat

4. Untuk menambah produk:
   - Copy template product card
   - Ganti informasi produk sesuai kebutuhan

## Customization

### Mengubah Warna
Edit variabel CSS di file `styles.css`:

```css
:root {
    --primary-color: #2d8659;    /* Warna hijau utama */
    --secondary-color: #6bcf7f;   /* Warna hijau muda */
    --accent-color: #ff6b6b;      /* Warna aksen */
}
```

### Menambahkan Produk
Template untuk produk baru:

```html
<div class="product-card">
    <div class="product-image">
        <img src="URL_GAMBAR" alt="Nama Produk">
    </div>
    <div class="product-info">
        <h3 class="product-name">Nama Produk</h3>
        <p class="product-category">Kategori</p>
        <p class="product-description">Deskripsi produk...</p>
        <div class="product-features">
            <span><i class="fas fa-check"></i> Tanpa Pestisida</span>
            <span><i class="fas fa-check"></i> Organik</span>
        </div>
        <div class="product-footer">
            <span class="product-price">Rp Harga<span>/satuan</span></span>
            <button class="btn-add-cart"><i class="fas fa-shopping-cart"></i> Beli</button>
        </div>
    </div>
</div>
```

## Tips untuk Foto Produk

- Gunakan foto yang jelas dan berkualitas tinggi
- Pastikan latar belakang bersih atau blur
- Gunakan pencahayaan yang baik
- Crop foto dengan proporsi yang sama untuk konsistensi

## Kontak & Informasi

Sesuaikan informasi kontak di file `index.html` pada bagian:
- Hero section
- Contact section
- Footer

## Browser Support

Website ini mendukung semua browser modern:
- Chrome
- Firefox
- Safari
- Edge

## Teknologi yang Digunakan

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (Vanilla)
- Google Fonts (Poppins)
- Font Awesome Icons

## Lisensi

© 2024 Segar Dari Kebun. All rights reserved.

