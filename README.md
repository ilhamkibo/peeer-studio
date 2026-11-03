# Peeer Studio

Monorepo untuk website Peeer Studio dan backend API-nya.

## Struktur

- `apps/web` — frontend Next.js
- `apps/api` — backend NestJS

## Menjalankan project

```bash
npm install
npm run dev
```

Frontend berjalan di `http://localhost:3000` dan API di
`http://localhost:3001/api`. Health check tersedia di
`http://localhost:3001/api/health`.

Perintah untuk menjalankan salah satu aplikasi saja:

```bash
npm run dev:web
npm run dev:api
```

## Environment API

Salin `apps/api/.env.example` menjadi `apps/api/.env` bila perlu mengubah
port atau origin frontend yang diizinkan.
