# 🎵 Spotify Mini

A lightweight, Spotify-inspired music player built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build tools, just clean DOM manipulation and the native `HTMLAudioElement` API.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

- **Play / Pause** — toggle playback with a single click
- **Next / Previous** — navigate through the playlist
- **Shuffle mode** — play songs in random order
- **Repeat mode** — loop the current track
- **Seekable progress bar** — click or drag to jump to any point in a song
- **Spinning CD animation** — the album art rotates while a track is playing, synced to play/pause state
- **Auto-advance** — automatically plays the next (or a random) track when the current one ends
- **Scroll-reactive album art** — the CD shrinks and fades as the user scrolls down
- **Dynamic playlist rendering** — the song list, active-track highlighting, and metadata are all rendered from a single JS data array
- **Auto-scroll to active song** — the playlist automatically scrolls the currently playing track into view

## 🖥️ Tech Stack

| Layer      | Technology                              |
|------------|------------------------------------------|
| Markup     | HTML5                                    |
| Styling    | CSS3 (custom properties, Flexbox)        |
| Behavior   | Vanilla JavaScript (ES6+)                |
| Icons      | [Font Awesome 5](https://fontawesome.com/) |
| Typography | [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts |
| Audio      | Native `<audio>` element / Web Animations API |

No package manager, bundler, or backend is required — the app runs entirely in the browser.

## 📁 Project Structure

```
spotify-mini/
├── assets/
│   ├── css/
│   │   └── style.css        # Player layout & theme
│   ├── images/               # Album artwork & favicon
│   └── music/                 # MP3 audio files
├── index.html                # App markup / entry point
└── main.js                    # Player logic (state, events, rendering)
```

## 🚀 Getting Started

This is a static, dependency-free project — no installation step is required.

### Option 1: Open directly
1. Clone the repository:
   ```bash
   git clone https://github.com/minhchuong32/spotify-mini.git
   cd spotify-mini
   ```
2. Open `index.html` in your browser.

### Option 2: Run with a local server (recommended)
Some browsers restrict audio/asset loading over the `file://` protocol, so a local server is recommended:

```bash
# Using the VS Code "Live Server" extension
# or, with Node.js installed:
npx serve .
```

Then visit the URL printed in the terminal (e.g. `http://localhost:3000`).

## 🎮 Usage

- Click the **playlist** to select and play any track.
- Use the **control bar** (repeat, previous, play/pause, next, shuffle) to control playback.
- Drag the **progress slider** to seek within the current track.
- Scroll the page to see the album art react dynamically.

## 🎼 Adding Your Own Songs

Songs are defined as a plain JavaScript array in `main.js`. To add a track, drop the audio and cover files into `assets/music/` and `assets/images/`, then add an entry:

```js
{
    name: "Song Title",
    singer: "Artist Name",
    path: "./assets/music/your-file.mp3",
    image: "./assets/images/your-cover.jpg",
}
```

## 📄 License

This project is intended for educational and personal portfolio purposes. Please ensure you have the appropriate rights for any copyrighted audio or image files before distributing or deploying this project publicly.

## 👤 Author

**Chuong** — [@minhchuong32](https://github.com/minhchuong32)
