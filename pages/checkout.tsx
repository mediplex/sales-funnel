import { useState } from "react";
import { LeadCapture, Upsell } from "../components";

const checkout = () => {
  const [leadCaptured, setLeadCaptured] = useState<boolean>(false);

  const setLeadCaptured_ = () => setLeadCaptured(true);

  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: 640 }}>
          {!leadCaptured ? <LeadCapture cta={setLeadCaptured_} /> : <Upsell />}
        </div>
      </section>
    </>
  );
};

export default checkout;
