// const item = [
//   { id: 1, name: "nikos" },
//   { id: 2, name: "ertefgdg" },
// ];
// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(item),
//   };
// };
require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_SECRET_KEY);
exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, total_amount, shipping_fee } = JSON.parse(event.body);
    const total = total_amount + shipping_fee;
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }

  return {
    statusCode: 200,
    body: "payment failed",
  };
};
