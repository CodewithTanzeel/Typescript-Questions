const students = new Map();
students.set(10001, "Sarah");
students.set(10002, "Ali");
students.set(10003, "Fatima");
students.forEach((name, id) => {
    console.log(`Student Name: ${name}, ID: ${id}`);
});
export {};
