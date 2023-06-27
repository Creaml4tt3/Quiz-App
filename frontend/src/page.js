import Quiz from "./page/componentquiz";
import Index from "./page/";
import TesthandleChange from "./page/testhandleChange";

const allpage = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/test",
    element: <TesthandleChange />,
  },
];

export default allpage;
