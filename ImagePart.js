import React from 'react';


const ImagePart=({l1,l2,l3})=>{
    return(
        <>
         <div className="row mt-4 flexer2">
          <div className="col-md-4 col-lg-4 col-10 hmimg d-flex justify-content-center">
            <img
              src={l1?l1:"https://tse3.mm.bing.net/th?id=OIP._AbnlksJGSye4xVh0f-CXwHaE7&pid=Api&P=0&w=242&h=161"}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 col-lg-4 col-10 hmimg d-flex justify-content-center">
            <img
              src={l2?l2:"https://thumbs.dreamstime.com/z/donate-to-poor-homeless-still-seen-society-concept-charity-food-134554314.jpg"}
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 col-lg-4 col-10 hmimg d-flex justify-content-center">
            <img
              src={l3?l3:"https://tse1.mm.bing.net/th?id=OIP.9uJGC0PdO_iGRPlzZqVTHQHaHa&pid=Api&P=0&w=194&h=194"}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        </>
    )
}

export default ImagePart;