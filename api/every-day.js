export default function handler(req, res) {
    // Set CORS headers for all responses
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS'); // Allow GET and OPTIONS methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

    // Handle preflight (OPTIONS) requests
    if (req.method === 'OPTIONS') {
        res.status(200).end(); // Respond to OPTIONS with a 200 status
        return;
    }

    // Handle GET requests
    if (req.method === 'GET') {
        const message = "Today's daily task has been completed successfully!";
        console.log("Cron job triggered: /api/every-day");
        res.status(200).send(message);
    } else {
        // Respond with 405 Method Not Allowed for other methods
        res.setHeader('Allow', 'GET, OPTIONS');
        res.status(405).end('Method Not Allowed');
    }
}