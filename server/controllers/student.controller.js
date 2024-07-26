const StudentModel = require("../models/student.model");

function createStudent(req, res) {
  StudentModel.create({ name: "Rakesh", age: 22, gender: "male" })
    .then((data) => res.status(201).json(data))
    .catch((e) => res.status(500).json({ message: e.message }));
}

function findStudents(req, res) {
  StudentModel.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => res.status(500).json({ messahe: e.message }));
}

module.exports = { createStudent, findStudents };
