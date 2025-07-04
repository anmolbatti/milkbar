import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_SERVER_ADDRESS } from "../../../data/variables/variables-1";

const CheckboxOfSelectingFeaturedItemInProjectManagePage = (props) => {
  const { _id } = props;

  const [checkedStatus, setCheckedStatus] = useState(false);

  const [loadingStatus, setLoadingStatus] = useState("NOT_LOADING");

  const handleCheckBoxChange = (e) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setLoadingStatus("LOADING");
      const dataForServer = { _id };
      axios
        .post(
          `${BACKEND_SERVER_ADDRESS}/api/admin/add-to-featured-list`,
          dataForServer
        )
        .then((response) => {
          handleRefreshStatus();
          setLoadingStatus("NOT_LOADING");
        })
        .catch((error) => {
          console.log(error);
          setLoadingStatus("NOT_LOADING");
        });
    } else if (!isChecked) {
      setLoadingStatus("LOADING");
      const dataForServer = { _id };
      axios
        .post(
          `${BACKEND_SERVER_ADDRESS}/api/admin/delete-from-featured-list`,
          dataForServer
        )
        .then((response) => {
          handleRefreshStatus();
          setLoadingStatus("NOT_LOADING");
        })
        .catch((error) => {
          console.log(error);
          setLoadingStatus("NOT_LOADING");
        });
    }
  };

  const handleRefreshStatus = () => {
    setLoadingStatus("LOADING");
    const dataForServer = { _id };
    axios
      .post(
        `${BACKEND_SERVER_ADDRESS}/api/admin/check-if-in-featured-list`,
        dataForServer
      )
      .then((response) => {
        const data = response.data.data;
        if (!data) {
          throw new Error("Something went wrong");
        }
        if (data.length < 1) {
          throw new Error("Does Not Exists In Featured Section");
        }
        setCheckedStatus(true);
        setLoadingStatus("NOT_LOADING");
      })
      .catch((error) => {
        setCheckedStatus(false);
        setLoadingStatus("NOT_LOADING");
      });
  };
  useEffect(() => {
    handleRefreshStatus();
  }, []);
  return (
    <>
      <div className="flex justify-center items-center">
        {loadingStatus === "NOT_LOADING" && (
          <input
            type="checkbox"
            checked={checkedStatus}
            onChange={handleCheckBoxChange}
            className="w-[1.5rem] h-[1.5rem] cursor-pointer rounded-full"
          />
        )}

        {loadingStatus === "LOADING" && (
          <i className="fa-solid fa-spinner text-3xl animate-spin"></i>
        )}
      </div>
    </>
  );
};

export default CheckboxOfSelectingFeaturedItemInProjectManagePage;
