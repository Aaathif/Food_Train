import React from 'react';
import styles from './Payment.module.css';

function Payment() {
  const [paymentMethod, setPaymentMethod] = React.useState('visa');
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardName, setCardName] = React.useState('');
  const [expiryMonth, setExpiryMonth] = React.useState('');
  const [expiryYear, setExpiryYear] = React.useState('');
  const [cvv, setCvv] = React.useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission here
  };

  return (
    <div className={styles.paymentPage}>
      <h1>Make a Payment</h1>

      <div className={styles.paymentOptions}>
        <h2>Choose a Payment Method:</h2>

        <div className={styles.paymentOption}>
        <span>Credit/Debit Card</span>
        
  
          
        </div>

        <div className={styles.cash}>
          
          <span> Cash On Delivery</span>
          
        </div>
      </div>

      <form className={styles.paymentForm} onSubmit={handleSubmit}>
        <h2>Enter Payment Details:</h2>

        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />

        <label htmlFor="cardName">Cardholder Name:</label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          value={cardName}
          onChange={(event) => setCardName(event.target.value)}
        />

        <div className={styles.formRow}>
          <div className={styles.formCol}>
            <label htmlFor="expiryMonth">Expiration Month:</label>
            <input
              type="text"
              id="expiryMonth"
              name="expiryMonth"
              value={expiryMonth}
              onChange={(event) => setExpiryMonth(event.target.value)}
            />
          </div>

          <div className={styles.formCol}>
            <label htmlFor="expiryYear">Expiration Year:</label>
            <input
              type="text"
              id="expiryYear"
              name="expiryYear"
              value={expiryYear}
              onChange={(event) => setExpiryYear(event.target.value)}
            />
          </div>

          <div className={styles.formCol}>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cvv}
              onChange={(event) => setCvv(event.target.value)}
            />
          </div>
        </div>

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default Payment;
