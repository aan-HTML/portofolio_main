<div align="center">

# ✦ aan.my.id

**Website portfolio & personal Annasirat**

[![Live](https://img.shields.io/badge/🌐_Live_Website-aan.my.id-fbbf24?style=for-the-badge&labelColor=0d1117)](https://aan.my.id)
[![GitHub](https://img.shields.io/badge/GitHub-aan--HTML-30363d?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aan-HTML)
[![Instagram](https://img.shields.io/badge/Instagram-ann.x10-e1306c?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/ann.x10)

<br/>

![Preview](https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=900&q=80)

<br/>

> *"Tampilan yang baik bukan hanya soal estetika, tapi juga struktur, performa,*
> *dan detail interaksi yang bikin pengguna betah."*

</div>

---

## 👋 Tentang Proyek

Website personal yang dibangun dari nol — tanpa framework besar, tanpa build tool, murni **Vanilla HTML/CSS/JavaScript**. Fokus pada desain modern, performa cepat, dan pengalaman pengguna yang nyaman di semua perangkat.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🌓 **5 Tema** | Dark, Light, Dim (Yellow), Ramadan, Valentine |
| 🌐 **Bilingual** | Bahasa Indonesia & English, bisa beralih kapan saja |
| 📐 **2 Layout** | Sidebar (default) & Topbar — tersimpan di localStorage |
| ⌨️ **Command Palette** | Navigasi cepat via `Ctrl+K` |
| 📱 **Responsive** | Mobile-first, drawer menu khusus HP |
| ⚡ **Performa** | Tanpa framework berat, lazy loading gambar |
| 🔍 **SEO Ready** | Meta OG, Twitter Card, JSON-LD Structured Data |

---

## 📄 Halaman

```
/  ── Beranda      → Hero section + skill stack
     Tentang       → Bio, karier, pendidikan
     Pencapaian    → Galeri sertifikat & lencana (filter + search)
     Proyek        → Showcase project (filter tipe & kategori)
     Kegunaan      → Setup hardware, editor, tech stack
     Kontak        → Link media sosial
     Links         → Kumpulan tautan penting
```

---

## 🛠️ Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Devicon](https://img.shields.io/badge/Devicon-CDN-gray?style=flat-square)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white)

</div>

- **Bahasa:** HTML5, CSS3, Vanilla JavaScript (ES2021+)
- **Font:** Plus Jakarta Sans + JetBrains Mono
- **Icon:** Devicon CDN + SVG inline custom
- **Storage:** `localStorage` untuk tema, layout, bahasa
- **Tanpa** bundler, tanpa framework, tanpa dependensi npm

---

## 📁 Struktur Folder

```
aan.my.id/
├── index.html              # Entry point utama
├── css/
│   ├── style.css           # Stylesheet utama (variabel tema, komponen)
│   └── enhancements.css    # Efek hover, animasi, glow
├── js/
│   ├── icons.js            # SVG icon registry
│   ├── data.js             # Data konten (profil, proyek, sertifikat, dll.)
│   └── app.js              # Logic utama (render, routing, i18n, state)
└── img/
    ├── avatar.webp
    ├── proyek/             # Screenshot proyek
    └── sertifikat/         # Gambar sertifikat
```

---

## 🚀 Cara Jalankan

Tidak perlu build step apapun. Cukup:

```bash
# Clone repo
git clone https://github.com/aan-HTML/aan.my.id.git

# Buka langsung di browser
open index.html
```

Atau gunakan Live Server di VS Code untuk development:

```
Klik kanan index.html → Open with Live Server
```

---

## 🎨 Kustomisasi

Semua konten dikelola di **`js/data.js`** — tidak perlu menyentuh HTML sama sekali.

```js
// Ganti profil
DATA.profile.name = "Nama Kamu"
DATA.profile.avatar = "img/foto-kamu.webp"

// Tambah proyek baru
DATA.projects.items.push({
  title: "Nama Proyek",
  desc: "Deskripsi singkat.",
  tech: ["React", "Tailwind"],
  type: "Web",
  category: "Proyek Pribadi",
  featured: false,
  links: [{ label: "Live", url: "https://..." }]
})

// Tambah sertifikat
DATA.achievements.push({
  id: "ach-10",
  code: "KODE123",
  title: "Nama Sertifikat",
  org: "Lembaga",
  type: "Course",
  category: "Frontend",
  date: "April 2026",
  image: "img/sertifikat/nama.png",
  credentialUrl: "https://..."
})
```

Terjemahan (Indonesia ↔ English) dikelola di objek `I18N` dalam **`js/app.js`**.

---

## 📸 Screenshot

<div align="center">

| Dark Mode | Light Mode |
|:---------:|:----------:|
| *Sidebar layout, tema gelap* | *Sidebar layout, tema terang* |

</div>

---

## 📬 Kontak

<div align="center">

Punya pertanyaan, feedback, atau mau kolaborasi?

[![Email](https://img.shields.io/badge/Email-aan27052010@email.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:aan27052010@email.com)
[![Instagram](https://img.shields.io/badge/Instagram-@ann.x10-E1306C?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/ann.x10)
[![GitHub](https://img.shields.io/badge/GitHub-aan--HTML-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aan-HTML)

</div>

---

<div align="center">

**Dibuat dengan ☕ dan 🎧 oleh [Annasirat](https://aan.my.id)**

*Bima, Nusa Tenggara Barat · 2025 – 2026*

</div>
