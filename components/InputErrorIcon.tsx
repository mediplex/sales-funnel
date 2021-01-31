import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";


export const InputErrorIcon = ({ error }) => {
  return (
    <span
      className={"icon is-small is-right " +
        (!!error ? "has-text-danger" : "has-text-success")}
    >
      {!!error ? (
        <FontAwesomeIcon icon={faExclamationTriangle} />
      ) : (
          <FontAwesomeIcon icon={faCheck} />
        )}
    </span>
  );
};
