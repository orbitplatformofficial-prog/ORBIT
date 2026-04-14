// lib/reputation.ts

// Define user tiers
export const TIER_0 = 'TIER_0';
export const TIER_1 = 'TIER_1';
export const TIER_2 = 'TIER_2';

// Interface for user reputation
export interface UserReputation {
    userId: string;
    score: number;
    tier: string;
    tasksCompleted: number;
    successRate: number;
    accountFlags: string[];
}

// Class for the reputation engine
export class ReputationEngine {
    private users: {[key: string]: UserReputation} = {};

    constructor() {}

    // Method to add or update a user's reputation
    public updateUserReputation(userId: string, score: number, taskCompleted: boolean): void {
        if (!this.users[userId]) {
            this.users[userId] = { userId, score, tier: TIER_0, tasksCompleted: 0, successRate: 0, accountFlags: [] };
        }
        const user = this.users[userId];
        user.score += score;
        if (taskCompleted) {
            user.tasksCompleted += 1;
            user.successRate = (user.successRate * (user.tasksCompleted - 1) + (score > 0 ? 1 : 0)) / user.tasksCompleted;
        }
        this.updateTier(user);
    }

    // Private method to update user's tier based on their score
    private updateTier(user: UserReputation): void {
        if (user.score < 100) {
            user.tier = TIER_0;
        } else if (user.score < 500) {
            user.tier = TIER_1;
        } else {
            user.tier = TIER_2;
        }
    }

    // Method to get a user's reputation
    public getUserReputation(userId: string): UserReputation | null {
        return this.users[userId] || null;
    }
}