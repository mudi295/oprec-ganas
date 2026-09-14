# GANAS Nusa Putra — Open Recruitment 2026–2027

Microsite recruitment berbasis React + Vite + Tailwind CSS, menggunakan desain Stitch sebagai referensi visual.

## Fitur
- Cinematic landing page
- Background video MP4
- Form pendaftaran responsif
- Validasi field
- Pilihan divisi 1 dan 2 tidak boleh sama
- Nomor registrasi otomatis
- Success page + copy nomor registrasi
- CTA grup WhatsApp
- Integrasi Google Sheets melalui Google Apps Script

## Menjalankan lokal

```bash
npm install
cp .env.example .env
npm run dev
```

Isi `VITE_REGISTRATION_ENDPOINT` dengan URL Web App Google Apps Script.

## Background video

Simpan video recruitment di:

`public/assets/videos/ganas-recruitment.mp4`

Jika video belum tersedia, landing page tetap menggunakan poster fallback.

## Google Sheets

1. Buat Google Spreadsheet.
2. Buka **Extensions → Apps Script**.
3. Copy isi `docs/google-apps-script-Code.gs` ke `Code.gs`.
4. Deploy sebagai **Web app**.
5. Set **Execute as: Me** dan **Who has access: Anyone**.
6. Copy URL `/exec` ke `.env`.
7. Restart Vite setelah mengubah `.env`.

Panduan lengkap ada di `docs/GOOGLE_SHEETS_SETUP.md`.

## Build production

```bash
npm run build
npm run preview
```

Project ini tidak memakai backend Node/Express, database, Laravel, atau Next.js.
