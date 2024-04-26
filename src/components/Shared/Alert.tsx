import { AlertType } from "./enums/AlertType";

import "./alert.scss";

export function Alert(props: Props) {
  return (
    <div className={`alert ${props.type}`}>
      <span>
        <b>{props.title}</b>
      </span>
      <br />
      {props.message}
    </div>
  );
}

interface Props {
  type: AlertType;
  title: string;
  message: string;
}
