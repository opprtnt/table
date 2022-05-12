import styled from "styled-components";

const Button = ({ f }) => {
  return <ButtonComponent onClick={f}>Получить данные</ButtonComponent>;
};

const ButtonComponent = styled.button`
  border-radius: 4px;
  border: 1px solid black;
  cursor: pointer;
  width: 220px;
  padding: 4px 12px;
  background-color: white;
  transition: all 0.4s;
  &:hover {
    opacity: 0.5;
  }
`;

export default Button;
