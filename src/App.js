import { useSelector } from "react-redux";
import Loader from "./components/Loader";
import Table from "./components/Table";
import TableTwo from "./components/TableTwo";
import styled from "styled-components";
import TableThree from "./components/TableThree";

function App() {
  const isLoading = useSelector((state) => state.store.isLoading);
  return (
    <Main>
      {isLoading && <Loader />}
      <Table />
      <TableTwo />
      <TableThree />
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
