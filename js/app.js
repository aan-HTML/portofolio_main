let cmdOpen = false;

const state = {
  page: "beranda",
  skillTab: "all",
  projectType: "Semua",
  projectCategory: "Semua",
  achSearch: "",
  achType: "all",
  achCategory: "all",
  theme: localStorage.getItem("portfolio-theme") || "dark",
  layout: localStorage.getItem("portfolio-layout") || "sidebar",
  lang: localStorage.getItem("portfolio-lang") || "id"
};

const I18N = {
  id: {
    appTitle: "Annasirat | Frontend Developer - Portfolio Pribadi",
    profile: {
      status: "Ayo Berkolaborasi"
    },
    nav: {
      beranda: "Beranda",
      tentang: "Tentang",
      pencapaian: "Pencapaian",
      proyek: "Proyek",
      kegunaan: "Kegunaan",
      kontak: "Kontak",
      links: "Links"
    },
    hero: {
      title: "Hi, saya Annasirat",
      subtitle: "Frontend Developer yang fokus pada UI modern dan pengalaman pengguna yang nyaman.",
      metaLocation: "Bima, Nusa Tenggara Barat",
      metaWork: "Open to Work",
      p1: "Saya membangun website personal dan produk digital yang rapi, cepat, dan mudah dipakai. Fokus utama saya ada di frontend modern menggunakan JavaScript, TypeScript, dan ekosistem React.",
      p2: "Saya percaya tampilan yang baik bukan hanya soal estetika, tapi juga struktur, performa, dan detail interaksi yang bikin pengguna betah."
    },
    pages: {
      beranda: { title: "Hi, saya Annasirat", sub: "Frontend Developer yang fokus pada UI modern dan pengalaman pengguna yang nyaman." },
      tentang: { title: "Tentang", sub: "Pengenalan singkat mengenai siapa saya." },
      pencapaian: { title: "Pencapaian", sub: "Koleksi sertifikat dan lencana yang telah saya raih sepanjang perjalanan profesional dan akademik saya." },
      proyek: { title: "Proyek", sub: "Etalase proyek pribadi maupun sumber terbuka (open-source) yang telah saya bangun atau kontribusikan." },
      kegunaan: { title: "Kegunaan", sub: "Alat dan setup yang saya gunakan untuk produktivitas harian." },
      kontak: { title: "Kontak", sub: "Temukan saya di media sosial." },
      links: { title: "Links", sub: "Daftar tautan penting saya." }
    },
    sections: {
      skillTitle: "Keahlian",
      skillSub: "Keahlian profesional saya.",
      aboutCareerTitle: "Karier",
      aboutCareerSub: "Perjalanan profesional saya.",
      aboutEduTitle: "Pendidikan",
      aboutEduSub: "Perjalanan pendidikan saya.",
      salutation: "Salam hangat,",
      showDetail: "Tampilkan detail",
      hideDetail: "Sembunyikan detail"
    },
    skillTabs: {
      all: "Semua",
      utama: "Utama",
      frontend: "Front End",
      backend: "Backend",
      database: "Database",
      tools: "Alat"
    },
    project: {
      featured: "Featured"
    },
    achievement: {
      searchPlaceholder: "Cari...",
      filterType: "Filter berdasarkan Tipe",
      filterCategory: "Filter berdasarkan Kategori",
      total: "Total",
      viewDetail: "Lihat detail",
      issuedOn: "Terbit"
    },
    command: {
      button: "Palet Perintah",
      placeholder: "Cari perintah...",
      noResult: "Tidak ada hasil.",
      groups: {
        pages: "Halaman",
        layout: "Tata Letak",
        language: "Bahasa"
      },
      layoutSidebar: "Ganti ke Tata Letak Sidebar",
      layoutTopbar: "Ganti ke Tata Letak Topbar",
      langEn: "Ganti ke Bahasa Inggris",
      langId: "Ganti ke Bahasa Indonesia"
    },
    layout: {
      toggleTitle: "Ganti Layout",
      switchedSidebar: "Tata letak sidebar aktif.",
      switchedTopbar: "Tata letak topbar aktif."
    },
    language: {
      switched: "Bahasa berhasil diubah."
    }
  },
  en: {
    appTitle: "Annasirat | Frontend Developer - Personal Website",
    profile: {
      status: "Let's Collaborate"
    },
    nav: {
      beranda: "Home",
      tentang: "About",
      pencapaian: "Achievements",
      proyek: "Projects",
      kegunaan: "Uses",
      kontak: "Contact",
      links: "Links"
    },
    hero: {
      title: "Hi, I am Annasirat",
      subtitle: "Frontend Developer focused on modern UI and comfortable user experience.",
      metaLocation: "Bima, West Nusa Tenggara",
      metaWork: "Open to Work",
      p1: "I build personal websites and digital products that are tidy, fast, and easy to use. My main focus is modern frontend with JavaScript, TypeScript, and the React ecosystem.",
      p2: "I believe good visuals are not only about aesthetics, but also structure, performance, and interaction details that keep users engaged."
    },
    pages: {
      beranda: { title: "Hi, I am Annasirat", sub: "Frontend Developer focused on modern UI and comfortable user experience." },
      tentang: { title: "About", sub: "A short introduction about who I am." },
      pencapaian: { title: "Achievements", sub: "A collection of certificates and badges I have earned throughout my professional and academic journey." },
      proyek: { title: "Projects", sub: "Showcase of personal and open-source projects I have built or contributed to." },
      kegunaan: { title: "Uses", sub: "Tools and setup I use for daily productivity." },
      kontak: { title: "Contact", sub: "Find me on social media." },
      links: { title: "Links", sub: "My important links list." }
    },
    sections: {
      skillTitle: "Skills",
      skillSub: "My professional skills.",
      aboutCareerTitle: "Career",
      aboutCareerSub: "My professional journey.",
      aboutEduTitle: "Education",
      aboutEduSub: "My education journey.",
      salutation: "Warm regards,",
      showDetail: "Show details",
      hideDetail: "Hide details"
    },
    skillTabs: {
      all: "All",
      utama: "Core",
      frontend: "Front End",
      backend: "Backend",
      database: "Database",
      tools: "Tools"
    },
    project: {
      featured: "Featured"
    },
    achievement: {
      searchPlaceholder: "Search...",
      filterType: "Filter by Type",
      filterCategory: "Filter by Category",
      total: "Total",
      viewDetail: "View detail",
      issuedOn: "Issued"
    },
    command: {
      button: "Command Palette",
      placeholder: "Search command...",
      noResult: "No results found.",
      groups: {
        pages: "Pages",
        layout: "Layout",
        language: "Language"
      },
      layoutSidebar: "Switch to Sidebar Layout",
      layoutTopbar: "Switch to Topbar Layout",
      langEn: "Switch to English",
      langId: "Switch to Indonesian"
    },
    layout: {
      toggleTitle: "Switch Layout",
      switchedSidebar: "Sidebar layout enabled.",
      switchedTopbar: "Topbar layout enabled."
    },
    language: {
      switched: "Language updated."
    }
  }
};

function byId(id) {
  return document.getElementById(id);
}

function t(path) {
  const pick = (obj) => path
    .split(".")
    .reduce((acc, key) => (acc && Object.prototype.hasOwnProperty.call(acc, key) ? acc[key] : undefined), obj);

  return pick(I18N[state.lang]) ?? pick(I18N.id);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function hexToRgba(hex, alpha = 0.22) {
  const sanitized = hex.replace("#", "");
  const full = sanitized.length === 3
    ? sanitized.split("").map((x) => x + x).join("")
    : sanitized;
  const int = Number.parseInt(full, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function toast(message) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  Object.assign(el.style, {
    position: "fixed",
    left: "50%",
    bottom: "26px",
    transform: "translateX(-50%)",
    background: "#111825",
    border: "1px solid rgba(255,255,255,0.16)",
    color: "#e5e7eb",
    padding: "10px 14px",
    borderRadius: "10px",
    zIndex: "1000",
    fontSize: "14px"
  });
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

function applyTheme(themeId) {
  const map = {
    dark: "dark",
    dim: "dim",
    light: "light",
    contrast: "contrast",
    focus: "focus"
  };
  state.theme = themeId;
  document.documentElement.setAttribute("data-theme", map[themeId] || "dark");
  localStorage.setItem("portfolio-theme", themeId);

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === themeId);
  });
}

function navLabel(item) {
  return t(`nav.${item.id}`) || item.label;
}

function localizedHero() {
  return {
    title: t("hero.title"),
    subtitle: t("hero.subtitle"),
    p1: t("hero.p1"),
    p2: t("hero.p2"),
    meta: [
      { icon: "location", text: t("hero.metaLocation") },
      { icon: "briefcase", text: t("hero.metaWork") }
    ]
  };
}

function updateStaticCopy() {
  document.title = t("appTitle");
  document.documentElement.setAttribute("lang", state.lang === "en" ? "en" : "id");

  if (byId("profile-status")) byId("profile-status").textContent = t("profile.status");
  if (byId("cmd-input")) byId("cmd-input").placeholder = t("command.placeholder");
  if (byId("ach-search")) byId("ach-search").placeholder = t("achievement.searchPlaceholder");
  if (byId("layout-toggle")) byId("layout-toggle").title = t("layout.toggleTitle");

  // Section titles
  if (byId("skills-title-text")) byId("skills-title-text").textContent = t("sections.skillTitle");
  if (byId("skills-sub-text")) byId("skills-sub-text").textContent = t("sections.skillSub");
  if (byId("career-title-text")) byId("career-title-text").textContent = t("sections.aboutCareerTitle");
  if (byId("education-title-text")) byId("education-title-text").textContent = t("sections.aboutEduTitle");
  if (byId("salutation-text")) byId("salutation-text").textContent = t("sections.salutation");

  const pages = t("pages") || {};
  Object.entries(pages).forEach(([id, copy]) => {
    const page = byId(`page-${id}`);
    if (!page) return;
    const title = page.querySelector(".page-title");
    const sub = page.querySelector(".page-sub");
    if (title) title.textContent = copy.title;
    if (sub) sub.textContent = copy.sub;
  });

  const aboutPage = byId("page-tentang");
  const aboutSubs = aboutPage?.querySelectorAll(".section-sub") || [];
  if (aboutSubs[0]) aboutSubs[0].textContent = t("sections.aboutCareerSub");
  if (aboutSubs[1]) aboutSubs[1].textContent = t("sections.aboutEduSub");
}

function rerenderLocalizedContent() {
  renderNav();
  renderHome();
  renderAbout();
  renderProjects();
  renderAchievementFilters();
  renderAchievements();
  renderUses();
  renderContacts();
  renderLinks();
  navigate(state.page, false);

  if (cmdOpen) {
    renderCommandPalette(byId("cmd-input").value);
  }
}

function applyLayout(layout, { showToast = false } = {}) {
  state.layout = layout === "topbar" ? "topbar" : "sidebar";
  localStorage.setItem("portfolio-layout", state.layout);

  document.body.classList.toggle("layout-topbar", state.layout === "topbar");
  document.body.classList.toggle("layout-sidebar", state.layout === "sidebar");

  if (showToast) {
    toast(state.layout === "topbar" ? t("layout.switchedTopbar") : t("layout.switchedSidebar"));
  }

  if (cmdOpen) {
    renderCommandPalette(byId("cmd-input").value);
  }
}

function applyLanguage(lang, { showToast = false, rerender = true } = {}) {
  state.lang = lang === "en" ? "en" : "id";
  localStorage.setItem("portfolio-lang", state.lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === state.lang);
  });

  updateStaticCopy();

  if (rerender) {
    rerenderLocalizedContent();
  }

  if (showToast) {
    toast(t("language.switched"));
  }
}

function navigate(pageId, syncHash = true) {
  state.page = pageId;
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.id === `page-${pageId}`);
  });

  document.querySelectorAll(".nav-item").forEach((nav) => {
    nav.classList.toggle("active", nav.dataset.page === pageId);
  });

  const drawer = byId("mobile-drawer");
  if (drawer) drawer.classList.remove("open");

  if (syncHash) {
    history.replaceState(null, "", `#${pageId}`);
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderNav() {
  const desktop = byId("sb-nav");
  const mobileNav = byId("mob-nav");

  let navMarkup = DATA.nav.map((item) => `
    <a href="#${item.id}" class="nav-item" data-page="${item.id}">
      <span class="nav-item-left">${ICONS[item.icon] || ""}<span>${escapeHtml(navLabel(item))}</span></span>
      <span class="nav-arrow">${ICONS.chevronRight}</span>
    </a>
  `).join("");

  const paletteMarkup = `
    <button class="nav-item nav-palette-btn" type="button">
      <span class="nav-item-left">${ICONS.search || ""}<span>${t("command.button")}</span></span>
      <span class="nav-kbd">Ctrl+K</span>
    </button>
  `;

  navMarkup += paletteMarkup;

  if (desktop) desktop.innerHTML = navMarkup;
  if (mobileNav) mobileNav.innerHTML = navMarkup;

  document.querySelectorAll(".nav-item[data-page]").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(node.dataset.page);
    });
  });

  document.querySelectorAll(".nav-palette-btn").forEach((btn) => {
    btn.addEventListener("click", () => toggleCommandPalette(true));
  });
}

function renderThemes() {
  const themeHTML = DATA.themes.map((theme) => `
    <button class="theme-btn" type="button" data-theme="${theme.id}" title="${theme.title || theme.id}">
      ${ICONS[theme.icon] || ""}
    </button>
  `).join("");

  const wrap = byId("theme-switch");
  wrap.innerHTML = themeHTML;
  wrap.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
  });

  const mobWrap = byId("mob-theme-switch");
  if (mobWrap) {
    mobWrap.innerHTML = themeHTML;
    mobWrap.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
    });
  }
}

function renderHome() {
  const hero = localizedHero();

  if (byId("hero-title")) byId("hero-title").textContent = hero.title;
  if (byId("hero-sub")) byId("hero-sub").textContent = hero.subtitle;
  if (byId("hero-meta")) byId("hero-meta").innerHTML = hero.meta
    .map((item) => `<li>${ICONS[item.icon] || ""}${escapeHtml(item.text)}</li>`)
    .join("");
  if (byId("hero-p1")) byId("hero-p1").textContent = hero.p1;
  if (byId("hero-p2")) byId("hero-p2").textContent = hero.p2;

  const counts = { all: DATA.skills.length };
  DATA.skills.forEach((skill) => {
    counts[skill.category] = (counts[skill.category] || 0) + 1;
  });

  const skillTabs = byId("skill-tabs");
  if (skillTabs) skillTabs.innerHTML = DATA.skillTabs
    .map((tab) => `
      <button class="skill-tab ${state.skillTab === tab.id ? "active" : ""}" type="button" data-skill-tab="${tab.id}">
        <span>${escapeHtml(t(`skillTabs.${tab.id}`) || tab.label)}</span>
        <span class="skill-tab-count">${counts[tab.id] || 0}</span>
      </button>
    `)
    .join("");

  if (skillTabs) skillTabs.querySelectorAll("[data-skill-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.skillTab = btn.dataset.skillTab;
      renderHome();
    });
  });

  const list = state.skillTab === "all"
    ? DATA.skills
    : DATA.skills.filter((item) => item.category === state.skillTab);

  const skillGrid = byId("skill-grid");
  if (skillGrid) skillGrid.innerHTML = list
    .map((skill) => `
      <span class="skill-pill">
        <i class="${skill.icon}"></i>
        <span>${skill.name}</span>
      </span>
    `)
    .join("");
}

function renderAbout() {
  byId("about-paragraphs").innerHTML = DATA.about.paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
  byId("about-signature").textContent = DATA.about.signature;

  byId("career-list").innerHTML = DATA.about.careers
    .map((career, index) => `
      <article class="career-card">
        <div class="career-logo"><img src="${career.logo}" alt="${escapeHtml(career.role)}" /></div>
        <div>
          <h3 class="career-title">${escapeHtml(career.role)}</h3>
          <p class="career-company">${escapeHtml(career.company)}</p>
          <p class="career-extra">${escapeHtml(career.period)}</p>
          <button class="career-toggle" type="button" data-career-index="${index}">
            ${ICONS.chevronRight} ${escapeHtml(t("sections.showDetail"))}
          </button>
          <p class="career-detail hidden" id="career-detail-${index}">${escapeHtml(career.detail)}</p>
        </div>
      </article>
    `)
    .join("");

  byId("career-list").querySelectorAll("[data-career-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const detail = byId(`career-detail-${btn.dataset.careerIndex}`);
      const hidden = detail.classList.contains("hidden");
      detail.classList.toggle("hidden", !hidden);
      btn.innerHTML = hidden
        ? `${ICONS.chevronRight} ${escapeHtml(t("sections.hideDetail"))}`
        : `${ICONS.chevronRight} ${escapeHtml(t("sections.showDetail"))}`;
    });
  });

  byId("edu-list").innerHTML = DATA.about.education
    .map((edu) => `
      <article class="edu-card">
        <div class="edu-logo"><img src="${edu.logo}" alt="${escapeHtml(edu.name)}" /></div>
        <div class="edu-info">
          <h3 class="edu-name">${escapeHtml(edu.name)}</h3>
          <p class="edu-meta">${escapeHtml(edu.meta)}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderProjects() {
  byId("project-type-tabs").innerHTML = DATA.projects.typeTabs
    .map((tab) => `
      <button class="filter-tab ${state.projectType === tab ? "active" : ""}" type="button" data-project-type="${tab}">${tab}</button>
    `)
    .join("");

  byId("project-category-tabs").innerHTML = DATA.projects.categoryTabs
    .map((tab) => `
      <button class="filter-tab ${state.projectCategory === tab ? "active" : ""}" type="button" data-project-category="${tab}">${tab}</button>
    `)
    .join("");

  byId("project-type-tabs").querySelectorAll("[data-project-type]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.projectType = btn.dataset.projectType;
      renderProjects();
    });
  });

  byId("project-category-tabs").querySelectorAll("[data-project-category]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.projectCategory = btn.dataset.projectCategory;
      renderProjects();
    });
  });

  const list = DATA.projects.items.filter((item) => {
    const typeOk = state.projectType === "Semua" || item.type === state.projectType;
    const catOk = state.projectCategory === "Semua" || item.category === state.projectCategory;
    return typeOk && catOk;
  });

  byId("project-grid").innerHTML = list
    .map((project) => `
      <article class="project-card">
        <div class="project-thumb">
          <img src="${project.image}" alt="${escapeHtml(project.title)}" loading="lazy" />
          ${project.featured ? `<span class="featured-badge">${ICONS.pin} ${escapeHtml(t("project.featured"))}</span>` : ""}
        </div>
        <div class="project-body">
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-desc">${escapeHtml(project.desc)}</p>
          <div class="project-tech">${project.tech.map((tech) => `<span>${escapeHtml(tech)}</span>`).join("")}</div>
          <div class="project-links">
            ${project.links.map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${ICONS.external}${escapeHtml(link.label)}</a>`).join("")}
          </div>
        </div>
      </article>
    `)
    .join("");
}

function filteredAchievements() {
  return DATA.achievements.filter((item) => {
    const q = state.achSearch.trim().toLowerCase();
    const searchOk = !q || [item.title, item.org, item.code, item.category].some((f) => f.toLowerCase().includes(q));
    const typeOk = state.achType === "all" || item.type === state.achType;
    const categoryOk = state.achCategory === "all" || item.category === state.achCategory;
    return searchOk && typeOk && categoryOk;
  });
}

function renderAchievementFilters() {
  const typeSelect = byId("ach-type-filter");
  const categorySelect = byId("ach-category-filter");

  const types = [...new Set(DATA.achievements.map((item) => item.type))];
  const categories = [...new Set(DATA.achievements.map((item) => item.category))];

  typeSelect.innerHTML = `<option value="all">${escapeHtml(t("achievement.filterType"))}</option>${types
    .map((type) => `<option value="${type}">${type}</option>`)
    .join("")}`;

  categorySelect.innerHTML = `<option value="all">${escapeHtml(t("achievement.filterCategory"))}</option>${categories
    .map((cat) => `<option value="${cat}">${cat}</option>`)
    .join("")}`;

  typeSelect.value = state.achType;
  categorySelect.value = state.achCategory;
}

function renderAchievements() {
  const items = filteredAchievements();

  byId("ach-total").textContent = `${t("achievement.total")}: ${items.length}`;

  byId("ach-grid").innerHTML = items
    .map((item) => `
      <article class="ach-card" data-ach-id="${item.id}">
        <div class="ach-preview" data-ach-id="${item.id}">
          <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
          <div class="ach-overlay">
            <button class="ach-view-btn" type="button" data-ach-id="${item.id}">${escapeHtml(t("achievement.viewDetail"))}</button>
          </div>
        </div>

        <div class="ach-body">
          <div class="ach-code">${escapeHtml(item.code)}</div>
          <h3 class="ach-title">${escapeHtml(item.title)}</h3>
          <p class="ach-org">${escapeHtml(item.org)}</p>
          <div class="ach-chips">
            <span class="ach-chip">${escapeHtml(item.type)}</span>
            <span class="ach-chip">${escapeHtml(item.category)}</span>
          </div>
          <div class="ach-bottom">
            <span>${escapeHtml(t("achievement.issuedOn"))} ${escapeHtml(item.date)}</span>
            <span>${ICONS.link}</span>
          </div>
        </div>

        <div class="ach-actions">
          <button class="ach-open-btn" type="button" data-ach-id="${item.id}">${ICONS.plus}</button>
        </div>
      </article>
    `)
    .join("");
}

function openAchievementModal(itemId) {
  const item = DATA.achievements.find((entry) => entry.id === itemId);
  if (!item) return;

  byId("ach-modal-image").src = item.image;
  byId("ach-modal-image").alt = item.title;
  byId("ach-modal-title").textContent = item.title;
  byId("ach-modal-org").textContent = item.org;
  byId("ach-modal-code").textContent = item.code;
  byId("ach-modal-type").textContent = item.type;
  byId("ach-modal-category").textContent = item.category;
  byId("ach-modal-date").textContent = item.date;
  byId("ach-modal-link").href = item.credentialUrl;

  const modal = byId("achievement-modal");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeAchievementModal() {
  const modal = byId("achievement-modal");
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderUses() {
  byId("uses-list").innerHTML = DATA.uses
    .map((group) => `
      <section class="uses-group">
        <h3 class="uses-group-title">${escapeHtml(group.group)}</h3>
        <div class="uses-items">
          ${group.items.map((item) => `
            <article class="use-item">
              <strong class="use-name">${escapeHtml(item.name)}</strong>
              <p class="use-desc">${escapeHtml(item.desc)}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `)
    .join("");
}

function renderContacts() {
  byId("contact-grid").innerHTML = DATA.contacts
    .map((item) => `
      <article class="contact-card ${item.theme} ${item.full ? "full" : ""}">
        <div>
          <h3 class="contact-title">${escapeHtml(item.title)}</h3>
          <p class="contact-desc">${escapeHtml(item.desc)}</p>
        </div>
        <div class="contact-footer">
          <a class="contact-link" href="${item.url}" target="_blank" rel="noreferrer">${escapeHtml(item.button)} ${ICONS.external}</a>
          <span class="contact-icon">${ICONS[item.icon] || ""}</span>
        </div>
      </article>
    `)
    .join("");
}

function renderLinks() {
  byId("links-list").innerHTML = DATA.links
    .map((item) => `
      <a class="link-item" href="${item.url}" target="_blank" rel="noreferrer">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc)}</p>
      </a>
    `)
    .join("");
}

function getCommandItems() {
  const pageItems = DATA.nav.map((item) => ({
    type: "page",
    group: t("command.groups.pages"),
    id: item.id,
    icon: item.icon,
    label: navLabel(item)
  }));

  const layoutItems = [
    {
      type: "action",
      group: t("command.groups.layout"),
      action: "set-layout-sidebar",
      icon: "layout",
      label: t("command.layoutSidebar"),
      hint: "SB",
      disabled: state.layout === "sidebar"
    },
    {
      type: "action",
      group: t("command.groups.layout"),
      action: "set-layout-topbar",
      icon: "monitor",
      label: t("command.layoutTopbar"),
      hint: "TB",
      disabled: state.layout === "topbar"
    }
  ];

  const languageItems = [
    {
      type: "action",
      group: t("command.groups.language"),
      action: "set-lang-en",
      icon: "location",
      label: t("command.langEn"),
      hint: "US",
      disabled: state.lang === "en"
    },
    {
      type: "action",
      group: t("command.groups.language"),
      action: "set-lang-id",
      icon: "location",
      label: t("command.langId"),
      hint: "ID",
      disabled: state.lang === "id"
    }
  ];

  return [...pageItems, ...layoutItems, ...languageItems];
}

function runCommandAction(action) {
  if (action === "set-layout-sidebar") {
    applyLayout("sidebar", { showToast: true });
    return true;
  }

  if (action === "set-layout-topbar") {
    applyLayout("topbar", { showToast: true });
    return true;
  }

  if (action === "set-lang-en") {
    applyLanguage("en", { showToast: true, rerender: true });
    return true;
  }

  if (action === "set-lang-id") {
    applyLanguage("id", { showToast: true, rerender: true });
    return true;
  }

  return false;
}

function renderCommandPalette(query = "") {
  const q = query.trim().toLowerCase();
  const rows = getCommandItems().filter((item) => item.label.toLowerCase().includes(q));

  if (!rows.length) {
    byId("cmd-results").innerHTML = `<div class="cmd-row"><span>${escapeHtml(t("command.noResult"))}</span></div>`;
    return;
  }

  let groupName = "";
  let html = "";

  rows.forEach((item) => {
    if (item.group !== groupName) {
      groupName = item.group;
      html += `<div class="cmd-group">${escapeHtml(groupName)}</div>`;
    }

    if (item.type === "page") {
      html += `
        <div class="cmd-row" data-page="${item.id}">
          <span class="cmd-row-left">${ICONS[item.icon] || ""}<span>${escapeHtml(item.label)}</span></span>
          <span>${ICONS.chevronRight}</span>
        </div>
      `;
      return;
    }

    html += `
      <div class="cmd-row ${item.disabled ? "disabled" : ""}" data-action="${item.action}">
        <span class="cmd-row-left">${ICONS[item.icon] || ""}<span>${escapeHtml(item.label)}</span></span>
        <span class="cmd-hint">${escapeHtml(item.hint)}</span>
      </div>
    `;
  });

  byId("cmd-results").innerHTML = html;

  byId("cmd-results").querySelectorAll("[data-page]").forEach((row) => {
    row.addEventListener("click", () => {
      navigate(row.dataset.page);
      toggleCommandPalette(false);
    });
  });

  byId("cmd-results").querySelectorAll("[data-action]").forEach((row) => {
    row.addEventListener("click", () => {
      if (row.classList.contains("disabled")) return;
      const done = runCommandAction(row.dataset.action);
      if (done) {
        toggleCommandPalette(false);
      }
    });
  });
}

function toggleCommandPalette(next) {
  cmdOpen = next;
  const overlay = byId("cmd-overlay");
  overlay.classList.toggle("hidden", !next);
  overlay.setAttribute("aria-hidden", String(!next));

  if (next) {
    byId("cmd-input").value = "";
    renderCommandPalette("");
    byId("cmd-input").focus();
  }
}

function bindEvents() {
  byId("ach-search").addEventListener("input", (event) => {
    state.achSearch = event.target.value;
    renderAchievements();
  });

  byId("ach-type-filter").addEventListener("change", (event) => {
    state.achType = event.target.value;
    renderAchievements();
  });

  byId("ach-category-filter").addEventListener("change", (event) => {
    state.achCategory = event.target.value;
    renderAchievements();
  });

  byId("ach-grid").addEventListener("click", (event) => {
    const target = event.target.closest("[data-ach-id]");
    if (!target) return;
    openAchievementModal(target.dataset.achId);
  });

  byId("achievement-modal").addEventListener("click", (event) => {
    if (event.target === byId("achievement-modal")) {
      closeAchievementModal();
    }
  });

  byId("ach-modal-close").addEventListener("click", closeAchievementModal);

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      toggleCommandPalette(!cmdOpen);
    }

    if (event.key === "Escape") {
      if (cmdOpen) toggleCommandPalette(false);
      if (!byId("achievement-modal").classList.contains("hidden")) closeAchievementModal();
    }
  });

  byId("cmd-overlay").addEventListener("click", (event) => {
    if (event.target === byId("cmd-overlay")) {
      toggleCommandPalette(false);
    }
  });

  byId("cmd-input").addEventListener("input", (event) => {
    renderCommandPalette(event.target.value);
  });

  byId("layout-toggle").addEventListener("click", () => {
    const next = state.layout === "sidebar" ? "topbar" : "sidebar";
    applyLayout(next, { showToast: true });
  });

  byId("mobile-menu-btn").addEventListener("click", () => {
    byId("mobile-drawer").classList.toggle("open");
  });

  if (byId("mob-close-btn")) {
    byId("mob-close-btn").addEventListener("click", () => {
      byId("mobile-drawer").classList.remove("open");
    });
  }

  if (byId("mob-right-panel")) {
    byId("mob-right-panel").addEventListener("click", () => {
      byId("mobile-drawer").classList.remove("open");
    });
  }

  byId("back-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    byId("back-top").style.opacity = window.scrollY > 260 ? "1" : "0.6";
  });
}

function setStaticIcons() {
  const iconElements = {
    "verified-icon": ICONS.verified,
    "layout-icon": ICONS.layout,
    "palette-icon": ICONS.palette,
    "code-icon": ICONS.code,
    "briefcase-icon": ICONS.briefcase,
    "education-icon": ICONS.education,
    "ach-search-icon": ICONS.search,
    "up-icon": ICONS.up,
    "wa-icon": ICONS.whatsapp,
    "close-icon": ICONS.close,
    "mob-verified-icon": ICONS.verified,
    "external-icon": ICONS.external,
    "cmd-icon": ICONS.search
  };

  Object.entries(iconElements).forEach(([id, icon]) => {
    const el = byId(id);
    if (el) el.innerHTML = icon;
  });
}

function initProfile() {
  if (byId("profile-avatar")) byId("profile-avatar").src = DATA.profile.avatar;
  if (byId("profile-name")) byId("profile-name").textContent = DATA.profile.name;
  if (byId("profile-status")) byId("profile-status").textContent = t("profile.status");

  if (byId("mobile-avatar")) byId("mobile-avatar").src = DATA.profile.avatar;
  if (byId("mobile-name")) byId("mobile-name").textContent = DATA.profile.name;
  if (byId("mob-profile-name")) byId("mob-profile-name").textContent = DATA.profile.name;

  if (byId("wa-button")) byId("wa-button").href = DATA.profile.whatsapp;
}

function initLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang, { showToast: true, rerender: true });
    });
  });
}

function init() {
  setStaticIcons();
  initProfile();
  renderThemes();
  applyTheme(state.theme);
  applyLayout(state.layout, { showToast: false });
  applyLanguage(state.lang, { showToast: false, rerender: false });
  renderNav();
  initLangButtons();

  renderHome();
  renderAbout();
  renderProjects();
  renderAchievementFilters();
  renderAchievements();
  renderUses();
  renderContacts();
  renderLinks();
  updateStaticCopy();

  bindEvents();

  const routeFromHash = window.location.hash.replace("#", "");
  const validRoute = DATA.nav.some((item) => item.id === routeFromHash);
  navigate(validRoute ? routeFromHash : "beranda", false);
}

document.addEventListener("DOMContentLoaded", init);