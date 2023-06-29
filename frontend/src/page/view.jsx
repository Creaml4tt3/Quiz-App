import React, { useEffect, useState } from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import axios from "axios";

function View() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
      axios.get(`${process.env.REACT_API_APP}api/ans`).then();
    }, []);

  const handleOpenModal = (id) => {
    setModalOpen(true);
    console.log(modalOpen);
    //data view
    // const findData = data.map((item) => item.id === id && item);
    if (modalOpen) {
      return (
        <div className="flex bg-gold-400 z-10">
          hellworld
          {/* {findData[0].ans.map((item) => {
            return (
              <div>
                <span>{item.id} </span>
                {item.ans.length > 1 ? (
                  item.ans.map((ans) => <span>{ans}</span>)
                ) : (
                  <span>{item.ans}</span>
                )}
              </div>
            );
          })} */}
        </div>
      );
    }
  };

  return (
    // data barem
    <div className="">
      {modalOpen ? (
        <div
          className={`Modal flex justify-center items-center position-absolute w-[100%] h-[100%]  text-white `}
        >
          <div className="Modal-Container flex  p-6  w-[70%] h-[70%] bg-black text-white rounded-md z-10 ">
            Modal
            <div className="Modal-Onclose flex  w-full h-7 justify-end ">
              <p onClick={() => setModalOpen(false)}>X</p>
            </div>
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
            <tbody className="Table-Body">
              <tr className="Table-Row">
                <td className="Table-Info Table-Index">{"data"}</td>
                <td className="Table-Info">{"Se"}</td>
                <td className="Table-Info">{"SE"}</td>
                <td className="Table-Info">{"0"}</td>
                <td className="Table-Info">
                  {new Date().toLocaleDateString("th")}
                </td>
                <td
                  className={`Table-Info ${modalOpen && "pointer-events-none"}`}
                  onClick={() => handleOpenModal("3")}
                >
                  <PreviewIcon />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default View;
