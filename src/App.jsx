import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import allpage from "./page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {allpage.map((item, ind) => {
          return <Route element={item.element} path={item.path} key={ind} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
