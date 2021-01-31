import { Footer } from "containers";

export const DefaultLayout = ({ children }) => (
  <div className="layout">
    {/* <div className="has-text-centered py-2 has-background-dark has-text-white">
      <FontAwesomeIcon icon={faTruck} />
      <span>&nbsp;&nbsp;Free shipping on all orders Today</span>
    </div> */}

    {children}

    <Footer />
    <style jsx>{`
      .layout {
        // margin-top: 54px;
      }
    `}</style>
  </div>
);

// TODO: Store steps data on the localStorage
