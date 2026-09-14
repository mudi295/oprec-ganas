# Google Sheets Database + Dashboard Panitia

## 1. Buat database
Buat Google Spreadsheet baru. Buka **Extensions → Apps Script** dan ganti seluruh kode dengan `docs/google-apps-script-Code.gs`.

Di bagian atas kode, ubah:

```js
const ADMIN_KEY = 'GANTI_DENGAN_ADMIN_KEY_RAHASIA';
```

menjadi key acak milik panitia, misalnya string panjang yang sulit ditebak.

## 2. Deploy
**Deploy → New deployment → Web app**
- Execute as: **Me**
- Who has access: **Anyone**
- Deploy

Salin URL yang berakhiran `/exec`.

## 3. Konfigurasi website
Buat file `.env` di root project:

```env
VITE_REGISTRATION_ENDPOINT=https://script.google.com/macros/s/ID/exec
VITE_PANITIA_ADMIN_KEY=KEY_YANG_SAMA_DENGAN_APPS_SCRIPT
VITE_PANITIA_PASSWORD=PASSWORD_PANITIA
```

Restart `npm run dev` setelah mengubah `.env`.

## 4. Struktur spreadsheet
Tab `Pendaftaran` dibuat otomatis. Kolomnya:
Timestamp, Nomor Pendaftaran, Email, Nama Lengkap, NIM, Kelas, Jurusan, Pilihan Divisi 1, Pilihan Divisi 2, Motivasi Masuk Kepengurusan, Pengalaman Organisasi, Status Seleksi, Catatan Panitia.

Nomor dibuat server-side dan berurutan: `GANAS-2026-0001`, `GANAS-2026-0002`, dst. LockService mencegah dua submit bersamaan mendapatkan nomor yang sama.

## 5. Dashboard
Buka:
`/panitia`

Masukkan password yang sama dengan `VITE_PANITIA_PASSWORD`.

Dashboard menyediakan statistik, pencarian nama/NIM/email/nomor, filter divisi, filter status, detail pendaftar, dan perubahan status seleksi.

### Catatan keamanan
Password frontend adalah proteksi dasar UI, bukan autentikasi tingkat tinggi. ADMIN_KEY melindungi endpoint Apps Script, tetapi karena website frontend bersifat publik, key tetap dapat terlihat oleh pengguna yang memahami request browser. Untuk data sensitif/produksi, gunakan backend serverless dengan autentikasi panitia atau Google OAuth.
