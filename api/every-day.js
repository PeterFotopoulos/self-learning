export default function handler(req, res) {
    // Example action: Log a message
    console.log("Cron job triggered: /api/every-day");

    // Example action: Perform a task (e.g., send a notification)
    const today = new Date();
    console.log(`Performing daily task on ${today.toISOString()}`);

    // Respond to the cron job trigger
    res.status(200).send("Daily task executed successfully");
}