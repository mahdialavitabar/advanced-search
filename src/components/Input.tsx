import React, { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ ...rest }) => {
  return <input {...rest} />;
};

export default Input;
