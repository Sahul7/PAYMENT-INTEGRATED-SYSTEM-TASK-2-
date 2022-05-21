import React from 'react';

const OrganizationCards=({e,RPayFn})=>{
    return(
        <>
             <div className="col-md-4 col-lg-4 col-10 cardflex mt-2">
                <div className="textpart">
                  <h6>name: {e.name}</h6>
                  <h6>location: {e.location}</h6>
                  <button
                    className="donatebtn"
                    onClick={() => RPayFn(e.name, e.email, e.img)}
                  >
                    Donate
                  </button>
                </div>
                <div className="imgpart">
                  <img src={e.img} alt="NGO image" className="img-fluid" />
                </div>
              </div>
        </>
    )
}

export default OrganizationCards;