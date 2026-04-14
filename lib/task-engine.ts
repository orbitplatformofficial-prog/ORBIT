// lib/task-engine.ts

enum TaskType {
    MICROTASK = 'MICROTASK',
    SURVEY = 'SURVEY',
    AI_LABELING = 'AI_LABELING',
    FREELANCE_JOB = 'FREELANCE_JOB'
}

interface Task {
    id: string;
    type: TaskType;
    workerId?: string;  // Assigned worker
    skillsRequired: string[];
    createdAt: Date;
    updatedAt: Date;
}

class TaskEngine {
    private tasks: Task[] = [];
    private workerSkills: Map<string, string[]> = new Map(); // workerId: skills

    addTask(task: Task): void {
        this.tasks.push(task);
    }

    assignWorker(taskId: string, workerId: string): boolean {
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) return false;

        // Check if worker has required skills
        if (this.canWorkerHandleTask(workerId, task)) {
            task.workerId = workerId;
            task.updatedAt = new Date();
            return true;
        }
        return false;
    }

    canWorkerHandleTask(workerId: string, task: Task): boolean {
        const workerSkills = this.workerSkills.get(workerId);
        return workerSkills && task.skillsRequired.every(skill => workerSkills.includes(skill));
    }

    // Add more methods for task lifecycle management as needed
}

export { TaskEngine, TaskType };