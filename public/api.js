const api = {
  playlists: {
    userCollection: [
      {
        id: 1,
        title: "Made You Look",
        author: "Meghan Trainor",
        album: "Takin' It Back",
        duration: "2:14",
        url: "./music/USUK/MadeYouLook.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048511a4f1ada93881da4ca8060ff",
      },
      {
        id: 2,
        title: "ONLY",
        author: "LeeHi",
        album: "4 ONLY",
        duration: "3:57",
        url: "./music/Korea/Only.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851d5d11b6ac4242aaa41c8be69",
      },
      {
        id: 3,
        title: "Downtown",
        author: "Allie X",
        album: "CollXtion II",
        duration: "4:00",
        url: "./music/USUK/Downtown.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048518846c272c6fd8aa8c5d58bb6",
      },
      {
        id: 4,
        title: "girls like me don't cry",
        author: "thuy",
        album: "girls like me don't cry",
        duration: "3:33",
        url: "./music/USUK/GirlsLikeMeDontCry.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851bdcbd2a3317bdb308b5d1789",
      },
      {
        id: 5,
        title: "Liệu Giờ",
        author: "2T, Văn",
        album: "Liệu Giờ",
        duration: "4:18",
        url: "./music/VietNam/LieuGio.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048516fabe9ff1578591a93e9918b",
      },
      {
        id: 6,
        title: "Bước Qua Mùa Cô Đơn",
        author: "Vũ.",
        album: "Bước Qua Mùa Cô Đơn",
        duration: "4:38",
        url: "./music/VietNam/BuocQuaMuaCoDon.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851e64a2e5a2a3a6d1bf81ab191",
      },
      {
        id: 7,
        title: "Chưa Quên Người Yêu Cũ (Live Version)",
        author: "Hà Nhi",
        album: "Chưa Quên Người Yêu Cũ",
        duration: "5:36",
        url: "./music/VietNam/ChuaQuenNguoiYeuCuLiveVersion.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851157acee05256979fb391366f",
      },
      {
        id: 8,
        title: "Chuyện Đôi Ta (feat. Muộii)",
        author: "Emcee L (Da LAB), Muộii (Starry Night)",
        album: "Chuyện Đôi Ta (feat. Muộii)",
        duration: "3:28",
        url: "./music/VietNam/ChuyenDoiTa.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851a400211178f6d590d875f2da",
      },
      {
        id: 9,
        title: "Khi Cô Đơn Em Nhớ Ai",
        author: "Suni Hạ Linh, Hoàng Dũng, GREY D, Orange",
        album: "Hương Mùa Hè EP.01",
        duration: "4:29",
        url: "./music/VietNam/KhiCoDonEmNhoDenAi.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851c6a109849383ded287fa6e05",
      },
      {
        id: 10,
        title: "Mơ",
        author: "Orange, Đức Phúc",
        album: "Trạm 1 - Xuân Hạ Thu Đông, rồi lại Xuân",
        duration: "4:20",
        url: "./music/VietNam/Mo-OrangeDucPhuc.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048518f65b9bc9f12507d0dc0ac83",
      },
      {
        id: 11,
        title: "ngủ một mình (tình rất tình)",
        author: "HIEUTHUHAI, Negav, Kewtiie",
        album: "ngủ một mình (tình rất tình)",
        duration: "3:12",
        url: "./music/VietNam/Ngu-Mot-Minh.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851eabae13f859e3f010e80105e",
      },
      {
        id: 12,
        title: 'Tự Sự - Original Soundtrack from "Qua Bển Làm Chi"',
        author: "Orange, Thuan Nguyen",
        album: 'Tự Sự - Original Soundtrack from "Qua Bển Làm Chi"',
        duration: "4:17",
        url: "./music/VietNam/TuSuQuaBenLamChiOST.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d0000485182085c362d59e4aeac21f44b",
      },
      {
        id: 13,
        title: "Thích Em Hơi Nhiều",
        author: "Wren Evans",
        album: "Thích Em Hơi Nhiều",
        duration: "2:51",
        url: "./music/VietNam/ThichEmHoiNhieu.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d0000485108c808810a37c9a04f88cca1",
      },
      {
        id: 14,
        title: "Waiting For You",
        author: "MONO, Onionn",
        album: "22",
        duration: "4:25",
        url: "./music/VietNam/WaitingForYou.mp3",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851f909731198469e69f5809083",
      },
    ],
  },
  welcomePlaylists: [
    {
      id: "welcome_1",
      thumb: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
      title: "Bài hát đã thích",
      path: "/userCollection",
    },
    {
      id: "welcome_2",
      thumb: "https://i.scdn.co/image/ab6765630000ba8aeb5b14182d1f591c2df02a7d",
      title: "Sunhuyn Podcast",
      path: "/podcast/285a0601c458bbd537c580c499509332",
    },
    {
      id: "welcome_3",
      thumb: "https://i.scdn.co/image/ab67706f00000002916465d115858dc0187be4ac",
      title: "Hot Hits Vietnam",
      path: "/playlist/e26bfc1f4df2103c9d3e6c9ca9d7690b",
    },
    {
      id: "welcome_4",
      thumb: "https://i.scdn.co/image/ab676186000010162675dda61834354f31e25d84",
      title: "This Is League Of Legends",
      path: "/playlist/0ace2dde9cc59aa38784c1d115b2cd85",
    },
    {
      id: "welcome_5",
      thumb: "https://i.scdn.co/image/ab6761610000e5eb4d998e7541724c918777b8ca",
      title: "League Of Legends",
      path: "/playlist/920d9688ec43132b92bfb71aed996534",
    },
    {
      id: "welcome_6",
      thumb: "https://i.scdn.co/image/ab67706f00000002d355ad76645a2273c420e9c6",
      title: "EQUAL Vietnam",
      path: "/playlist/ec38561849c003e15f7e5a0b6e68102c",
    },
  ],
};

localStorage.setItem("api", JSON.stringify(api));
