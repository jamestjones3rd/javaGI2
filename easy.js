/*Create an array of students holding their last name, first name, and age with 3 students.
To validate, please log a greeting with the first name, last name and age of the 2nd student.
The output should look like "Hello, my name is John Doe and I'm 19 years old."
*/

const studentA = ['James' , 'Jones', 21]
const studentB = ['Goat', 'Abraham', 100]
const studentC = ['Beyonce', 'Knowles', 44]

const students = [studentA, studentB, studentC]


//Testing asnwer
console.log(`Hello, my name is ${studentA[0]} ${studentA[1]} and I'm ${studentA[2]} years old. `);

//Actaul answer
console.log(`Hello, my name is ${students[1][0]} ${students[1][1]} and I'm ${students[1][2]} years old. `);