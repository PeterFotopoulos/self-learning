// In-memory storage for tasks (for demonstration purposes)
let tasks = [
    { id: 1, task: "Review maintenance requests", completed: false },
    { id: 2, task: "Send levy payment reminders", completed: false },
    { id: 3, task: "Update insurance policy records", completed: false },
    { id: 4, task: "Schedule strata committee meeting", completed: false }
];

export default function handler(req, res) {
    // Set CORS headers for all responses
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow GET, POST, and OPTIONS methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

    // Handle preflight (OPTIONS) requests
    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Respond to OPTIONS with a 200 status
        return;
    }

    // Handle GET requests (check task status)
    if (req.method === 'GET') {
        const allTasksCompleted = tasks.every(task => task.completed);

        if (allTasksCompleted) {
            res.status(200).send("Today's daily task has been completed successfully!");
        } else {
            res.status(200).json({ success: true, tasks });
        }
    }
    // Handle POST requests (mark a task as completed)
    else if (req.method === 'POST') {
        const { taskId } = req.body;

        // Find the task and mark it as completed
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
            res.status(200).json({ success: true, message: `Task ${taskId} marked as completed.` });
        } else {
            res.status(404).json({ success: false, message: 'Task not found.' });
        }
    }
    // Respond with 405 Method Not Allowed for other methods
    else {
        res.setHeader('Allow', 'GET, POST, OPTIONS');
        res.status(405).end('Method Not Allowed');
    }
}