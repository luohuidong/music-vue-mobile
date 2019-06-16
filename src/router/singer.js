import Singer from "@pages/singerList/";
import SingerDetail from "@pages/singerDetail/";

export default [
  {
    path: "/singer/list",
    component: Singer,
  },
  {
    path: "/singer/detail/:singerId",
    component: SingerDetail
  }
];
