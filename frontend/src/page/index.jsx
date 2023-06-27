import React, { useContext, useState } from "react";

import logo from "../public/images.png";
import { useNavigate } from "react-router";
import LangP from "../context/LangP";
// import { LangP } from "../context/LangP";

export default function Index() {
  const navigate = useNavigate();
  const {lang,setLang} = useContext(LangP);

  const [dataUser ,setDataUser] = useState({
    username : '',
    email : "",
    ans : [],
  })
  const handleLang = (lang) => {
    setLang(lang)
    navigate('/quiz')
  }
  return (
    <div className="flex justify-center w-[100%] h-[100vh] font-sans box-border p-[20px]">
      <div className="flex w-auto flex-col justify-between g-[20px]">
        <img className=" w-[200px] h-[200px]" src={logo} alt="logo" />
        <h1 className="text-center text-2xl text-red-200 ">
          quiz
          <br />
          เวลาในการทำ 30 นาที
        </h1>
        <button onClick={() => handleLang('JS') }>JS</button>
        <button onClick={() =>handleLang('PHP') }>PHP</button>
      </div>
    </div>
  );
}
