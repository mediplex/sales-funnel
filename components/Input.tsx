import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputErrorIcon } from "./InputErrorIcon";

export const Input = ({
  label,
  icon,
  type,
  placeholder,
  name,
  ref_,
  error,
  touched
}) => {
  return (
    <div className="field is-expanded">
      {/* TODO: add labelFor */}
      <label className="label">{label}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          ref={ref_}
          className={
            "input " + (touched ? (!!error ? "is-danger" : "is-success") : "")
          }
        />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={icon} />
        </span>

        {!!touched && <InputErrorIcon error={error} />}
      </div>
      {!!error && <p className="help is-danger">{error.message}</p>}
    </div>
  );
};


