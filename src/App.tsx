import Loader from "./components/Loader/Loader";
import React, { FC } from "react";
import Main from "./StyledApp";
import TableTwo from "./components/TableTwo/TableTwo";
import TableThree from "./components/TableThree/TableThree";
import TableOne from "./components/TableOne/TableOne";

const App: FC = () => {
  return (
    <Main>
      <Loader />
      <TableOne />
      <TableTwo />
      <TableThree />
    </Main>
  );
};

export default App;
