import React from "react";
import ImagePart from "../Components/ImagePart";
import { useHistory } from "react-router-dom";
const Home = ({ l1, l2, l3 }) => {
  const history = useHistory();
  return (
    <>
      <section className="container flexer1 row mx-auto">
        <h2 className="text-center header">Donate for the poor</h2>
        <ImagePart />

        <div className="donatentn">
          <button className="donatebtn" onClick={() => history.push("/donate")}>
            Donate
          </button>
        </div>

        <h2 className="text-center header">
          Our website has Razorpay for faster payment
        </h2>
        <ImagePart
          l1="https://tse3.mm.bing.net/th?id=OIP.yv3Mi-9_UA1umCXQxnZgkwHaEW&pid=Api&P=0&w=264&h=155"
          l2="https://tse4.mm.bing.net/th?id=OIP.Cgqmlrz0v1Qhp8DihMGXggHaFk&pid=Api&P=0&w=254&h=191"
          l3="https://1.bp.blogspot.com/-FfDBK7PM5jk/XsAgcME7olI/AAAAAAAACXw/CzUKYIkbsXIZ7lXQCg3U3KYgubEfLOoqwCK4BGAsYHg/w1200-h630-p-k-no-nu/upi-payments.jpg"
        />
      </section>
    </>
  );
};

export default Home;
