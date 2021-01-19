import React from "react";
import { useForm } from "react-hook-form";
import {
  faEnvelope,
  faPhone,
  faUser,
  faHome,
  faCreditCard,
  faCertificate,
  faShippingFast,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Input } from "./Input";
import { CountrySelect } from "./CountrySelect";

export const LeadCapture = ({ cta }) => {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "all",
  });
  const { touched } = formState;
  const onSubmit = (data) => {
    console.log(data);
    cta();
  };

  return (
    <div className="section">
      {/* <Alert/> */}
      <h1 className="title ">Step 1</h1>
      <p className="subtitle">Where Should We Ship Your Product?</p>
      {/* <progress className="progress" value="50" max="100">
        50%
      </progress> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="input"
          name="First Name"
          placeholder="First Name"
          icon={faUser}
          ref_={register({
            required: "The First Name is required",
          })}
          error={errors["First Name"]}
          touched={touched["First Name"]}
        />
        <Input
          type="input"
          name="Last Name"
          placeholder="Last Name"
          icon={faUser}
          ref_={register({
            required: "The Last Name is required",
          })}
          error={errors["Last Name"]}
          touched={touched["Last Name"]}
        />
        <Input
          type="email"
          name="Email Address"
          placeholder="Email Address"
          icon={faEnvelope}
          ref_={register({
            required: "The Email Address is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid Email" },
          })}
          error={errors["Email Address"]}
          touched={touched["Email Address"]}
        />
        <Input
          type="tel"
          name="Phone Number"
          placeholder="Phone Number"
          icon={faPhone}
          ref_={register({
            required: "The Phone Number is required",
            // pattern: { value: /^\S+@\S+$/i, message: "Invalid Phone Number" }
          })}
          error={errors["Phone Number"]}
          touched={touched["Phone Number"]}
        />
        {/* Address */}
        <strong>Shipping Address</strong>
        <Input
          type="input"
          name="Full Address"
          placeholder="Full Address"
          icon={faHome}
          ref_={register({
            required: "The Full Address is required",
          })}
          error={errors["Full Address"]}
          touched={touched["Full Address"]}
        />
        <Input
          type="input"
          name="City"
          placeholder="City"
          icon={faHome}
          ref_={register({
            required: "The City is required",
          })}
          error={errors["City"]}
          touched={touched["City"]}
        />

        <CountrySelect />
        {/* <Input
          type="input"
          name="Country"
          placeholder="Country"
          icon={faHome}
          ref_={register({
            required: "The Country is required"
          })}
          error={errors["Country"]}
          touched={touched["Country"]}
        /> */}
        <Input
          type="input"
          name="State/Province"
          placeholder="State/Province"
          icon={faHome}
          ref_={register({
            required: "The State/Province is required",
          })}
          error={errors["State/Province"]}
          touched={touched["State/Province"]}
        />
        <Input
          type="input"
          name="Zip Code"
          placeholder="Zip Code"
          icon={faHome}
          ref_={register({
            required: "The Zip Code is required",
          })}
          error={errors["Zip Code"]}
          touched={touched["Zip Code"]}
        />
        <div className="field">
          <div className="control">
            <button className="button is-success is-large is-fullwidth py-6 is-flex-direction-column">
              <p className="title is-4 has-text-white">
                <span className="icon is-small is-size-5">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span>Claim Special Offer</span>
              </p>

              <p className="subtitle is-6 has-text-white">
                Yes I want this Product Now!
              </p>
            </button>
          </div>
        </div>
        <p className="content is-size-7 has-text-grey-light">
          *Disclaimer: Handling and shipping usually take 7-10 business days.
          Due to high volume or exceptional situations, delivery times may be a
          bit longer than normal. Please reference your expected delivery date
          in checkout Your information is secure and will not be shared.
        </p>

        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <span className="icon is-size-4">
                <FontAwesomeIcon icon={faCreditCard} />
              </span>
              <p className="heading">
                SECURE
                <br />
                CHECKOUT
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <span className="icon  is-size-4">
                <FontAwesomeIcon icon={faCertificate} />
              </span>
              <p className="heading">
                MONEY-BACK
                <br />
                GUARANTEE
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <span className="icon  is-size-4">
                <FontAwesomeIcon icon={faShippingFast} />
              </span>
              <p className="heading has-text-succcess">
                100,000+
                <br />
                Product Shipped
              </p>
            </div>
          </div>
        </nav>
      </form>
    </div>
  );
};
