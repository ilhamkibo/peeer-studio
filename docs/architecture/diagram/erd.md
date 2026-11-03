# Entity Relationship Diagram

## Status

Diagram berikut adalah rancangan model data untuk fase ketika portfolio telah
dipindahkan dari file statis frontend ke database. Implementasi saat ini belum
memiliki database; sumber data masih berada di `apps/web/app/lib/work.ts`.

```mermaid
erDiagram
    PRACTICE ||--o{ PROJECT : categorizes
    PROJECT ||--o{ PROJECT_IMAGE : has
    PROJECT ||--o{ PROJECT_NOTE : contains

    PRACTICE {
        uuid id PK
        string slug UK
        string title
        string number
        string headline
        text introduction
        datetime created_at
        datetime updated_at
    }

    PROJECT {
        uuid id PK
        uuid practice_id FK
        string slug UK
        string title
        text description
        string status
        datetime published_at
        datetime created_at
        datetime updated_at
    }

    PROJECT_IMAGE {
        uuid id PK
        uuid project_id FK
        string url
        string alt_text
        string caption
        int sort_order
    }

    PROJECT_NOTE {
        uuid id PK
        uuid project_id FK
        string title
        text body
        int sort_order
    }
```

## Aturan model

- `slug` pada practice dan project harus unik dan URL-safe.
- Satu project berada dalam satu practice; satu practice dapat memiliki banyak
  project.
- Project dapat memiliki nol atau lebih gambar dan catatan.
- `alt_text` wajib diisi untuk gambar informatif.
- `sort_order` menentukan urutan tampilan gambar dan catatan.
- Project hanya dapat ditampilkan kepada publik ketika statusnya `published`.

