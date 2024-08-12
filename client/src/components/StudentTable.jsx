import { useEffect, useState } from "react";
import axios from "axios";
const StudentTable = () => {
  const [data, setData] = useState([{}]);
  const getStudents = async () => {
    const students = axios.get("http://localhost:000/student/");
    // setData(students.data);
    console.log(students);
  };

  const createStudent = async () => {
    const student = { name: "Sakshi", age: 21, gender: "Female" }; //1
    await axios.post("http://localhost:5000/student/", student); //10
  };
  const updateStudent = async () => {
    const student = { name: "Harshada", age: 20, gender: "Female" };
    await axios.put(
      "http://localhost:5000/student/66b9c2e311cef4940e53f02f",
      student
    );
  };
  const deleteStudent = async () => {
    await axios.delete(
      "http://localhost:5000/student/66b9c2e311cef4940e53f02f"
    );
  };
  useEffect(() => {
    getStudents();
    // createStudent();
    // updateStudent();
    // deleteStudent();
  }, []);
  return (
    <>
      <table className="table table-bordered w-75 mx-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => {
            return (
              <tr key={entry._id}>
                <td>{entry._id}</td>
                <td>{entry.name}</td>
                <td>{entry.age}</td>
                <td>{entry.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StudentTable;
