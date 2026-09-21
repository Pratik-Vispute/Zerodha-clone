import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <h3 className="border-top mt-5 pt-5">Charges for account opening</h3>
      <div className="row  border mt-5">
        <div className="col-6 ">
          <p className="mb-5" style={{ textAlign: "center" }}>
            Type of account
          </p>
          <ul>
            <p className="border-top">Individual account</p>
            <p className="border-top">Minor account</p>
            <p className="border-top">NRI account</p>
            <p className="border-top">HUF account</p>
            <p className="border-top">
              Partnership, LLP, and Corporate accounts (offline only)
            </p>
          </ul>
        </div>
        <div className="col-6">
          <p className="text-center mb-5"> Charges</p>
          <ul className="text-center">
            <p className="border-top">
              <button
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#fff",
                  background: "#4caf50",
                  padding: "4px,10px",
                  borderRadius: "5px",
                  border: "transparent",
                }}
              >
                FREE
              </button>
            </p>
            <p className="border-top">
              <button
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#fff",
                  background: "#4caf50",
                  padding: "4px,10px",
                  borderRadius: "5px",
                  border: "transparent",
                }}
              >
                FREE
              </button>
            </p>
            <p className="border-top">₹ 500</p>
            <p className="border-top">
              <button
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#fff",
                  background: "#4caf50",
                  padding: "4px,10px",
                  borderRadius: "5px",
                  border: "transparent",
                }}
              >
                FREE
              </button>
            </p>
            <p className="border-top">₹ 500</p>
          </ul>
        </div>
      </div>

      <h3 className="border-top mt-5 pt-5">
        Demat AMC (Annual Maintenance Charge)
      </h3>
      <div className="row  border mt-5">
        <div className="col-6 ">
          <p className="mb-5" style={{ textAlign: "center" }}>
            Value of holdings
          </p>
          <ul>
            <p className="border-top">Up to ₹4 lakh</p>
            <p className="border-top">₹4 lakh – ₹10 lakh</p>
            <p className="border-top">Above ₹10 lakht</p>
          </ul>
        </div>
        <div className="col-6">
          <p className="text-center mb-5">AMC</p>
          <ul className="text-center">
            <p className="border-top">
              <button
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#fff",
                  background: "#4caf50",
                  padding: "4px,10px",
                  borderRadius: "5px",
                  border: "transparent",
                }}
              >
                FREE
              </button>
            </p>
            <p className="border-top">
              {" "}
              ₹100 per year + 18% GST, charged quarterly
            </p>
            <p className="border-top">
              ₹300 per year + 18% GST, charged quarterly
            </p>
          </ul>
        </div>
      </div>

      <div className="row text-muted mt-5">
        <h3 className="fs-5">Disclaimer</h3>
        <p className="mt-1" style={{fontSize:"12px"}}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Brokerage;
