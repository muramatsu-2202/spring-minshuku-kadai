const stripe = Stripe('pk_test_51QcM0yPpqlu4YCUlGu59stXvxPxeZpIrWXMK6OCiyZbKez520iveaMiEQFRdJzCeKq3kERt3f1g7FxZpbEzoCAWT00O2BvePrr');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });