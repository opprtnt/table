import React, { FC } from "react";
import { IButton } from "../../interface";
import ButtonComponent from "./ButtonComponent";

const Button: FC<IButton> = ({ sendAxios }) => {
  return <ButtonComponent onClick={sendAxios}>Обновить данные</ButtonComponent>;
};

export default Button;
