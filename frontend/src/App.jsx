import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import allpage from "./page";
import LangP from "./context/LangP";
import { useState } from "react";
import PageNotFound from "./page/defaultPage";
// import "dotenv";

function App() {
  const [lang, setLang] = useState("js"); // ค่าเริ่มต้นเป็น ''
  console.log(process.env.REACT_APP_ADMIN);
  return (
    <BrowserRouter>
      <LangP.Provider value={{ lang, setLang }}>
        <Routes>
          {allpage.map((item, ind) => {
            if (
              process.env.REACT_APP_ADMIN === "ADMIN" &&
              item.status_page === "ADMIN"
            ) {
              return (
                <Route element={item.element} path={item.path} key={ind} />
              );
            } else if (item.status_page !== "ADMIN") {
              return (
                <Route element={item.element} path={item.path} key={ind} />
              );
            }
            return <Route element={<PageNotFound />} path={"#"} key={ind} />;
          })}
        </Routes>
      </LangP.Provider>
    </BrowserRouter>
  );
}

export default App;
