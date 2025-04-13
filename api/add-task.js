export default async function handler(req, res) {
    // Set CORS headers for all responses
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Allow POST and OPTIONS methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

    // Handle preflight (OPTIONS) requests
    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Respond to OPTIONS with a 200 status
        return;
    }

    // Handle POST requests (add a new task)
    if (req.method === 'POST') {
        let body;

        try {
            // Parse the request body
            body = JSON.parse(req.body);
        } catch (error) {
            res.status(400).json({ success: false, message: 'Invalid JSON input.' });
            return;
        }

        const { task } = body;

        if (!task) {
            res.status(400).json({ success: false, message: 'Task is required.' });
            return;
        }

        // Add the new task to the list
        const newTask = { id: tasks.length + 1, task, completed: false };
        tasks.push(newTask);

        res.status(200).json({ success: true, message: 'Task added successfully.', tasks });
    } else {
        // Respond with 405 Method Not Allowed for other methods
        res.setHeader('Allow', 'POST, OPTIONS');
        res.status(405).end('Method Not Allowed');
    }
}