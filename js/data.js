const DATA = {
  profile: {
    name: "Annasirat",
    avatar: "img/avatar.webp",
    status: "Ayo Berkolaborasi",
    email: "aan27052010@email.com",
    github: "https://github.com/aan-HTML",
    instagram: "https://instagram.com/ann.x10",
    linkedin: "www.linkedin.com/in/aan270510",
    whatsapp: "https://wa.me/6282352685242"
  },

  themes: [
    { id: "light", icon: "sun", title: "Light" },
    { id: "dark", icon: "moon", title: "Dark" },
    { id: "dim", icon: "bolt", title: "Yellow" },
    { id: "contrast", icon: "half", title: "Ramadan" },
    { id: "focus", icon: "heart", title: "Valentine" }
  ],

  nav: [
    { id: "beranda", label: "Beranda", icon: "home" },
    { id: "tentang", label: "Tentang", icon: "user" },
    { id: "pencapaian", label: "Pencapaian", icon: "award" },
    { id: "proyek", label: "Proyek", icon: "folder" },
    { id: "kegunaan", label: "Kegunaan", icon: "monitor" },
    { id: "kontak", label: "Kontak", icon: "mail" },
    { id: "links", label: "Links", icon: "link" }
  ],

  hero: {
    title: "Hi, saya Annasirat",
    subtitle: "Frontend Developer & UI/UX Design.",
    meta: [
      { icon: "location", text: "Bima, Nusa Tenggara Barat" },
      { icon: "briefcase", text: "Open to Collaboration" }
    ],
    p1: "Saya membangun website personal dan produk digital yang rapi, cepat, dan mudah dipakai. Fokus utama saya ada di frontend modern menggunakan JavaScript, TypeScript, dan ekosistem React.",
    p2: "Saya percaya tampilan yang baik bukan hanya soal estetika, tapi juga struktur, performa, dan detail interaksi yang bikin pengguna betah."
  },

  skillTabs: [
    { id: "all", label: "Semua" },
    { id: "utama", label: "Utama" },
    { id: "frontend", label: "Front End" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Alat" }
  ],

  skills: [
    { name: "HTML", icon: "devicon-html5-plain colored", category: "utama" },
    { name: "CSS", icon: "devicon-css3-plain colored", category: "utama" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", category: "utama" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored", category: "frontend" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", category: "frontend" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored", category: "frontend" },
    { name: "PHP", icon: "devicon-php-plain colored", category: "backend" },
    { name: "Laravel", icon: "devicon-laravel-plain colored", category: "backend" },
    { name: "MySQL", icon: "devicon-mysql-plain colored", category: "database" },
    { name: "Git", icon: "devicon-git-plain colored", category: "tools" },
    { name: "GitHub", icon: "devicon-github-original colored", category: "tools" },
    { name: "Bun", icon: "devicon-bun-plain colored", category: "tools" }
  ],

  about: {
    paragraphs: [
      "Saya Annasirat, seorang Software Engineer yang berfokus pada pembuatan antarmuka web dan solusi digital yang rapi, cepat, dan berdampak.",
      "Saya menggabungkan teknik frontend modern dengan perhatian tinggi pada detail visual. Bagi saya, kode yang bagus harus mudah dipelihara, konsisten, dan tetap nyaman untuk pengguna.",
      "Saya senang berkolaborasi dalam tim, belajar teknologi baru, dan terus meningkatkan kualitas kerja melalui eksperimen serta evaluasi yang rutin."
    ],
    signature: "Aan",
    careers: [
      {
        role: "UI Engineer Intern",
        company: "Creative Digital Studio",
        period: "Nov 2025 - Jan 2026",
        detail: "membantu tim desain/pengembangan dalam merancang, membuat prototype, dan mengimplementasikan antarmuka aplikasi atau situs web yang intuitif, menarik, dan konsisten.",
        logo: "img/karier2.jpg"
      }
    ],
    education: [
      {
        name: "SMP Negeri 1 Sape",
        meta: "Junior High School - 2022 - 2026 - Bima, NTB",
        logo: "img/smpn1sape.jpg"
      },
      {
        name: "SD Negeri Jia",
        meta: "Elementary School - 2017 - 2022 - Bima, NTB",
        logo: "img/sdn.jpg"
      },
      {
        name: "RA Al-Falah",
        meta: "Taman Kanak-Kanak - 2015 - 2017 - Jakarta Utara",
        logo: "img/ra-alfalah.jpg"
      }
    ]
  },

  projects: {
    typeTabs: ["Semua", "Web", "Prototype"],
    categoryTabs: ["Semua", "Proyek Pribadi", "Freelance", "Lomba"],
    items: [
      {
        title: "aan.my.id",
        desc: "Website personal dan portfolio yang dibangun dari nol dengan fokus pada desain yang modern dan performa cepat.",
        image: "website-pribadi.webp",
        tech: ["HTML", "CSS", "Javascript"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: true,
        links: [
          { label: "Live", url: "https://aan.my.id" },
          { label: "GitHub", url: "https://github.com/aan-HTML/portofolio_main.git" }
        ]
      },
      {
        title: "Desain Website Sekolah",
        desc: "Website sekolah dengan desain modern dan user-friendly. Menyajikan informasi penting seperti profil sekolah, berita, dan kegiatan dengan tampilan yang rapi dan mudah dipahami..",
        image: "img/proyek/website sekolah.webp",
        tech: ["Figma"],
        type: "Prototype",
        category: "Freelance",
        featured: false,
        links: [
          { label: "Live", url: "prototypemain.vercel.app" }
        ]
      },
      {
        title: "Truth or Ledder",
        desc: "Game ular tangga berbasis web dengan tampilan simpel dan interaktif. Bisa dimainkan langsung di browser dengan pengalaman yang ringan dan seru.",
        image: "img/proyek/snake game.webp",
        tech: ["HTML", "CSS", "JavaScript"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: false,
        links: [
          { label: "Demo", url: "https://permainanulartangga.vercel.app/" },
          { label: "Github", url: "https://github.com/aan-HTML/truth-or-ledder.git" }
        ]
      },
      {
        title: "SmartAbsensi",
        desc: "Sistem absensi kelas online dengan fitur pencatatan dan rekap kehadiran siswa. Fokus pada kemudahan penggunaan dan tampilan yang rapi.",
        image: "img/proyek/smart-absensi.webp",
        tech: ["Typescript", "MySQL", "CSS"],
        type: "Website",
        category: "Lomba",
        featured: false,
        links: [
          { label: "Demo", "url": "#"},
          { label: "Github", url: "https://github.com/aan-HTML/SmartAbsensi.git" }
        ]
      },
      {
        title: "BookTrack",
        desc: "Website pencatatan buku dengan fitur input dan pengelolaan data yang mudah digunakan. Cocok untuk kebutuhan pribadi atau perpustakaan kecil.",
        image: "img/proyek/book-track.webp",
        tech: ["HTML", "CSS", "JavaScript"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: false,
        links: [
          { label: "Demo", "url": "#"},
          { label: "Github", url: "https://github.com/aan-HTML/BookTrack.git" }
        ]
      },
      {
        title: "Landing Page Cafe",
        desc: "Desain landing page untuk cafe dengan tampilan yang menarik dan informatif. Menampilkan menu, Lokasi, dan kontak dengan desain yang rapi dan mudah dinavigasikan.",
        image: "img/proyek/landing page cafe.webp",
        tech: ["HTML", "CSS", "Javascript"],
        type: "Web",
        category: "Freelance",
        featured: false,
        links: [
          { label: "Live", url: "https://kopifiksi.vercel.app" },
          { label: "Github", url: "https://github.com/aan-HTML/Landing-Page-Cafe.git" }
        ]
      },
      {
        title: "AnnBOT",
        desc: "Chatbot berbasis web dengan kemampuan menjawab pertanyaan umum dan memberikan informasi yang dibutuhkan pengguna. Fokus pada interaksi yang sederhana dan responsif.",
        image: "img/proyek/chatbot.webp",
        tech: ["Python", "API"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: false,
        links: [
          { label: "live", url: "#" },
          { label: "Github", url: "#" }
        ]
      },
      {
        title: "KasirKu",
        desc: "Aplikasi kasir berbasis web dengan fitur pencatatan transaksi. Cocok untuk usaha kecil yang membutuhkan sistem kasir sederhana dan efisien.",
        image: "img/proyek/kasirku.webp",
        tech: ["TypeScript", "React", "Tailwind"],
        type: "Web",
        category: "Freelance",
        featured: false,
        links: [
          { label: "Live", url: "#" },
          { label: "Github", url: "git clone https://github.com/aan-HTML/KasirKu.git" }
        ]
      },
      {
        title: "Page Login",
        desc: "Desain halaman login dengan tampilan modern dan user-friendly. Fokus pada kemudahan penggunaan dan estetika yang menarik untuk meningkatkan pengalaman pengguna.",
        image: "img/proyek/page login.webp",
        tech: ["PHP", "CSS", "MySQL"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: false,
        links: [
          { label: "Live", url: "#" },
          { label: "Github", url: "https://github.com/aan-HTML/Page-Login.git" }
        ]
      },
      {
        title: "Website Pribadi V1",
        desc: "Website pribadi versi pertama sebagai media untuk memperkenalkan diri, menampilkan karya, dan menunjukkan kemampuan di bidang pengembangan web.",
        image: "img/proyek/portofolio-v1.webp",
        tech: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery"],
        type: "Web",
        category: "Lomba",
        featured: false,
        links: [
          { label: "Live", url: "https://aanweb.vercel.app"},
          { label: "Github", url: "https://github.com/aan-HTML/Portofolio.git"}
        ]
      },
      {
        title: "StudyHub",
        desc: "Study Hub merupakan aplikasi web yang dirancang sebagai pusat produktivitas belajar dengan berbagai fitur untuk membantu pengguna tetap fokus dan teratur.",
        image: "img/proyek/Study-Hub.webp",
        tech: ["HTML", "CSS", "Javascript", "Json"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: false,
        links: [
          { label: "Live", url: "https://studyhub-tan.vercel.app/"},
          { label: "Github", url: "https://github.com/aan-HTML/Study-Hub.git"}
        ]
      }
    ]
  },

  achievements: [
    {
      id: "ach-1",
      code: "81P25Y57YPOY",
      title: "Belajar Pemrograman Java",
      org: "Dicoding Indonesia",
      type: "Course",
      category: "Backend",
      date: "Januari 18, 2026",
      image: "img/sertifikat/java.png",
      credentialUrl: "https://www.dicoding.com/certificates/81P25Y57YPOY"
    },
    {
      id: "ach-2",
      code: "L4PQ20QDOZO1",
      title: "Belajar Dasar Pemrograman JavaScript",
      org: "Dicoding Indonesia",
      type: "Course",
      category: "Frontend",
      date: "Januari 17, 2026",
      image: "img/sertifikat/belajar-javascript.png",
      credentialUrl: "https://www.dicoding.com/certificates/L4PQ20QDOZO1"
    },
    {
      id: "ach-3",
      code: "72ZDKLYNVPYW",
      title: "Dasar Pemrograman Web",
      org: "Dicoding Indonesia",
      type: "Course",
      category: "Frontend",
      date: "Januari 17, 2026",
      image: "img/sertifikat/dasar-pemrograman-web.png",
      credentialUrl: "https://www.dicoding.com/certificates/72ZDKLYNVPYW"
    },
    {
      id: "ach-4",
      code: "L4PQ2050OZO1",
      title: "Belajar Front-End Web Development",
      org: "Dicoding Indonesia",
      type: "Course",
      category: "Frontend",
      date: "Januari 17, 2026",
      image: "img/sertifikat/fornt-end.png",
      credentialUrl: "https://www.dicoding.com/certificates/L4PQ2050OZO1"
    },
    {
      id: "ach-5",
      code: "JLX156RL5Z72",
      title: "Belajar Dasar AI",
      org: "Dicoding Indonesia",
      type: "Course",
      category: "AI",
      date: "Januari 11, 2026",
      image: "img/sertifikat/belajar dasar AI.jpeg",
      credentialUrl: "https://www.dicoding.com/certificates/JLX156RL5Z72"
    },
    {
      id: "ach-6",
      code: "1RXYQ971QZVM",
      title: "Introduction to Financial Literacy",
      org: "Online Course",
      type: "Course",
      category: "Bisnis",
      date: "Januari 11, 2026",
      image: "img/sertifikat/introduction to financial literacy.jpeg",
      credentialUrl: "https://www.dicoding.com/certificates/1RXYQ971QZVM"
    },
    {
      id: "ach-7",
      code: "MEPJ2129LP3V",
      title: "Prinsip Pemrograman SOLID",
      org: "Dicoding Indonesia",
      type: "Course",
      category: "Backend",
      date: "Januari 18, 2026",
      image: "img/sertifikat/prinsip-pemrograman.png",
      credentialUrl: "https://www.dicoding.com/certificates/MEPJ2129LP3V"
    },
    {
      id: "ach-8",
      code: "JLX15O2DNZ72",
      title: "Pemrograman dengan C",
      org: "Dicoding Indonesia",
      type: "Course",
      category: "Backend",
      date: "Jan 24, 2026",
      image: "img/sertifikat/pemrograman-dengan-C.png",
      credentialUrl: "https://www.dicoding.com/certificates/JLX15O2DNZ72"
    },
    {
      id: "ach-9",
      code: "JLX15O2DNZ72",
      title: "Penerapan Data Scince",
      org: "Dicoding Indonesia",
      type: "Course",
      category: "Data",
      date: "Maret 07, 2026",
      image: "img/sertifikat/penerapan-data-scince.png",
      credentialUrl: "https://www.dicoding.com/certificates/N9ZON4JQRXG5"
    },
    {
      id: "ach10",
      code: "mqnmywh2w27b",
      title: "Claude Code in Action",
      org: "Anthropic Skilljar",
      type: "Course",
      category: "AI",
      date: "April 21, 2026",
      image: "img/setifikat/anthropic.webp",
      credentialUrl: "https://verify.skilljar.com/c/mqnmywh2w27b"
    }
  ],

  uses: [
    {
      group: "Perangkat Keras",
      items: [
        { name: "Lenovo ThinkCentre", desc: "PC desktop yang saya upgrade dengan spesifikasi Intel I5-10400, RAM 16GB DDR4, VGA RTX 3050 6GB sebagai perangkat utama saya untuk coding dan NGEGAME" },
        { name: "Laptop Axioo", desc: "Perangkat portable dengan spesifikasi SMD Ryzen 5-6600H, RAM 16GB yang memungkinkan saya untuk bekerja dimana saja" },
        { name: "Keyboard Mechanical Rexus", desc: "Keyboard Mechanical Red Switch yang memberikan pengalaman ketik serta meningkatkan kenyamanan saya dalam mengetik" },
        { name: "Mouse Logitech Wireless", desc: "Mouse wireless untuk kenyamanan tanpa adanya gangguan kabel, dibekali dengan desain yang ergonimis sehingga nyaman saat digunakan" }
      ]
    },
    {
      group: "Editor",
      items: [
        { name: "VS Code", desc: "Editor code yang saya gunakan sebagai alat utama untuk pengembangan website dengan ekosistem ekstensi yang sangat lengkap" },
        { name: "Android Studio", desc: "Lingkungan Pengembangan Terintegrasi (IDE) khusus untuk membangun aplikasi android dengan struktur kode yang solid" },
      ]
    },
    {
      group: "Terminal",
      items: [
        { name: "Windows Terminal", desc: "Terminal utama di Windows" },
        { name: "Git Bash", desc: "Terminal berbasis Git untuk workflow" },
        { name: "Claude Code", desc: "AI coding assistant di terminal" },
        { name: "Bun", desc: "Runtime & package manager JavaScript cepat" }
      ]
    },
    {
      group: "Aplikasi",
      items: [
        { name: "Figma", desc: "Platform desain kolaboratif utama yang saya gunakan untuk merancang wireframe, prototipe interaktif, hingga mengelola sistem desain yang konsisten" },
        { name: "Google Stitch", desc: " Alat bantu untuk integrasi aset desain yang memastikan setiap elemen visual selaras dengan standar pengembangan produk digital modern" }
      ]
    },
    {
      group: "Tech Stack",
      items: [
        { name: "TypeScript", desc: "Bahasa utama untuk proyek besar" },
        { name: "JavaScript", desc: "Fondasi pengembangan web" },
        { name: "PHP", desc: "Backend web klasik" },
        { name: "MySQL", desc: "Database relasional utama" },
        { name: "Laravel", desc: "Framework PHP favorit saya" }
      ]
    }
  ],

  contacts: [
    {
      title: "Tetap Terhubung",
      desc: "Hubungi saya melalui email untuk pertanyaan atau kolaborasi.",
      button: "Pergi ke Gmail",
      icon: "mail",
      theme: "theme-red",
      full: true,
      url: "mailto:aan27052010@email.com"
    },
    {
      title: "Ikuti Perjalanan Saya",
      desc: "Ikuti perjalanan kreatif saya.",
      button: "Pergi ke Instagram",
      icon: "instagram",
      theme: "theme-pink",
      url: "https://instagram.com/ann.x10"
    },
    {
      title: "Mari Terhubung",
      desc: "Terhubung dengan saya secara profesional.",
      button: "Pergi ke Linkedin",
      icon: "linkedin",
      theme: "theme-blue",
      url: "www.linkedin.com/in/aan270510"
    },
    {
      title: "Bergabung dalam Keseruan",
      desc: "Tonton konten yang menarik dan menyenangkan.",
      button: "Pergi ke Tiktok",
      icon: "music",
      theme: "theme-gray",
      url: "https://tiktok.com"
    },
    {
      title: "Jelajahi Kode",
      desc: "Jelajahi karya sumber terbuka saya.",
      button: "Pergi ke Github",
      icon: "github",
      theme: "theme-navy",
      url: "https://github.com/aan-HTML"
    }
  ],

  links: [
    { title: "GitHub", desc: "Koleksi source code dan eksperimen project pribadi.", url: "https://github.com/aan-HTML" },
    { title: "Instagram", desc: "Update aktivitas dan proses belajar harian.", url: "https://instagram.com/ann.x10" },
    { title: "Email", desc: "Kontak langsung untuk project dan kolaborasi.", url: "mailto:aan27052010@email.com" }
  ],
};
