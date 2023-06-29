import React, { useEffect, useState } from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import axios from "axios";

function View() {
  const [data, setData] = useState([]);
  const [getData, setGetData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [indexData, setIndexData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://${process.env.REACT_APP_API}api/ans`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOpenModal = (id, index) => {
    setModalOpen(true);
    setIndexData(index);
    console.log(id);
    const findData = data.map((item) => item.user_id === id && item);
    setGetData(findData);
  };

  useEffect(() => {
    // console.log(getData[0].ans.map((item) => item.question_id));
  }, [getData]);
  return (
    // data barem
    <div className="">
      {console.log(getData)}
      {modalOpen ? (
        <div
          className={`Modal flex justify-center items-center position-absolute w-[100%] h-[100%]  text-white `}
        >
          <div className="Modal-Container flex flex-col  p-6  w-[70%] h-[70%] overflow-x-auto scroll-smooth text-white rounded-md z-10 ">
            <div className="Modal-Onclose flex  w-full h-7 justify-end ">
              <p className="text-white" onClick={() => setModalOpen(false)}>
                X
              </p>
            </div>
            {getData.length > 0 &&
              getData[indexData].ans.map((questionAns) => {
                return (
                  <div>
                    <div className="flex flex-col">
                      <div>
                        <span className="text-purple-400">
                          {questionAns.question_id}.{" "}
                        </span>
                        <span className="text-yellow-300">
                          {questionAns.question}
                        </span>
                      </div>
                      <div>
                        <span className="text-blue-200">
                          {questionAns.sub_question}
                        </span>
                      </div>
                    </div>
                    <div className="Ans-Container flex gap-5">
                      <span className="text-red-700">คำตอบ</span>
                      {questionAns.ans.map((userAns, index) => {
                        return <span>{`${index + 1}. ${userAns.ans}`}</span>;
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : null}
      <div className={`Table-Container  ${modalOpen && "opacity-50 -z-50"}`}>
        <div className="View-Container flex flex-col items-center gap-[20px]">
          <div className="Title-Container pt-4">
            <span>Data Answer Users</span>
          </div>
          <table className="Table-Sale mt-4">
            <thead className="Table-Head">
              <tr className="Table-Row">
                <th className="Table-Head-Text Table-Number"> No.</th>
                <th className="Table-Head-Text">Name</th>
                <th className="Table-Head-Text">E-mail</th>
                <th className="Table-Head-Text">Score</th>
                <th className="Table-Head-Text Table-Date">Created</th>
                <th className="Table-Head-Text">View-ans</th>
              </tr>
            </thead>
            {data.length >= 1
              ? data?.map((item, ind) => {
                  return (
                    <tbody className="Table-Body">
                      <tr className="Table-Row">
                        <td className="Table-Info Table-Index">
                          {item.user_id}
                        </td>
                        <td className="Table-Info">{item.name}</td>
                        <td className="Table-Info">{item.email}</td>
                        <td className="Table-Info">{item.score}</td>
                        <td className="Table-Info">
                          {new Date().toLocaleDateString("th")}
                        </td>
                        <td
                          className={`Table-Info ${
                            modalOpen && "pointer-events-none"
                          }`}
                          onClick={() => handleOpenModal(item.user_id, ind)}
                        >
                          <PreviewIcon />
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              : null}
          </table>
        </div>
      </div>
    </div>
  );
}

export default View;
