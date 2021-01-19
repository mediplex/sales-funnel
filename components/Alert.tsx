import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Alert = () => {
  return (
    <div className="message is-danger">
      <div className="message-body">
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <FontAwesomeIcon className=" is-size-3" icon={faInfoCircle} />
          </div>
          <div className="column">
            <p className=" has-text-weight-bold is-family-code">
              Do not browse away from this page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
