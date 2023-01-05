import Search from "~/pages/Search";
import Home from "../pages/Home";
import Library from "../pages/Library";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
  { path: "/library", component: Library },
];

export default publicRoutes;
