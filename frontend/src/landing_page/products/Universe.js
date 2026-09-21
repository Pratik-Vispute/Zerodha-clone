import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\smallcase-logo.png" />
          <p className="text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img
            src="media\images\zerodhafundhouse.png"
            style={{ width: "60%" }}
          />
          <p className="text-muted text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img src="media\images\tijori.svg" style={{ width: "60%" }} />
          <p className="text-muted text-small">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\streak-logo.png" style={{ width: "40%" }} />
          <p className="text-muted text-small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img src="media\images\sensibull-logo.svg" />
          <p className="text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4  p-3 mt-5">
          <img src="media\images\ditto-logo.png" style={{ width: "40%" }} />
          <p className="text-muted text-small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
         <button className="p-3 btn btn-primary fs-5 mb-5"  style={{width:"20%", margin:"0 auto"}}><a href="./Signup" style={{textDecoration: "none", color: "white"}}>Sign up for free</a></button>
      </div>
    </div>
  );
}

export default Universe;
