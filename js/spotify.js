const SPOTIFY_API = "/api/spotify";

function msDuration(ms) {
  if (!ms) return "";
  const m = Math.floor(ms / 60000);
  const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  return `${m}:${s}`;
}

function musicIcon() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`;
}

function userIcon() {
  return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
}

function heartIcon() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="#1DB954" stroke="#1DB954" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
}

function renderNowPlaying(data) {
  const el = document.getElementById("sp-now-playing");
  if (!el) return;

  if (!data) {
    el.style.display = "none";
    return;
  }

  const progress = data.progress && data.duration
    ? Math.round((data.progress / data.duration) * 100)
    : null;

  el.href = data.url || "#";
  el.innerHTML = `
    <div class="sp-now-playing-art">
      ${data.image ? `<img src="${data.image}" alt="${data.title}" loading="lazy">` : musicIcon()}
    </div>
    <div class="sp-now-playing-info">
      <p class="sp-now-playing-label">
        ${data.isPlaying ? `<span class="sp-pulse"></span> Sedang diputar` : `Terakhir diputar`}
      </p>
      <p class="sp-now-playing-track">${data.title || "—"}</p>
      <p class="sp-now-playing-artist">${data.artist || "—"}</p>
    </div>
    ${progress !== null ? `
    <div class="sp-progress-wrap">
      <div class="sp-progress-bar">
        <div class="sp-progress-fill" style="width:${progress}%"></div>
      </div>
      <span class="sp-progress-time">${msDuration(data.progress)} / ${msDuration(data.duration)}</span>
    </div>` : ""}
  `;
}

function renderProfile(data) {
  const el = document.getElementById("sp-profile");
  if (!el || !data) return;

  el.innerHTML = `
    <div class="sp-profile-avatar">
      ${data.image ? `<img src="${data.image}" alt="${data.name}" loading="lazy">` : userIcon()}
    </div>
    <div>
      <p class="sp-profile-name">${data.name}</p>
      <p class="sp-profile-handle">Spotify Profile · ${data.followers.toLocaleString()} followers</p>
    </div>
  `;
}

function renderPlaylists(playlists) {
  const el = document.getElementById("sp-playlists");
  const countEl = document.getElementById("sp-playlists-count");
  if (!el) return;

  if (countEl) countEl.textContent = `${playlists.length} playlist`;

  if (!playlists.length) {
    el.innerHTML = `<p class="sp-error">Belum ada playlist.</p>`;
    return;
  }

  el.innerHTML = `<div class="sp-playlist-grid">
    ${playlists.map(p => `
      <a class="sp-playlist-item" href="${p.url || '#'}" target="_blank" rel="noreferrer">
        <div class="sp-playlist-art">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : musicIcon()}
        </div>
        <p class="sp-playlist-name">${p.name}</p>
        <p class="sp-playlist-meta">${p.total} lagu</p>
      </a>
    `).join("")}
  </div>`;
}

function renderLikedSongs(songs) {
  const el = document.getElementById("sp-liked-songs");
  const countEl = document.getElementById("sp-liked-count");
  if (!el) return;

  if (countEl) countEl.textContent = `${songs.length} lagu`;

  if (!songs.length) {
    el.innerHTML = `<p class="sp-error">Belum ada lagu yang disukai.</p>`;
    return;
  }

  el.innerHTML = `<div class="sp-track-list">
    ${songs.map((t, i) => `
      <a class="sp-track" href="${t.url || '#'}" target="_blank" rel="noreferrer">
        <span class="sp-track-num">${i + 1}</span>
        <div class="sp-track-art">
          ${t.image ? `<img src="${t.image}" alt="${t.title}" loading="lazy">` : musicIcon()}
        </div>
        <div class="sp-track-info">
          <p class="sp-track-name">${t.title}</p>
          <p class="sp-track-artist">${t.artist}</p>
        </div>
        <span class="sp-track-heart">${heartIcon()}</span>
        <span class="sp-track-dur">${msDuration(t.duration)}</span>
      </a>
    `).join("")}
  </div>`;
}

function renderTopTracks(tracks) {
  const el = document.getElementById("sp-top-tracks");
  if (!el) return;

  if (!tracks.length) {
    el.innerHTML = `<p class="sp-error">Belum ada data.</p>`;
    return;
  }

  el.innerHTML = `<div class="sp-track-list">
    ${tracks.map((t, i) => `
      <a class="sp-track" href="${t.url || '#'}" target="_blank" rel="noreferrer">
        <span class="sp-track-num">${i + 1}</span>
        <div class="sp-track-art">
          ${t.image ? `<img src="${t.image}" alt="${t.title}" loading="lazy">` : musicIcon()}
        </div>
        <div class="sp-track-info">
          <p class="sp-track-name">${t.title}</p>
          <p class="sp-track-artist">${t.artist}</p>
        </div>
        <span class="sp-track-dur">${msDuration(t.duration)}</span>
      </a>
    `).join("")}
  </div>`;
}

function renderTopArtists(artists) {
  const el = document.getElementById("sp-top-artists");
  const countEl = document.getElementById("sp-artists-count");
  if (!el) return;

  if (countEl) countEl.textContent = `${artists.length} artis`;

  if (!artists.length) {
    el.innerHTML = `<p class="sp-error">Belum ada data.</p>`;
    return;
  }

  el.innerHTML = `<div class="sp-artist-grid">
    ${artists.map(a => `
      <a class="sp-artist-item" href="${a.url || '#'}" target="_blank" rel="noreferrer">
        <div class="sp-artist-avatar">
          ${a.image ? `<img src="${a.image}" alt="${a.name}" loading="lazy">` : userIcon()}
        </div>
        <p class="sp-artist-name">${a.name}</p>
        <p class="sp-artist-genre">${a.genre || "—"}</p>
      </a>
    `).join("")}
  </div>`;
}

function showLoading() {
  const sections = ["sp-playlists", "sp-liked-songs", "sp-top-tracks", "sp-top-artists", "sp-profile"];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = `<div class="sp-loading"><div class="sp-spinner"></div> Memuat...</div>`;
  });
}

function showError(msg) {
  const sections = ["sp-playlists", "sp-liked-songs", "sp-top-tracks", "sp-top-artists"];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = `<p class="sp-error">${msg}</p>`;
  });
}

async function loadSpotifyData() {
  showLoading();
  try {
    const res = await fetch(SPOTIFY_API);
    if (!res.ok) throw new Error("Gagal mengambil data Spotify");
    const data = await res.json();

    renderNowPlaying(data.nowPlaying);
    renderProfile(data.profile);
    renderPlaylists(data.playlists || []);
    renderLikedSongs(data.likedSongs || []);
    renderTopTracks(data.topTracks || []);
    renderTopArtists(data.topArtists || []);
  } catch (err) {
    showError("Tidak dapat memuat data Spotify saat ini.");
    console.error(err);
  }
}

// Load saat halaman links aktif
function initSpotify() {
  const page = document.getElementById("page-links");
  if (!page) return;

  const observer = new MutationObserver(() => {
    if (page.classList.contains("active") || page.style.display !== "none") {
      loadSpotifyData();
      observer.disconnect();
    }
  });

  observer.observe(page, { attributes: true, attributeFilter: ["class", "style"] });

  // Coba langsung juga kalau sudah aktif
  if (page.classList.contains("active")) loadSpotifyData();
}

document.addEventListener("DOMContentLoaded", initSpotify);