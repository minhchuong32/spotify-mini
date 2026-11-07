// 1. Render Songs
// 2. Scroll top
// 3. play / pause / seek
// 4. CD rotate
// 5. Next / prev
// 6. Random
// 7. Next / Repeat when ended
// 8. Active song
// 9. Scroll active song into view
// 10. Play song when click

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const player = $(".player");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const nextSong = $(".btn-next");
const prevSong = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const accountPanel = $(".account-panel");
const accountAvatarImage = $(".account-avatar-image");
const accountStatus = $(".account-status");
const accountLoginButton = $(".account-login-button");
const accountForm = $(".account-form");
const accountPasswordInput = $("#account-password");
const accountMessage = $(".account-message");
const accountSongSplitIndex = 22;
const accountNames = ["achuongdepzai", "baongocdangiu"];
const storedAccount =
  localStorage.getItem("spotify-mini-current-account") || "";

function syncDashboardHeight() {
  const dashboard = document.querySelector(".dashboard");
  document.documentElement.style.setProperty(
    "--dashboard-height",
    `${dashboard.offsetHeight + 12}px`,
  );
}

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  loggedInAccount: accountNames.includes(storedAccount) ? storedAccount : "",
  songs: [],
  allSongs: [
    {
      name: "RAINING IN ＯＳＡＫＡ (Lofi HipHop)",
      singer: "Sleep & Rain mix",
      path: "./assets/music/raining_lofi.mp3",
      image: "./assets/images/raining_lofi.jpg",
    },
    {
      name: "Sprited Away",
      singer: "Itsumo Nandodemo",
      path: "./assets/music/Always with me _ Relaxing Music _ 30 Mins (online-audio-converter.com).mp3",
      image: "./assets/images/sprited_away.png",
    },
    {
      name: "Blue",
      singer: "Young Kai",
      path: "./assets/music/Blue.mp3",
      image: "./assets/images/Blue.jpg",
    },
    {
      name: "Phonecert",
      singer: "10cm",
      path: "./assets/music/phonecert.mp3",
      image: "./assets/images/phonecert.jpg",
    },
    {
      name: "Aya Nakamura - Copines (Lyrics)",
      singer: "10cm",
      path: "./assets/music/copines.mp3",
      image: "./assets/images/copines.jpg",
    },
    {
      name: "Xứng đôi cưới thôi",
      singer: "Nguyên",
      path: "./assets/music/xungdoicuoithoi.mp3",
      image: "./assets/images/xungdoicuoithoi.jpg",
    },
    {
      name: "Đừng Làm Trái Tim Anh Dau ",
      singer: "Sơn Tùng M-TP",
      path: "./assets/music/DungLamTraiTimAnhDau.mp3",
      image: "./assets/images/DungLamTraiTimAnhDau.jpg",
    },
    {
      name: "id thang máy (feat. 267)",
      singer: "W/N",
      path: "./assets/music/idThangMay.mp3",
      image: "./assets/images/idThangMay.jpg",
    },
    {
      name: "3 1 0 7 - 2 (Lofi Ver.)",
      singer: "Orinn",
      path: "./assets/music/3107.mp3",
      image: "./assets/images/3107.jpg",
    },
    {
      name: "Drawer",
      singer: "10CM",
      path: "./assets/music/Drawer.mp3",
      image: "./assets/images/Drawer.jpg",
    },
    {
      name: "Đường Tôi Chở Em Về - Lofi",
      singer: "1 9 6 7",
      path: "./assets/music/DuongToiChoEmVe.mp3",
      image: "./assets/images/DuongToiChoEmVe.jpg",
    },
    {
      name: "Gió x Đom Đóm (Remix)",
      singer: "Cukak, Jank",
      path: "./assets/music/GioDomDom.mp3",
      image: "./assets/images/GioDomDom.jpg",
    },
    {
      name: "Gió (Lofi)",
      singer: "1 9 6 7,Jank",
      path: "./assets/music/GioLoFi.mp3",
      image: "./assets/images/GioLoFi.jpg",
    },
    {
      name: "Hạ Còn Vương NắngNắng",
      singer: "DatKaa",
      path: "./assets/music/HaConVuongNang.mp3",
      image: "./assets/images/HaConVuongNang.jpg",
    },
    {
      name: "Hẹn Ngày Mai Yêu",
      singer: "Long Cao",
      path: "./assets/music/HenNgayMaiYeu.mp3",
      image: "./assets/images/HenNgayMaiYeu.jpg",
    },
    {
      name: "Kẻ Theo Đuổi Ánh Sáng (Lofi)",
      singer: "Orinn",
      path: "./assets/music/KeTheoDuoiAS.mp3",
      image: "./assets/images/KeTheoDuoiAS.jpg",
    },
    {
      name: "Tình cờ yêu em",
      singer: "Kuu Đức Nam, Linh Thộn",
      path: "./assets/music/TinhCoYeuEm.mp3",
      image: "./assets/images/tinhCoYeuEm.jpg",
    },
    {
      name: "Yên Bình Có Quá Đắt Không",
      singer: "Khiem",
      path: "./assets/music/YenBinhCoQDK.mp3",
      image: "./assets/images/YenBinhCoQDK.jpg",
    },
    {
      name: "2AM",
      singer: "...",
      path: "./assets/music/2AM.mp3",
      image: "./assets/images/2AM.jpg",
    },
    {
      name: "CUPID",
      singer: "FIFTY FIFTY",
      path: "./assets/music/Cupid.mp3",
      image: "./assets/images/Cupid.jpg",
    },
    {
      name: "Hymn For The Weekend",
      singer: "Coldplay",
      path: "./assets/music/HuynForTheWeekend.mp3",
      image: "./assets/images/HuynForTheWeekend.jpg",
    },
    {
      name: "Nắng Có Mang Em Về",
      singer: "Shartnuss",
      path: "./assets/music/NangCoMangEmVe.mp3",
      image: "./assets/images/NangCoMangEmVe.jpg",
    },
    {
      name: "Faded",
      singer: "Alan Walker",
      path: "./assets/music/faded.mp3",
      image: "./assets/images/faded.jpg",
    },

    

    // baongoc
    {
      name: "Secret",
      singer: "Quang Hùng MasterD, CODYNAMVO, CONGB và Wren Evans",
      path: "./assets/music/Secret.mp3",
      image: "./assets/images/secret.jpg",
    },
    {
      name: "Làm Sao Để Em Tựa Vào",
      singer: "Sino ft. Khang Thanh",
      path: "./assets/music/LamSaoDeEmTuaVao.mp3",
      image: "./assets/images/lam_sao_de_em_tua_vao.jpg",
    },
    {
      name: "Vượt Ngưỡng Tình Yêu",
      singer: "đồng",
      path: "./assets/music/VuotNguongTY.mp3",
      image: "./assets/images/VuotNguongTY.jpg",
    },
    {
      name: "Tập Yêu Đi (Jacketkat x LUNY Remix)",
      singer: "Anh Rồng",
      path: "./assets/music/TapIuDI.mp3",
      image: "./assets/images/TapIuDi.jpg",
    },
    {
      name: "Đi Chơi",
      singer: "Dlow",
      path: "./assets/music/Đi Chơi.mp3",
      image: "./assets/images/dichoi.jpg",
    },
    {
      name: "In Love (ft. JustaTee)",
      singer: "Low G",
      path: "./assets/music/InLove.mp3",
      image: "./assets/images/InLove.jpg",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
        <div class="song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
            <div
                class="thumb"
                style="background-image: url('${song.image}')"
            ></div>
            <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
    `;
    });
    $(".playlist").innerHTML = htmls.join("");
  },
  setSongsForAccount: function (account) {
    audio.pause();
    progress.value = 0;
    this.songs =
      account === "baongocdangiu"
        ? this.allSongs.slice(accountSongSplitIndex)
        : this.allSongs.slice(0, accountSongSplitIndex);
    this.currentIndex = 0;
    this.loadCurrentSong();
    this.render();
  },
  renderAccounts: function () {
    accountAvatarImage.src =
      this.loggedInAccount === "baongocdangiu"
        ? "./assets/images/baongoc.jpg"
        : "./assets/images/admin.jpg";
    accountAvatarImage.alt = this.loggedInAccount
      ? `Ảnh đại diện ${this.loggedInAccount}`
      : "Ảnh đại diện tài khoản";
    accountStatus.textContent = this.loggedInAccount || "Chưa đăng nhập";
    accountPanel.classList.toggle("logged-in", Boolean(this.loggedInAccount));
    accountLoginButton.querySelector("span").textContent = this.loggedInAccount
      ? "Đổi tài khoản"
      : "Đăng nhập";
  },
  handleAccountEvents: function () {
    accountLoginButton.onclick = function () {
      accountForm.hidden = !accountForm.hidden;
      syncDashboardHeight();
      if (!accountForm.hidden) {
        accountMessage.textContent = "";
        accountPasswordInput.value = "";
        accountPasswordInput.focus();
      }
    };

    accountForm.onsubmit = function (event) {
      event.preventDefault();
      const account = accountPasswordInput.value.trim().toLowerCase();
      if (!accountNames.includes(account)) {
        accountMessage.textContent = "Mật mã không đúng. Hãy thử lại.";
        accountPasswordInput.focus();
        return;
      }
      app.loggedInAccount = account;
      localStorage.setItem("spotify-mini-current-account", app.loggedInAccount);
      app.setSongsForAccount(account);
      app.renderAccounts();
      accountForm.hidden = true;
      syncDashboardHeight();
    };
  },
  // define app.currentSong == first song
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex]; // first song
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // xử lí CD rotate / pause
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10s
      iterations: Infinity, // lặp vô hạn
    });
    cdThumbAnimate.pause(); // default pause

    // xử lí play khi click
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // khi song được play
    audio.onplay = function () {
      _this.isPlaying = true; // đang play
      player.classList.add("playing"); // thêm class playing vào player
      cdThumbAnimate.play(); // play animation
    };
    // khi song bị pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // currentTime: thời gian hiện tại của bài hát
    // duration: thời gian của bài hát
    // ontimeupdate: sự kiện xảy ra khi thời gian của bài hát thay đổi
    audio.ontimeupdate = function () {
      // nếu có duration thì mới update progress bar
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100,
        );
        progress.value = progressPercent;
      }
    };

    // Xử lí khi tua bài hát
    // oninput: sự kiện xảy ra khi giá trị của input thay đổi
    progress.oninput = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value; //  thời gian cần tua đến
      audio.currentTime = seekTime;
    };

    // khi click next song
    nextSong.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollActiveSongIntoView();
    };

    // khi click prev song
    prevSong.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
    };

    // Xử lí bật / tắt random song
    randomBtn.onclick = function (e) {
      if (_this.isRepeat) {
        _this.isRepeat = false;
        repeatBtn.classList.remove("active");
      }
      _this.isRandom = !_this.isRandom; // đảo ngược giá trị isRandom
      randomBtn.classList.toggle("active", _this.isRandom); // thêm class active nếu isRandom = true
      _this.randomSong();
      audio.play();
    };

    // Xử lí lặp lại một song
    repeatBtn.onclick = function (e) {
      if (_this.isRandom) {
        _this.isRandom = false;
        randomBtn.classList.remove("active");
      }
      _this.isRepeat = !_this.isRepeat; // đảo ngược giá trị isRepeat
      repeatBtn.classList.toggle("active", _this.isRepeat); // thêm class active nếu isRepeat = true
    };

    // Xử lí next song khi ended song
    audio.onended = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else if (_this.isRepeat) {
        audio.play();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
    };

    // xử lí phóng to, thu nhỏ đĩa cd khi scroll
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop; // tọa độ scroll hiện tại
      const newCdWidth = cdWidth - scrollTop; // kích thước mới của cd giảm dần
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0; // kích thướng mới nếu scroll top
      $(".cd").style.opacity = newCdWidth / cdWidth; // mờ dần
    };

    // Lắng nghe hành vi click vào playlist
    // closets : lấy phần tử cha gần nhất có class là song chua co class active(dang phat)
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");
      if (songNode || e.target.closest(".option")) {
        // xử lí khi click vào song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index); // lấy index của bài hát
          _this.loadCurrentSong(); // load bài hát hiện tại
          _this.render(); // render lại playlist
          audio.play(); // play bài hát
        }
        // xử lí khi click vào option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  // cuộn bài hát hiện tại vào view
  scrollActiveSongIntoView: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = "url(" + this.currentSong.image + ")";
    audio.src = this.currentSong.path;
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex); // nếu newIndex = currentIndex thì random lại
    this.currentIndex = newIndex; // cập nhật currentIndex
    this.loadCurrentSong(); // load bài hát mới
  },
  start: function () {
    // Định nghĩa các thuộc tính cho object
    this.defineProperties();
    this.setSongsForAccount(this.loggedInAccount || "achuongdepzai");
    this.renderAccounts();
    this.handleAccountEvents();
    // Lắng nghe / xử lí các sự kiện
    this.handleEvents();
    syncDashboardHeight();
  },
};

app.start();
window.addEventListener("resize", syncDashboardHeight);
