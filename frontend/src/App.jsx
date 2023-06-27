import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import allpage from "./page";
import LangP  from "./context/LangP";
import { useState } from "react";
function App() { 
  const [lang, setLang] = useState('JS'); // ค่าเริ่มต้นเป็น ''
  return (
    <BrowserRouter>
          <LangP.Provider value={{lang,setLang}}>
      <Routes>
        {allpage.map((item, ind) => {
        return <Route element={item.element} path={item.path} key={ind} />;
        })}
      </Routes>
        </LangP.Provider>
    </BrowserRouter>
    
    );
  }

export default App;
