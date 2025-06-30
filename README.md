# 📝 Todo List App (Express.js + HTML Bootstrap)

Aplikasi Todo List sederhana yang dibuat menggunakan **Node.js (Express.js)** untuk backend dan **HTML & JS + Bootstrap** untuk frontend. Aplikasi ini mendukung fitur CRUD (Create, Read, Update, Delete) dengan penyimpanan data menggunakan file JSON lokal.

---

## 📁 Struktur Folder

```
todolist/
│
├── app.js                      # Entry point aplikasi Express.js
├── package.json               # Konfigurasi npm dan dependency
│
├── routes/
│   └── todosRoute.js          # Rute untuk API todo
│
├── controllers/
│   └── todosController.js     # Fungsi handler untuk masing-masing endpoint
│
├── models/
│   └── todosModel.js          # Logika data (CRUD + baca/tulis file JSON)
│
├── data/
│   └── todosData.json         # File penyimpanan data todo (sebagai database lokal)
│
├── public/
│   └── index.html             # Frontend HTML menggunakan Bootstrap
│
└── README.md                  # Dokumentasi proyek
```

---

## ⚙️ Cara Menjalankan Aplikasi

1. Clone atau download repository ini.
2. Buka terminal di dalam folder project.
3. Jalankan perintah berikut untuk meng-install dependencies:

   ```bash
   npm install
   ```
4. Jalankan server menggunakan perintah:

   ```bash
   node app.js
   ```
5. Buka file `public/index.html` di browser (karena tidak menggunakan view engine, frontend diakses langsung lewat file HTML).

> ⚠️ Pastikan file `todosData.json` sudah ada di folder `data/`. Jika belum, buat file tersebut secara manual dengan isi awal `[]`.

---

## 🔄 Endpoint API

| Method | URL          | Deskripsi                     |
| ------ | ------------ | ----------------------------- |
| GET    | `/todos`     | Mengambil semua todo          |
| POST   | `/todos`     | Menambah todo baru            |
| PUT    | `/todos/:id` | Mengedit todo berdasarkan ID  |
| DELETE | `/todos/:id` | Menghapus todo berdasarkan ID |

Contoh format JSON request:

```json
{
  "task": "Belajar Express.js"
}
```

---

## 🎨 Tampilan Frontend

Frontend dibuat dengan:

* HTML5
* Bootstrap 5
* JavaScript (fetch API)

### Fitur:

* Menampilkan list todo
* Menambah todo baru
* Mengedit todo yang ada
* Menghapus todo
* Tampilan responsif dan sederhana

Semua aksi dilakukan secara asynchronous tanpa reload halaman.

---

## 📚 Catatan Teknis

* Backend menggunakan Express.js sebagai REST API server.
* Data tidak menggunakan database seperti MongoDB atau MySQL, tapi hanya disimpan di `todosData.json`.
* Untuk ID unik, digunakan library `uuid`.
* File JSON dibaca dan ditulis menggunakan modul `fs` dari Node.js.
* Frontend tidak terhubung langsung ke Express (tidak menggunakan template engine), tetapi dipisah dalam folder `public/`.

---

## 🧑‍💻 Author

> Dibuat oleh **Luvi Aprilyansyah Gabriel** dalam rangka belajar Fullstack Development secara manual tanpa framework frontend besar seperti React.

> Tujuan: memahami dasar-dasar Express.js, routing, controller, model, serta manipulasi data JSON secara lokal.

---

## 💡 Next Improvement (Opsional)

* Tambahkan validasi data
* Simpan data ke database seperti MongoDB
* Belajar React
* Deploy ke platform seperti Vercel / Render / Railway
