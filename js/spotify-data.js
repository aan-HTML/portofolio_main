const SPOTIFY_DATA = {

  /* PROFIL */
  profile: {
    name: "AanSwift",
    image: "img/profil-spotify.jpg",
    url: "https://open.spotify.com/user/31fm4l3w7nyqbx3py7c6sbaebng4?si=f34c9ca254cf42df",
  },

  /* STATISTIK */
  stats: {
    playlists:  2,
    likedSongs: 211,
    topArtists: 31,
  },

/* Playlist*/
  playlists: [
    {
      id:    "playlist-1",
      name:  "My playlist",
      total: 96,
      image: "img/playlist-1.webp",
      url:   "https://open.spotify.com/playlist/2Hd8NpflDg13Q5qWZJMVxR?si=6ukfoY4iQgO0_hXTBmdN7A",
    },
    {
      id:    "playlist-2",
      name:  "MOOD",
      total: 143,
      image: "img/playlist-2.webp",
      url:   "https://open.spotify.com/playlist/190mvd3jkl7xq6rOgJyB7A?si=SI9pEHK5T7qcA00-wEF9tQ",
    },
  ],

  /* LAGU YANG DISUKAI */
  // duration: format "m:ss"
  likedSongs: [
    {
      id:       "track-1",
      title:    "Strong",
      artist:   "One Direction",
      // Album: FOUR (2014)
      image:    "https://i.scdn.co/image/ab67616d00004851ce6d0d80bbc3d3a5e0e71706",
      url:      "https://open.spotify.com/track/3qT4bUD1MaWpGrTwcvguhb",
      duration: "3:04",
    },
    {
      id:       "track-2",
      title:    "My Love",
      artist:   "Westlife",
      // Album: Coast to Coast (2000)
      image:    "https://i.scdn.co/image/ab67616d00004851c7a2a07cfac6a9d4016e9f68",
      url:      "https://open.spotify.com/track/3ygQfnAkWVFMKKFjFpPXfP",
      duration: "3:51",
    },
    {
      id:       "track-3",
      title:    "Ku Dengannya Kau Dengan Dia",
      artist:   "Afgan",
      // Album: Confession No. 1 (2008)
      image:    "https://i.scdn.co/image/ab67616d00004851e6d9eba31c1a8a1f2d2b1234",
      url:      "https://open.spotify.com/intl-id/track/0VIXM6mZk93jCKa3Exud4m?si=b5866923d3904d2a",
      duration: "4:28",
    },
    {
      id:       "track-4",
      title:    "That's Why You Go Away",
      artist:   "Strange Foreign Beauty",
      image:    "https://i.scdn.co/image/ab67616d00004851b8a7e2c9e0f7f2a1d3c4e5f6",
      url:      "https://open.spotify.com/track/2ccW4vFSVKRgVjkZzvdjRw?si=6lZrivxkSHyyuEb0uzikzA",
      duration: "4:13",
    },
    {
      id:       "track-5",
      title:    "I Lay My Love on You (Remix)",
      artist:   "Westlife",
      // Album: World of Our Own (2001)
      image:    "https://i.scdn.co/image/ab67616d00004851a1f3e3c2b0d9e8f7c6b5a4d3",
      url:      "https://open.spotify.com/intl-id/track/0V82wcNlunw76nvvmPL9tk?si=27dd8ed5c0c74be8",
      duration: "3:28",
    },
  ],

  /* ARTIS FAVORIT */
  topArtists: [
    {
      id:    "artist-1",
      name:  "One Direction",
      genre: "Pop",
      image: "https://i.scdn.co/image/ab6761610000e5eb39848b2f4f6b3d37f2cb0dbc",
      url:   "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq",
    },
    {
      id:    "artist-2",
      name:  "Westlife",
      genre: "Pop",
      image: "https://i.scdn.co/image/ab6761610000e5eb47ae8b3398e04b7e79f09ead",
      url:   "https://open.spotify.com/artist/3GwtnkyBVM6sMPfVfmFOhG",
    },
    {
      id:    "artist-3",
      name:  "Bruno Mars",
      genre: "Pop",
      image: "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
      url:   "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C",
    },
    {
      id:    "artist-4",
      name:  "Afgan",
      genre: "Pop",
      image: "https://i.scdn.co/image/ab6761610000e5eb84e7e97e777f4f87f0d3af21",
      url:   "https://open.spotify.com/artist/4hYoijj2oGhG6d9vCEn7Aw",
    },
  ],
};