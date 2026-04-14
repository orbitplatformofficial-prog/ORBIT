// lib/risk-scorer.ts

/**
 * Risk Scorer
 *
 * This module provides AI-powered risk assessment functionality by analyzing various factors to determine risk levels for transactions.
 */

class RiskScorer {
    constructor() {
        // Initialization if needed
    }

    assessRisk(newAccounts, failedLogins, unusualLocations, rapidTransactions) {
        let riskScore = 0;

        // Analyze new accounts
        if (newAccounts > 0) {
            riskScore += newAccounts * 10;
        }

        // Analyze failed logins
        if (failedLogins > 0) {
            riskScore += failedLogins * 5;
        }

        // Analyze unusual locations
        riskScore += unusualLocations * 15;

        // Analyze rapid transactions
        if (rapidTransactions > 3) {
            riskScore += rapidTransactions * 8;
        }

        return riskScore;
    }

    static categorizeRisk(score) {
        if (score < 20) {
            return 'Low Risk';
        } else if (score < 50) {
            return 'Medium Risk';
        } else {
            return 'High Risk';
        }
    }
}

export default RiskScorer;
