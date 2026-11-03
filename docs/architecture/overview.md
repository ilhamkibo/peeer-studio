# Architecture Overview

## Tujuan

Peeer Studio dibangun sebagai monorepo untuk website profil dan portfolio
studio arsitektur. Monorepo menyatukan frontend, backend, dependency lockfile,
dan perintah pengembangan dalam satu repository.

## Struktur sistem

```text
peeer-studio/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # NestJS backend
├── docs/             # Dokumentasi arsitektur, ADR, dan produk
├── package.json      # npm workspace dan perintah lint/build/dev
└── package-lock.json # Lockfile tunggal seluruh workspace
```

### Frontend (`apps/web`)

- Menggunakan Next.js App Router dan React.
- Menyajikan halaman profil, practice, dan detail project.
- Menggunakan Server Components secara default.
- Konten portfolio saat ini berasal dari `apps/web/app/lib/work.ts`.
- Asset gambar dan font disimpan di `apps/web/public` dan
  `apps/web/app/fonts`.

### Backend (`apps/api`)

- Menggunakan NestJS dengan adapter Express.
- Seluruh route menggunakan prefix `/api`.
- Menyediakan metadata API melalui `GET /api`.
- Menyediakan health check melalui `GET /api/health`.
- Mengizinkan origin frontend melalui konfigurasi `FRONTEND_URL`.

Backend belum menjadi sumber data portfolio dan belum terhubung ke database.
Perpindahan konten dari file statis ke API harus dilakukan sebagai perubahan
terpisah beserta persistence layer dan strategi migrasinya.

## Runtime lokal

| Komponen | URL default | Konfigurasi |
| --- | --- | --- |
| Web | `http://localhost:3000` | Next.js default |
| API | `http://localhost:3001/api` | `PORT` |
| CORS origin | `http://localhost:3000` | `FRONTEND_URL` |

Kedua aplikasi dapat dijalankan bersamaan dari root dengan `npm run dev`.

## Batas tanggung jawab

- Web bertanggung jawab atas rendering, navigasi, SEO, accessibility, dan
  presentasi visual.
- API bertanggung jawab atas kontrak HTTP, validasi input, business logic,
  serta akses data ketika persistence ditambahkan.
- Root workspace bertanggung jawab atas orkestrasi perintah dan dependency
  resolution lintas aplikasi.

## Prinsip pengembangan

1. Kontrak API harus eksplisit dan backward-compatible bila memungkinkan.
2. Logic domain ditempatkan di service backend, bukan controller.
3. UI menggunakan komponen reusable dan Server Components secara default.
4. Informasi project yang belum dikonfirmasi tidak boleh dipublikasikan sebagai
   fakta.
5. Setiap perubahan arsitektur penting dicatat sebagai ADR baru.

