import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import OrganizationCards from "../Components/OrganizatiobnCards";
import ReceiptCards from "../Components/ReceiptCards";
import { Organizations } from "../Data/Organizations";
import { PaidData } from "../Data/Paiddata";
const Donate = () => {
  const [amt, setamt] = useState(0);
  const [date, setdate] = useState(new Date());
  const [ngos, setngos] = useState(Organizations);

  const [paidarr, setpaidarr] = useState(PaidData);
  const sendemail = async (name, email, amt) => {
    alert("Sending email");

    emailjs
      .send(
        "SERVICE-ID",
        "TEMPLATE-ID",
        {
          name: name,
          amt: amt,
          date: date,
          email: email,
        },
        "USER-ID"
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    //  console.log(res);
  };

  //Load the payment designd page of razorpay
  const loadRazorpay = async (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const showRazorpay = async (name, email, img) => {
    if (amt === 0) {
      return alert("Enter Valid amount");
    }
    //Load rezorpay interface
    const res = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      return alert("Rzorpay not loading,check connection");
    }
    var recipt = {};
    //Make paymeny options
    var options = {
      key: "KEY", // Enter the Key ID generated from the Dashboard
      amount: amt * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: name,
      description: "Donation",
      image: img,

      // callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      handler: function (response) {
        alert(response.razorpay_payment_id);

        sendemail(name, email, amt);

        var date = new Date();

        var currdate =
          date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        console.log(currdate);
        setpaidarr([
          ...paidarr,
          {
            name: name,
            email: email,
            amount: amt,
            paymetnt_id: response.razorpay_payment_id,
            date: currdate,
          },
        ]);
      },
      prefill: {
        name: "TSP Intern",
        email: "TSP@gmail.com",
        contact: "9999999999",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <section className=" row flexer1">
        <div className="mt-4 inputwrap col-md-8 col-lg-8 col-10">
          <h4 className="text-center">How much do you want to donate?</h4>
          <input
            type="number"
            value={amt}
            onChange={(e) => setamt(e.target.value)}
          />
        </div>
        <br />
        <h1 className="col-md-8 col-md-8 col-10 text-center header">
          Where you can donate
        </h1>
        <br />
        {ngos.map((e) => {
          return (
            <>
              <OrganizationCards e={e} RPayFn={showRazorpay} />
            </>
          );
        })}
        <h2 className="text-center header col-md-8 col-md-8 col-10  ">
          All Receipts
        </h2>
        {paidarr
          ? paidarr.map((e) => {
              return (
                <>
                  <ReceiptCards e={e} />
                </>
              );
            })
          : null}
      </section>
    </>
  );
};

export default Donate;
