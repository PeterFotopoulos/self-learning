const cron = require('node-cron');

// Define the function to run
function my_function() {
    console.log("my_function is running every 10 minutes!");
    // Add your logic here
}

// Schedule the function to run every 10 minutes
cron.schedule('*/10 * * * *', () => {
    my_function();
});