import React from "react";

function LeftSection
({
    imageURL,
    ProductName,
    ProductDesription,
    tryDemo,
    LearnMore,
    googlePlay,
    appStore,
}
) 
{
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={imageURL} />
          </div>
          <div className="col-6 p-5 mt-5">
            <h1>{ProductName}</h1>
            <p>{ProductDesription}</p>
            <div>
               <a href={tryDemo}>Try Demo</a>
               <a href={LearnMore} style={{marginLeft:"50px"}}>Learn More</a>
            </div>
           <div className="mt-3">
               <a href={googlePlay}>
              <img src="media\images\google-play-badge.svg" />
            </a>
            <a href={appStore}>
              <img src="media\images\appstore-badge.svg" />
            </a>
           </div>
           
          </div>
        </div>
      </div>
    );
}

export default LeftSection;
