import React, { useEffect, useRef, useState } from "react";
import useBasic from "../../hooks/useBasics/useBasics";
import axios from "axios";
import { BACKEND_SERVER_ADDRESS } from "../../data/variables/variables-1";
import { useNavigate } from "react-router-dom";

const MyModal = () => {
  const navigate = useNavigate();
  const modalDivRef = useRef(null);
  const closeModal = useBasic((state) => state.closeModal);
  const idOfItemSelectedToBeDeleted = useBasic(
    (state) => state.idOfItemSelectedToBeDeleted
  );
  const handlePositioningAndOtherStuff = () => {
    const modalDiv = modalDivRef.current;
    if (!modalDiv) {
      return;
    }
    const distanceFromTop = window.scrollY;
    modalDiv.style.top = distanceFromTop + "px";
    document.body.style.overflow = "hidden";
  };

  const closeModalFunctions = () => {
    document.body.style.overflow = "auto";
  };

  const [deleteButtonStatus, setDeleteButtonStatus] = useState("INITIAL");
  const handleDelete = () => {
    console.log(idOfItemSelectedToBeDeleted);
    setDeleteButtonStatus("LOADING");
    const dataForServer = { id: idOfItemSelectedToBeDeleted };
    axios
      .post(
        `${BACKEND_SERVER_ADDRESS}/api/admin/delete-project/v2`,
        dataForServer
      )
      .then((response) => {
        console.log(response);
        setDeleteButtonStatus("SUCCESS");
        setTimeout(() => {
          navigate("/admin/projects");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setDeleteButtonStatus("FAILED");
      });
  };

  useEffect(() => {
    handlePositioningAndOtherStuff();
    return () => {
      closeModalFunctions();
    };
  }, []);

  return (
    <div
      ref={modalDivRef}
      className="bg-[black] w-full h-full absolute top-0 z-50 bg-opacity-70"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-[white] text-[black] px-5 py-10 rounded-lg w-[35rem]">
          <div className="text-end">
            <button
              onClick={closeModal}
              className="bg-[black] text-[white] px-5 py-2 rounded hover:scale-[1.05] active:scale-[0.95]"
            >
              <i className="fa-solid fa-x "></i>
            </button>
          </div>
          <div className="text-center font-medium mt-10">
            Do you surely want to delete this project?
          </div>
          <div className="flex justify-center items-center mt-10">
            <img src="/images/2/asking-imogi.png" alt="" className="w-[7rem]" />
          </div>
          <div className="text-center mt-10 flex gap-5 w-full justify-center">
            {deleteButtonStatus === "INITIAL" && (
              <button
                onClick={handleDelete}
                className="bg-[red] text-[white] text-2xl font-medium w-[7rem] py-2 rounded hover:scale-[1.05] active:scale-[0.95]"
              >
                YES
              </button>
            )}
            {deleteButtonStatus === "LOADING" && (
              <button className="bg-[red] text-[white] text-2xl font-medium w-[10rem] py-2 rounded hover:scale-[1.05] active:scale-[0.95]">
                Deleting <i className="fa-solid fa-spinner animate-spin"></i>
              </button>
            )}
            {deleteButtonStatus === "SUCCESS" && (
              <button className="bg-[red] text-[white] text-2xl font-medium w-[10rem] py-2 rounded hover:scale-[1.05] active:scale-[0.95]">
                Deleted <i className="fa-solid fa-check"></i>
              </button>
            )}
            {deleteButtonStatus === "FAILED" && (
              <button
                onClick={handleDelete}
                className="bg-[red] text-[white] text-2xl font-medium w-[15rem] py-2 rounded hover:scale-[1.05] active:scale-[0.95]"
              >
                Failed, Try Again
              </button>
            )}

            {deleteButtonStatus === "INITIAL" && (
              <button
                onClick={closeModal}
                className="bg-[lawngreen] text-[white] text-2xl font-medium w-[7rem] py-2 rounded hover:scale-[1.05] active:scale-[0.95]"
              >
                NO
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
