import React from "react";

function RightSection
({
    imageURL,
    ProductName,
    ProductDesription,
    LearnMore,
  }
) 
{
  return (
      <div className="container">
        <div className="row">
          <div className="col-6 p-5 mt-5">
             <h1>{ProductName}</h1>
            <p>{ProductDesription}</p>
            <div>
              <a href={LearnMore}>LearnMore</a>
               
            </div>
          </div>
          <div className="col-6">
            <img src={imageURL} />
          </div>
        </div>
      </div>
  );
}

export default RightSection;