import { DefaultLayout } from "../layouts/DefaultLayout";
// import { LeadCapture, Upsell, Gallery } from "../components";

import {
  Gallery,
  Headline,
  TopBar,
  CheckoutButton,
  LeadCapture,
} from "../components";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        {/* <TopBar /> */}
        <div className="h">
          <div className="headline">
            <Headline />
          </div>
          <div className="gallery">
            {" "}
            <Gallery />
          </div>

          <div className="checkoutButton">
            <CheckoutButton />
          </div>
        </div>

        <style jsx>{`
          .h {
            display: grid;
           // max-width: 768px;
            grid-template-columns: 1fr;
              grid-template-areas:
                "headline"
                "gallery"
                "checkoutButton";
            }
          }
          // could override the previous style
          // @media only screen and (min-width: 769px) {
          //   .h {
              
          // }

          .gallery {
            grid-area: gallery;
            justify-self: stretch;
          }
          .description {
            grid-area: description;
            justify-self: stretch;
          }
          .checkoutButton {
            grid-area: checkoutButton;
            justify-self: stretch;
          }
          .headline {
            grid-area: headline;
            justify-self: stretch;
          }
        `}</style>
      </DefaultLayout>
    </>
  );
}
