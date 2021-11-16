import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

//load script
const stripePromise = loadStripe(
  "pk_test_51JvlyCJE2KeZXdcINkafU1SJZjAgsywLowqmjfNmSMq8ulus7dQ17lzgqHfpvtgnB38EdWmnVrkcYwgf1D7puYRd00BGBAS0Cy"
);
const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please pay for : {appointmentId} for {appointment.serviceName}
      </h2>
      <h4>Pay : ${appointment.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;

/*
1.install stripe and stripe-react
2.set publishable key
3.Elements
4.Checkout Form
------------
5.Create payment method
6.server create payment intent api
7.load client secret
8.confirm card oayment
9.handle user error
 
*/
