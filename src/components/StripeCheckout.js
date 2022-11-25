import React, { useState, useEffect } from "react";
import "./StripeCheckOut.scss";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
import { User } from "@auth0/auth0-react";

const promise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);
const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, ClearCart } = useCartContext();
  const { myUser } = useUserContext();
  const navigate = useNavigate();
  // Stripe Style
  const [succeded, setSucceded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [desabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  async function createPaymentIntent() {
    try {
      await fetch("/.netlify/functions/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ cart, total_amount, shipping_fee }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(clientSecret);
  useEffect(() => {
    createPaymentIntent();
  }, []);
  async function handleChange(event) {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setProcessing(true);
    const Payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (Payload.error) {
      setError(`Paymtn Failed ${Payload.error.message}`);
    } else {
      setError(null);
      setProcessing(false);
      setSucceded(true);
      setTimeout(() => {
        ClearCart();
        navigate("/");
      }, 1000);
    }
  }
  return (
    <div>
      {succeded ? (
        <article>
          <h4>Thanks you</h4>
          <h4>Your payment was successfull</h4>
          <h4>redirect to home page</h4>{" "}
        </article>
      ) : (
        <article>
          <h4>Hello, {myUser && myUser.name}</h4>
          <p>Your total is: {formatPrice(total_amount + shipping_fee)}</p>
          <p>Test card Number: 4242-4242-4242-4242 </p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button disabled={processing || desabled | succeded}>
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {/* Error area */}
        {error && <div className="card-error">{error}</div>}
        {/* Success Area */}
        <p className={succeded ? "result-message" : "result-message hidden"}>
          Payment Succeded,see the result in your{" "}
          <a href={`jttps://dashboard.stripe.com/test/payments`}>
            Stripe dashboard
          </a>
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <section className="stripeCheckOut">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </section>
  );
};

export default StripeCheckout;
