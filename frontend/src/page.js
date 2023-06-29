import Quiz from "./page/componentquiz";
import Index from "./page/";
import TesthandleChange from "./page/testhandleChange";
import View from "./page/view";

const allpage = [
  {
    path: "/",
    element: <Index />,
    status_page: "users",
  },
  {
    path: "/quiz",
    element: <Quiz />,
    status_page: "users",
  },
  {
    path: "/test",
    element: <TesthandleChange />,
    status_page: "ADMIN",
  },
  {
    path: "/view-ans",
    element: <View />,
    status_page: "ADMIN",
  },
];

export default allpage;
