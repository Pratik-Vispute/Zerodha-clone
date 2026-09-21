import React from "react";

function Pricing() {
    return ( 
        <div className="container p-5" >
            <div className="row">
                <div className="col-6 p-5 mr-5">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price <br/> transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                
                <div className="col-6 mt-0 p-5">
                    <div className="row text-center">
                        <div className="col border">
                            <img  style={{width:"50%"}} src="media\images\pricing-eq.svg"/>
                            <p>Free account <br/> opening</p>
                        </div>
                        <div className="col  border">
                            <img style={{width:"50%"}} src="media\images\pricing-eq.svg" />
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className="col  border">
                            <img style={{width:"50%"}} src="media\images\other-trades.svg" />
                            <p>Intraday and <br/> F&O</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;