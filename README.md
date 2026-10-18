# Taman Siswa Tebing Tinggi

Website promosi statis dengan HTML, CSS, JavaScript, dan aset SVG lokal. Tidak memerlukan npm, proses build, API key, atau database. Desain responsif hijau–krem dengan aksen kuning, ilustrasi kampus, animasi ringan, navigasi mobile, tab unit pendidikan dengan keyboard, FAQ, tautan peta/telepon/email, dan formulir penyusun draf email.

## Menjalankan
Buka `index.html` langsung di browser. Untuk server lokal: `python3 -m http.server 3000`, lalu buka http://localhost:3000. Font Google bersifat opsional; tersedia font pengganti jika internet tidak tersedia.

## Deploy ke Vercel
1. Ekstrak ZIP ini.
2. Buat repository GitHub dan unggah seluruh **isi folder taman-siswa**, termasuk `index.html`, `style.css`, `app.js`, `config.js`, `assets/`, dan `vercel.json` di root repository.
3. Di Vercel pilih Add New → Project → Import repository tersebut.
4. Pilih Framework Preset **Other**. Root Directory adalah folder yang berisi `index.html`. Build Command kosong; Output Directory `.`; tidak perlu Install Command.
5. Klik Deploy. `vercel.json` sudah mengatur deployment statis.

Alternatif CLI pada komputer Anda: pasang Vercel CLI (`npm install -g vercel`), masuk ke folder yang berisi `index.html`, lalu `vercel --prod`. Ikuti login dan pemilihan proyek di Vercel. ZIP ini tidak otomatis menerbitkan website atau membuat akun hosting.

## Mengganti konten
- `config.js`: kontak telepon, email, alamat, dan pencarian peta. Isi nomor telepon internasional bila ingin meningkatkan kompatibilitas panggilan internasional. Tidak ada nomor WhatsApp asumsi.
- `index.html`: judul, teks promosi, FAQ, dan label merek. Bila mengganti nama unit, sesuaikan juga daftar pada `app.js` dan pilihan formulir.
- `app.js`: deskripsi unit pendidikan dan perilaku interaksi.
- `style.css`: warna di `:root`, tipografi, ukuran, dan animasi.
- `assets/mark.svg`: simbol buku/tunas buatan khusus untuk konsep, **bukan logo resmi sekolah**. Ganti dengan logo resmi yang diizinkan.
- `assets/campus.svg`: ilustrasi buatan khusus, **bukan foto atau representasi bangunan sekolah sebenarnya**. Ganti dengan foto sekolah jika tersedia dan pastikan alt text ikut diperbarui.

## Tentang formulir
Formulir memvalidasi nama/pesan dan membuka aplikasi email dengan subject serta isi yang sudah disusun. Pengunjung harus menekan Kirim di aplikasi email sendiri. Ini bukan sistem pendaftaran online, tidak mengirim otomatis, tidak menyimpan data, dan memerlukan aplikasi email yang telah disetel. Alternatif kontak tetap tersedia di halaman. Tidak ada dashboard admin atau klaim bahwa data pendaftaran telah tersimpan.

## Sumber dan batas isi
Informasi yayasan dan daftar unit diambil pada 18 Oktober 2026 dari profil Kemendikdasmen:
https://vervalyayasan.data.kemendikdasmen.go.id/index.php/Chome/profil?yayasan_id=457FE53D-8679-4915-8DF1-2BDA4D7DBF47

Profil mencantumkan Persatuan Perguruan Tamansiswa Cabang Tebing Tinggi, alamat Jl. Deblod Sundoro No. 9, telepon 062121446, email tamansiswatebingtt@gmail.com, serta empat unit TK, SMA, SMK TI, dan SMK Bisnis dan Manajemen. Kontak adalah kontak yayasan, bukan kontak panitia penerimaan yang sudah dikonfirmasi. Konfirmasikan kembali sebelum publikasi resmi.

Teks promosi adalah konsep editorial. Deskripsi unit menjelaskan tujuan pendidikan secara umum, bukan klaim program sekolah. Tidak dibuat angka prestasi, testimoni, rincian jurusan, fasilitas, biaya, jadwal penerimaan, atau status penerimaan aktif. Informasi tersebut perlu disediakan pihak sekolah. Halaman menyertakan penanda konsep dan ilustrasi. Hilangkan penanda konsep hanya setelah persetujuan pemilik sekolah dan penyesuaian konten resmi.

## Pemeriksaan
Struktur HTML, referensi aset, sintaks JavaScript, JSON Vercel, XML SVG, dan integritas ZIP diperiksa secara lokal. Pratinjau browser otomatis dan deployment Vercel tidak dilakukan dari paket ini; tinjau tampilan di browser sebelum publikasi resmi.
