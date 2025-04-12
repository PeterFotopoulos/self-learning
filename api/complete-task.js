export default function handler(req, res) {
    if (req.method === 'POST') {
        const { task } = req.body;

        // Log the completed task (replace this with database logic if needed)
        console.log(`Task completed: ${task}`);

        res.status(200).json({ success: true, message: 'Task marked as completed.' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}