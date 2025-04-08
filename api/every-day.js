export default function handler(req, res) {
    // Set the message you want to display
    const message = "Today's daily task has been completed successfully!";

    // Log the message (optional)
    console.log("Cron job triggered: /api/every-day");
    console.log(`Message: ${message}`);

    // Respond with the message
    res.status(200).send(message);
}