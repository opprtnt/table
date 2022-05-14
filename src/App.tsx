import Loader from "./components/Loader";
import Table from "./components/Table";
import TableTwo from "./components/TableTwo";
import styled from "styled-components";
import TableThree from "./components/TableThree";
import React, { FC } from "react";
import { useAppSelector } from "./redux";

const App: FC = () => {
  const isLoading = useAppSelector((state) => state.store.isLoading);
  return (
    <Main>
      {isLoading && <Loader />}
      <Table />
      <TableTwo />
      <TableThree />
    </Main>
  );
};

export default App;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
