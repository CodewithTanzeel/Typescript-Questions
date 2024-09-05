const dayjs = require('dayjs'); // Import dayjs

const currentDate = dayjs(); // Get the current date
const formattedDate = currentDate.format('DD-MM-YYYY'); // Format the date

console.log(formattedDate); // Output the formatted date