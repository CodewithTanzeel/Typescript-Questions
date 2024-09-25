// Create a new Map called 'students' where the key is the student's ID (number) 
// and the value is the student's name (string).
const students = new Map<number, string>();

// Add a student with ID 10001 and the name "Sarah" to the 'students' map.
students.set(10001, "Sarah");

// Add a student with ID 10002 and the name "Ali" to the 'students' map.
students.set(10002, "Ali");

// Add a student with ID 10003 and the name "Fatima" to the 'students' map.
students.set(10003, "Fatima");

// Iterate over the 'students' map using the 'forEach' method.
// For each student, log their name and ID to the console.
students.forEach((name, id) => {
    console.log(`Student Name: ${name}, ID: ${id}`);
});
