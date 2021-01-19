import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TopBar = () => {
  return (
    <div className="has-text-centered py-2 has-background-dark has-text-white">
      <FontAwesomeIcon icon={faTruck} />
      <span>&nbsp;&nbsp;Free shipping on all orders Today</span>
    </div>
  );
};
