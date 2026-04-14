// task-queue.ts

// Task Queue Management Class
class TaskQueue {
    private queue: Array<{task: Function, priority: number}> = [];
    private workers: number;

    constructor(workers: number) {
        this.workers = workers;
    }

    // Add task to the queue
    addTask(task: Function, priority: number = 0) {
        this.queue.push({task, priority});
        this.queue.sort((a, b) => b.priority - a.priority); // Sort by priority
    }

    // Process the queue with available workers
    async processQueue() {
        const promises: Promise<void>[] = [];

        while (this.queue.length > 0 && promises.length < this.workers) {
            const {task} = this.queue.shift()!;
            promises.push(this.runTask(task));
        }

        await Promise.all(promises);
    }

    // Run task
    private async runTask(task: Function): Promise<void> {
        return new Promise((resolve) => {
            // Simulate task processing with a timeout
            setTimeout(() => {
                console.log('Task completed:', task);
                resolve();
            }, 1000); // Simulate time taken by task
        });
    }

    // Get queue state
    getQueueState() {
        return this.queue.map((item) => ({task: item.task.toString(), priority: item.priority}));
    }
}

export default TaskQueue;