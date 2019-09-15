import React from "react";
import Description from "./Description";
import ModalContainer from "./modals/ModalContainer";
import TableContainer from "../shared/table/TableContainer";

const MainContainer = () => {
  return (
    <div>
      <Description />
      <TableContainer />
      <ModalContainer />
    </div>
  );
};

export default MainContainer;
