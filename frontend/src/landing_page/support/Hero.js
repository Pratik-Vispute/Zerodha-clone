import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='support-Hero'>
            <div className='p-5' id='supportWrapper'>
               <h4>Support portal</h4>
               <a href=''>Track Tickets</a>
               
            </div>
            <div className='row p-5 mx-5' my-5>
               <div className='col-5' p-5>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O, why is my order getting rejected'/><br/>
                    <a href=''>Track Account opening</a>
                    <a href=''>Track Segment Activation</a>
                    <a href=''>Intraday margin</a>
                    <a href=''>Kite user</a>
               </div>
               <div className='col-2'></div>
               <div className='col-5' p-5 mx-20>
                    <h1 className='fs-3'>Featured</h1>
                    <ol style={{lineHeight:"2em"}}>
                        <li><a href=''>Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                    
                    
               </div>
                
            </div>
           
        </section>
     );
}

export default Hero;