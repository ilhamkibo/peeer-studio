# Product Requirements

## Ringkasan

Peeer Studio adalah website profil dan portfolio untuk studio arsitektur dan
interior di Jakarta. Produk harus menampilkan identitas, layanan, dan karya
studio melalui pengalaman editorial yang cepat, accessible, dan responsif.

## Tujuan

1. Memperkenalkan identitas dan bidang praktik Peeer Studio.
2. Menampilkan project melalui visual dan informasi yang akurat.
3. Membantu calon klien memahami layanan studio.
4. Menyediakan fondasi teknis untuk pengelolaan konten melalui API di masa
   mendatang.

## Pengguna

- Pemilik bisnis yang membutuhkan commercial architecture atau interior.
- Pengembang properti komersial.
- Klien residential.
- Pengunjung yang ingin mempelajari pendekatan dan karya Peeer Studio.

## Functional requirements

### Website

- `FR-WEB-001`: Pengunjung dapat membuka landing page yang memperkenalkan
  Peeer Studio.
- `FR-WEB-002`: Pengunjung dapat melihat daftar bidang praktik: commercial
  architecture, residential architecture, interior design, dan architectural
  planning.
- `FR-WEB-003`: Pengunjung dapat membuka halaman setiap practice melalui slug.
- `FR-WEB-004`: Pengunjung dapat melihat daftar project yang tersedia.
- `FR-WEB-005`: Pengunjung dapat membuka detail project melalui slug.
- `FR-WEB-006`: Setiap gambar project informatif memiliki alternative text.
- `FR-WEB-007`: Navigasi dapat digunakan dengan keyboard dan menyediakan focus
  state yang terlihat.
- `FR-WEB-008`: Halaman yang tidak ditemukan menampilkan respons 404.
- `FR-WEB-009`: Website menampilkan informasi kontak atau jalur menuju kanal
  kontak resmi studio.

### API saat ini

- `FR-API-001`: API dapat diakses dengan prefix `/api`.
- `FR-API-002`: `GET /api` mengembalikan nama dan versi API.
- `FR-API-003`: `GET /api/health` mengembalikan status dan timestamp.
- `FR-API-004`: API hanya menerima browser origin yang dikonfigurasi melalui
  `FRONTEND_URL`.

### API portfolio — rencana

- `FR-API-101`: API menyediakan daftar project berstatus published.
- `FR-API-102`: API menyediakan detail project berdasarkan slug.
- `FR-API-103`: API menyediakan daftar practice dan relasinya dengan project.
- `FR-API-104`: API mengembalikan 404 untuk slug yang tidak ditemukan.
- `FR-API-105`: Input pengelolaan konten harus divalidasi sebelum disimpan.

Requirement bernomor `FR-API-1xx` belum termasuk scope implementasi saat ini.

## Non-functional requirements

- `NFR-001 Performance`: Halaman publik memprioritaskan server rendering atau
  static generation dan meminimalkan JavaScript client yang tidak diperlukan.
- `NFR-002 Accessibility`: Navigasi keyboard, focus state, semantic HTML, alt
  text, dan preferensi reduced motion harus diperhatikan.
- `NFR-003 Responsive`: Layout berfungsi pada viewport mobile dan desktop tanpa
  horizontal overflow.
- `NFR-004 SEO`: Halaman publik memiliki metadata yang relevan dan konten utama
  tersedia pada HTML awal.
- `NFR-005 Accuracy`: Nama, deskripsi, dan detail project hanya dipublikasikan
  setelah dikonfirmasi oleh Peeer Studio.
- `NFR-006 Security`: Secret tidak disimpan di repository dan konfigurasi lokal
  menggunakan environment variable.
- `NFR-007 Maintainability`: Web dan API harus lolos lint/type-check dan build
  sebelum perubahan digabungkan.
- `NFR-008 Observability`: Deployment API menyediakan health endpoint untuk
  pemeriksaan ketersediaan.

## Di luar scope saat ini

- Dashboard CMS atau admin.
- Authentication dan role management.
- Database production.
- Form inquiry yang menyimpan data calon klien.
- Pembayaran, booking, atau transaksi.
- Multibahasa.

## Kriteria penerimaan release saat ini

1. `npm install` dari root memasang dependency seluruh workspace.
2. `npm run dev` menjalankan web dan API bersamaan.
3. Frontend dapat diakses pada port default dan route yang tersedia dapat
   dirender.
4. Health endpoint API mengembalikan HTTP 200 dan status `ok`.
5. Lint/type-check, unit test API, dan production build berhasil.
6. Tidak ada informasi project provisional yang ditampilkan sebagai fakta yang
   telah dikonfirmasi.

