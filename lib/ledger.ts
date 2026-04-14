// ledger.ts

// Import necessary dependencies
import { Transaction } from './transaction';

// Ledger class handles immutable transaction logging and double-entry accounting
class Ledger {
    private entries: Transaction[];

    constructor() {
        this.entries = [];
    }

    // Method to add a transaction
    public addTransaction(transaction: Transaction): void {
        this.entries.push(transaction);
    }

    // Method to get all transactions
    public getTransactions(): Transaction[] {
        return this.entries;
    }

    // Method to calculate balance for a specific account
    public calculateBalance(account: string): number {
        return this.entries.reduce((balance, transaction) => {
            if (transaction.account === account) {
                return balance + transaction.amount;
            } else {
                return balance;
            }
        }, 0);
    }
}

export { Ledger };