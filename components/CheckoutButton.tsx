import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const CheckoutButton = () => {
  return (
    <>
      <div className="has-background-dark px-4 py-6 ">
        <div className="title has-text-centered  has-text-white">
          Send Me Your Address...
        </div>
        <div className="subtitle has-text-centered  has-text-white">
          I'd like to rush a FREE copy of my brand new hardcover book to your
          doorstep, ASAP!
        </div>

        <Link href="/checkout">
          <button className="button is-success p-5 is-fullwidth">
          <p className="title is-4 has-text-white">
              <span className="icon is-small is-size-5">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              <span>Yes! </span>
              <span>Reserve my Product Now</span>
            </p>

            <p className="subtitle is-6 has-text-white">
              You pay only $97 instead of <del>$197</del>
            </p>
          </button>

        </Link>
      </div>
      <style jsx>
        {`
          .button {
            display: block;
            height: auto;
            white-space: unset;
            max-width: 768px;
            margin: auto;
          }
        `}
      </style>
    </>
  );
};
