// lib/gemini.ts

/**
 * Google Gemini AI Integration
 * This module handles task breakdown and validation for Google Gemini AI.
 */

import { GeminiClient } from 'gemini-ai-sdk'; // Make sure to install this SDK

const geminiClient = new GeminiClient();

export const breakdownTask = async (task: string) => {
    // Breakdown the task into smaller subtasks using Google Gemini
    const subtasks = await geminiClient.breakdown(task);
    return subtasks;
};

export const validateTask = async (task: string) => {
    // Validate the task with Google Gemini's validation methods
    const isValid = await geminiClient.validate(task);
    return isValid;
};