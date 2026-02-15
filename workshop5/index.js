const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let students = [
    { id: 1, name: "node", age: 18 },
    { id: 2, name: "express", age: 19 },
    { id: 3, name: "javascript", age: 20 }
];

const validateStudent = (req, res, next) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).send("Invalid data");
    }
    next();
};

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send("Student not found");
    }
});

app.post('/students', validateStudent, (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { id, ...req.body };
        res.json(students[studentIndex]);
    } else {
        res.status(404).send("Student not found");
    }
});

app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    students = students.filter(s => s.id !== id);
    res.send(`Student with ID ${id} deleted`);
});

// คำสั่งนี้สำคัญมาก เป็นตัวที่ทำให้เซิร์ฟเวอร์เปิดค้างไว้
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});