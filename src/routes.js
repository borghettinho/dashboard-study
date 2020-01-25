import Info from "./pages/info";
import Admin from "./pages/admin";
import NotFound from "./pages/404";

export default [
  {
    path: "/info",
    component: Info
  },
  {
    path: "/admin",
    component: Admin
  },
  {
    path: "/404",
    component: NotFound
  }
];
