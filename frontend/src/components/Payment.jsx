import { useState } from "react";
import axios from "axios";
import { generateUniqueId } from "esewajs";

const Payment = () => {
    const [amount, setAmount] = useState("");

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/initiate-payment", //server payment route
                {
                    amount,
                    productId: generateUniqueId(),
                }
            );

            window.location.href = response.data.url;
        } catch (error) {
            console.error("Error initiating payment:", error);
        }
    };
    return (
        <div className="payment-container">
            <div className="payment-card">
                <div className="card-header">
                    <h1 className="card-title">eSewa Payment</h1>
                    <div className="esewa-logo">
                        <span className="logo-text">eSewa</span>
                    </div>
                </div>

                <div className="card-body">
                    <form className="payment-form" onSubmit={handlePayment}>
                        <div className="form-group">
                            <label htmlFor="amount" className="form-label">
                                Payment Amount
                            </label>
                            <div className="input-wrapper">
                                <span className="currency">NPR</span>
                                <input
                                    id="amount"
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    placeholder="0.00"
                                    className="amount-input"
                                    min="1"
                                    step="0.01"
                                />
                            </div>
                        </div>

                        <button type="submit" className="pay-button">
                            <span className="button-icon">💳</span>
                            Pay with eSewa
                        </button>
                    </form>
                </div>

                <div className="card-footer">
                    <p className="security-note">
                        🔒 Secure payment powered by eSewa
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Payment;