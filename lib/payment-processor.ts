// lib/payment-processor.ts

import Stripe from 'stripe';

const stripe = new Stripe('your-stripe-secret-key', { apiVersion: '2020-08-27' });

export interface PaymentDetails {
    amount: number;
    currency: string;
    source: string; // e.g., card token
}

export interface TransactionResponse {
    id: string;
    status: string;
    amount: number;
    currency: string;
}

export const processPayment = async (paymentDetails: PaymentDetails): Promise<TransactionResponse> => {
    try {
        const charge = await stripe.charges.create({
            amount: paymentDetails.amount,
            currency: paymentDetails.currency,
            source: paymentDetails.source,
        });
        return {
            id: charge.id,
            status: charge.status,
            amount: charge.amount,
            currency: charge.currency,
        };
    } catch (error) {
        throw new Error(`Payment processing failed: ${error.message}`);
    }
};

export const handleWebhook = (req: any, res: any) => {
    // Handle Stripe webhook events
    const event = req.body;
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log(`PaymentIntent was successful! ID: ${paymentIntent.id}`);
            break;
        // Handle other event types accordingly
        default:
            console.log(`Unhandled event type: ${event.type}`);
    }
    res.status(200).send('Event received');
};
