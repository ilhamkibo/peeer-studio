# ADR-0001: Technology Stack

- Status: Accepted
- Tanggal: 2026-11-03

## Konteks

Peeer Studio membutuhkan website portfolio yang kuat secara visual, cepat,
mudah ditemukan mesin pencari, dan dapat berkembang dari konten statis menjadi
aplikasi yang mengambil data melalui API. Frontend dan backend perlu dikelola
dalam satu repository agar kontrak dan workflow pengembangannya tetap selaras.

## Keputusan

### npm workspaces

Project menggunakan npm workspaces dengan aplikasi di `apps/*` karena:

- dependency dan lockfile dapat dikelola dari satu root;
- perintah lint, build, dan development dapat dijalankan lintas aplikasi;
- tidak memerlukan orchestrator monorepo tambahan untuk skala project saat ini;
- npm sudah tersedia bersama Node.js sehingga setup lokal lebih sederhana.

### Next.js dan React untuk frontend

Next.js App Router dipilih karena:

- mendukung server rendering dan static generation untuk performa dan SEO;
- routing berbasis file cocok untuk halaman practice dan detail project;
- optimasi asset dan pemisahan Server/Client Components tersedia secara
  terintegrasi;
- React mendukung komponen UI reusable untuk layout editorial website.

### TypeScript

TypeScript digunakan pada web dan API karena:

- kontrak data dan interface komponen dapat diperiksa saat build;
- refactoring lintas aplikasi lebih aman;
- mengurangi kesalahan bentuk data sebelum runtime.

### Tailwind CSS

Tailwind CSS digunakan untuk styling karena:

- memudahkan penerapan design token dan responsive layout secara konsisten;
- menghasilkan CSS berdasarkan utility yang digunakan;
- tetap memungkinkan custom CSS untuk kebutuhan editorial yang spesifik.

### Motion

Motion digunakan untuk interaksi dan animasi karena menyediakan primitive
animasi React yang deklaratif. Penggunaannya dibatasi pada animasi yang halus
dan memiliki tujuan agar tidak mengganggu aksesibilitas atau performa.

### NestJS untuk backend

NestJS dengan Express adapter dipilih karena:

- struktur module, controller, dan service memberi batas tanggung jawab jelas;
- dependency injection memudahkan testing dan pertumbuhan business logic;
- ekosistemnya menyediakan pola standar untuk validation, configuration,
  authentication, dan persistence ketika dibutuhkan;
- menggunakan TypeScript yang sama dengan frontend.

## Konsekuensi

### Positif

- Satu bahasa dan type system digunakan di seluruh aplikasi.
- Frontend dan API dapat dikembangkan bersama tetapi tetap dapat dijalankan dan
  di-deploy secara independen.
- Struktur siap ditambah package bersama bila kontrak API mulai digunakan oleh
  frontend.

### Trade-off

- `node_modules` dan dependency graph menjadi lebih besar dibanding website
  statis tanpa backend.
- Developer perlu memahami rendering model Next.js dan dependency injection
  NestJS.
- npm workspaces belum menyediakan caching task dan dependency graph build
  seperti orchestrator monorepo khusus; kebutuhan tersebut dievaluasi ulang
  jika jumlah aplikasi atau package bertambah.

## Alternatif yang dipertimbangkan

- Repository terpisah untuk web dan API ditolak karena menambah koordinasi
  versioning dan setup untuk ukuran tim/project saat ini.
- Backend custom berbasis Express ditolak karena membutuhkan lebih banyak
  keputusan struktur dan boilerplate internal.
- Orchestrator seperti Turborepo belum digunakan karena workflow dua aplikasi
  saat ini masih dapat ditangani npm workspaces.

