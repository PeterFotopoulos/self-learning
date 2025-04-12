export default function handler(req, res) {
    // Set CORS headers to allow cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // Allow only GET requests

    // Handle GET requests
    if (req.method === 'GET') {
        // Example daily tasks
        const tasks = [
            { id: 1, task: "Review maintenance requests" },
            { id: 2, task: "Send levy payment reminders" },
            { id: 3, task: "Update insurance policy records" },
            { id: 4, task: "Schedule strata committee meeting" }
        ];

        // Respond with the tasks as JSON
        res.status(200).json({ success: true, tasks });
    } else {
        // Respond with 405 Method Not Allowed for other methods
        res.setHeader('Allow', 'GET');
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}