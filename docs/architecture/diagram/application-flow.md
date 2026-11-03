# Flow Aplikasi

## Flow saat ini

```mermaid
flowchart LR
    U[Pengunjung] -->|HTTP request| W[Next.js Web]
    W --> R[App Router]
    R --> P[Server-rendered Page]
    P --> D[Static portfolio data\napp/lib/work.ts]
    P --> A[Images and fonts\npublic and app/fonts]
    P -->|HTML, CSS, JS| U

    M[Monitoring atau developer] -->|GET /api/health| N[NestJS API]
    N -->|status dan timestamp| M
```

Saat ini website tidak bergantung pada API untuk merender portfolio. Karena itu,
gangguan API tidak menghalangi halaman portfolio statis untuk ditampilkan.

## Flow target ketika data dikelola API

```mermaid
sequenceDiagram
    actor User as Pengunjung
    participant Web as Next.js Web
    participant API as NestJS API
    participant DB as Database

    User->>Web: Membuka halaman portfolio
    Web->>API: GET /api/projects
    API->>DB: Query project published
    DB-->>API: Project, practice, image, note
    API-->>Web: JSON response
    Web-->>User: HTML halaman portfolio

    User->>Web: Membuka detail project
    Web->>API: GET /api/projects/:slug
    API->>DB: Query berdasarkan slug
    DB-->>API: Detail project
    API-->>Web: JSON response atau 404
    Web-->>User: Detail project atau not found
```

Flow target belum diimplementasikan. Penambahan database, endpoint portfolio,
cache, serta penanganan kegagalan API harus dibuat dan diuji sebelum frontend
beralih dari data statis.

