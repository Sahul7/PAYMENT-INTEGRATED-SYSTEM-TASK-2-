import React from 'react';

const ReceiptCards=({e})=>{
    return(
        <>
                 <>
                  <div className="col-md-4 col-lg-4 col-10 cardflex mt-2 receipt">
                    <h4 className="text-center">Invoice<span><em><p>By Razorpay</p></em></span></h4>
                    <div className="textpart">
                      <h6>name: {e.name}</h6>
                      <h6>email: {e.email}</h6>
                      <h6 className="amt">amount: {e.amount}</h6>
                      <h6>Payment_id: {e.paymetnt_id}</h6>
                      <h6>Paid on: {e.date}</h6>
                    </div>
                  </div>
                </>
        </>
    )
}

export default ReceiptCards;