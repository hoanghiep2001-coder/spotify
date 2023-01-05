import Download from "~/pages/Download";
import Search from "~/pages/Search";
import UserCollection from "~/pages/UserCollection";
import Home from "../pages/Home";
import Library from "../pages/Library";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
  { path: "/library", component: Library },
  { path: "/userCollection", component: UserCollection },
  { path: "/download", component: Download },
];

export default publicRoutes;
