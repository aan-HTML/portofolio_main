const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

async function getAccessToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });
  return res.json();
}

async function fetchSpotify(url, token) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status === 204 || res.status === 404) return null;
  return res.json();
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    const { access_token } = await getAccessToken();

    const [nowPlaying, recentlyPlayed, topTracks, topArtists, playlists, likedSongs] =
      await Promise.all([
        fetchSpotify("https://api.spotify.com/v1/me/player/currently-playing", access_token),
        fetchSpotify("https://api.spotify.com/v1/me/player/recently-played?limit=5", access_token),
        fetchSpotify("https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term", access_token),
        fetchSpotify("https://api.spotify.com/v1/me/top/artists?limit=8&time_range=short_term", access_token),
        fetchSpotify("https://api.spotify.com/v1/me/playlists?limit=6", access_token),
        fetchSpotify("https://api.spotify.com/v1/me/tracks?limit=10", access_token),
      ]);

    const profile = await fetchSpotify("https://api.spotify.com/v1/me", access_token);

    const data = {
      profile: {
        name: profile?.display_name || "Annasirat",
        image: profile?.images?.[0]?.url || null,
        url: profile?.external_urls?.spotify || "#",
        followers: profile?.followers?.total || 0,
      },
      nowPlaying: nowPlaying?.is_playing
        ? {
            isPlaying: true,
            title: nowPlaying.item?.name,
            artist: nowPlaying.item?.artists?.map((a) => a.name).join(", "),
            album: nowPlaying.item?.album?.name,
            image: nowPlaying.item?.album?.images?.[1]?.url,
            url: nowPlaying.item?.external_urls?.spotify,
            progress: nowPlaying.progress_ms,
            duration: nowPlaying.item?.duration_ms,
          }
        : recentlyPlayed?.items?.[0]
        ? {
            isPlaying: false,
            title: recentlyPlayed.items[0].track?.name,
            artist: recentlyPlayed.items[0].track?.artists?.map((a) => a.name).join(", "),
            album: recentlyPlayed.items[0].track?.album?.name,
            image: recentlyPlayed.items[0].track?.album?.images?.[1]?.url,
            url: recentlyPlayed.items[0].track?.external_urls?.spotify,
          }
        : null,
      playlists: (playlists?.items || []).map((p) => ({
        id: p.id,
        name: p.name,
        total: p.tracks?.total || 0,
        image: p.images?.[0]?.url || null,
        url: p.external_urls?.spotify,
      })),
      likedSongs: (likedSongs?.items || []).map((item) => ({
        id: item.track?.id,
        title: item.track?.name,
        artist: item.track?.artists?.map((a) => a.name).join(", "),
        image: item.track?.album?.images?.[2]?.url,
        url: item.track?.external_urls?.spotify,
        duration: item.track?.duration_ms,
      })),
      topTracks: (topTracks?.items || []).map((t) => ({
        id: t.id,
        title: t.name,
        artist: t.artists?.map((a) => a.name).join(", "),
        image: t.album?.images?.[2]?.url,
        url: t.external_urls?.spotify,
        duration: t.duration_ms,
      })),
      topArtists: (topArtists?.items || []).map((a) => ({
        id: a.id,
        name: a.name,
        genre: a.genres?.[0] || "",
        image: a.images?.[2]?.url || a.images?.[0]?.url || null,
        url: a.external_urls?.spotify,
        followers: a.followers?.total || 0,
      })),
    };

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=30");
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}