import React, { FC } from "react";
import styles from "./button.module.css";

type Props = {
  textColor: string;
  children: React.ReactNode;
};

const Button: FC<Props> = (props) => {
  return (
    <button className={styles.button} style={{ color: props.textColor }}>
      {props.children}
    </button>
  );
};

export default Button;
