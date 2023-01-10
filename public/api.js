const api = {
  playlists: [],
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
