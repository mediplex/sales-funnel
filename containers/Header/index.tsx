import { Headline, Gallery, CheckoutButton } from '../../components';

export const Header = () => {

  return (
    <>
      <div className="h">
        <div className="headline  container pt-6 pb-3 is-maxdesktop">
          <Headline />
        </div>
        <div className="gallery py-6">
          <Gallery />
        </div>

        {/* <div className="checkoutButton  py-6">
          <CheckoutButton />
        </div> */}
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
    </>
  )
}