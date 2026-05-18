SPOTIFY_API = "/api/spotify";
let spLoaded = false;

function msDuration(ms) {
  if (!ms) return "";
  const m = Math.floor(ms / 60000);
  const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  return `${m}:${s}`;
}

function musicSVG() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`;
}

function userSVG() {
  return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
}

function heartSVG() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="#1DB954" stroke="#1DB954" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
}

function renderProfile(data) {
  const el = document.getElementById("sp-profile");
  if (!el || !data) return;
  el.innerHTML = `
    <div class="sp-profile-avatar">
      ${data.image ? `<img src="${data.image}" alt="${data.name}" loading="lazy">` : userSVG()}
    </div>
    <div class="sp-profile-info">
      <p class="sp-profile-name">${data.name}</p>
      <p class="sp-profile-handle">Spotify Profile &middot; ${data.followers.toLocaleString()} followers</p>
      <div class="sp-profile-stats">
        <div>
          <div class="sp-profile-stat-val" id="sp-stat-playlists">—</div>
          <div class="sp-profile-stat-lbl">Playlist</div>
        </div>
        <div>
          <div class="sp-profile-stat-val" id="sp-stat-liked">—</div>
          <div class="sp-profile-stat-lbl">Lagu Disukai</div>
        </div>
        <div>
          <div class="sp-profile-stat-val" id="sp-stat-artists">—</div>
          <div class="sp-profile-stat-lbl">Artis Favorit</div>
        </div>
      </div>
    </div>
  `;
}

function updateStats(playlists, likedSongs, topArtists) {
  const p = document.getElementById("sp-stat-playlists");
  const l = document.getElementById("sp-stat-liked");
  const a = document.getElementById("sp-stat-artists");
  if (p) p.textContent = playlists.length;
  if (l) l.textContent = likedSongs.length;
  if (a) a.textContent = topArtists.length;
}

function renderPlaylists(playlists) {
  const el = document.getElementById("sp-playlists");
  const countEl = document.getElementById("sp-playlists-count");
  if (!el) return;
  if (countEl) countEl.textContent = playlists.length + " playlist";
  if (!playlists.length) { el.innerHTML = `<p class="sp-error">Belum ada playlist.</p>`; return; }
  el.innerHTML = `<div class="sp-playlist-grid">
    ${playlists.map(p => `
      <a class="sp-playlist-item" href="${p.url || '#'}" target="_blank" rel="noreferrer">
        <div class="sp-playlist-art">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : musicSVG()}
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
  if (countEl) countEl.textContent = songs.length + " lagu";
  if (!songs.length) { el.innerHTML = `<p class="sp-error">Belum ada lagu yang disukai.</p>`; return; }
  el.innerHTML = `<div class="sp-track-list">
    ${songs.map((t, i) => `
      <a class="sp-track" href="${t.url || '#'}" target="_blank" rel="noreferrer">
        <span class="sp-track-num">${i + 1}</span>
        <div class="sp-track-art">
          ${t.image ? `<img src="${t.image}" alt="${t.title}" loading="lazy">` : musicSVG()}
        </div>
        <div class="sp-track-info">
          <p class="sp-track-name">${t.title}</p>
          <p class="sp-track-artist">${t.artist}</p>
        </div>
        <span class="sp-track-heart">${heartSVG()}</span>
        <span class="sp-track-dur">${msDuration(t.duration)}</span>
      </a>
    `).join("")}
  </div>`;
}

function renderTopTracks(tracks) {
  const el = document.getElementById("sp-top-tracks");
  if (!el) return;
  if (!tracks.length) { el.innerHTML = `<p class="sp-error">Belum ada data.</p>`; return; }
  el.innerHTML = `<div class="sp-track-list">
    ${tracks.map((t, i) => `
      <a class="sp-track" href="${t.url || '#'}" target="_blank" rel="noreferrer">
        <span class="sp-track-num">${i + 1}</span>
        <div class="sp-track-art">
          ${t.image ? `<img src="${t.image}" alt="${t.title}" loading="lazy">` : musicSVG()}
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
  if (countEl) countEl.textContent = artists.length + " artis";
  if (!artists.length) { el.innerHTML = `<p class="sp-error">Belum ada data.</p>`; return; }
  el.innerHTML = `<div class="sp-artist-grid">
    ${artists.map(a => `
      <a class="sp-artist-item" href="${a.url || '#'}" target="_blank" rel="noreferrer">
        <div class="sp-artist-avatar">
          ${a.image ? `<img src="${a.image}" alt="${a.name}" loading="lazy">` : userSVG()}
        </div>
        <p class="sp-artist-name">${a.name}</p>
        <p class="sp-artist-genre">${a.genre || "—"}</p>
      </a>
    `).join("")}
  </div>`;
}

function showAllLoading() {
  ["sp-playlists","sp-liked-songs","sp-top-tracks","sp-top-artists"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = `<div class="sp-loading"><div class="sp-spinner"></div> Memuat...</div>`;
  });
  const profile = document.getElementById("sp-profile");
  if (profile) profile.innerHTML = `<div class="sp-loading"><div class="sp-spinner"></div></div>`;
}

function showAllError(msg) {
  ["sp-playlists","sp-liked-songs","sp-top-tracks","sp-top-artists"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = `<p class="sp-error">${msg}</p>`;
  });
  const profile = document.getElementById("sp-profile");
  if (profile) profile.innerHTML = `<p class="sp-error">${msg}</p>`;
}

async function loadSpotifyData() {
  if (spLoaded) return;
  spLoaded = true;
  showAllLoading();
  try {
    const res = await fetch(SPOTIFY_API);
    if (!res.ok) throw new Error("Status " + res.status);
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    renderProfile(data.profile);
    renderPlaylists(data.playlists || []);
    renderLikedSongs(data.likedSongs || []);
    renderTopTracks(data.topTracks || []);
    renderTopArtists(data.topArtists || []);
    updateStats(data.playlists || [], data.likedSongs || [], data.topArtists || []);
  } catch (err) {
    spLoaded = false;
    showAllError("Tidak dapat memuat data Spotify saat ini.");
    console.error("[Spotify]", err);
  }
}

function initSpotify() {
  const page = document.getElementById("page-links");
  if (!page) return;

  if (page.classList.contains("active")) {
    loadSpotifyData();
    return;
  }

  const observer = new MutationObserver(() => {
    if (page.classList.contains("active")) {
      loadSpotifyData();
      observer.disconnect();
    }
  });

  observer.observe(page, { attributes: true, attributeFilter: ["class"] });
}

document.addEventListener("DOMContentLoaded", initSpotify);