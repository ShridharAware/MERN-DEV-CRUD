import RegisterForm from "../components/RegisterForm";
import StudentTable from "../components/StudentTable";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([{}]);
  const getStudents = async () => {
    const students = await axios.get("http://localhost:5000/student/");
    setData(students.data);
  };

  const createStudent = async (student) => {
    await axios.post("http://localhost:5000/student/", student);
    getStudents();
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/student/${id}`);
    getStudents();
  };
  useEffect(() => {
    getStudents();
  }, []);
  return (
    <>
      <div className="mt-5 mb-5">
        <RegisterForm createStudent={createStudent} />
      </div>
      <div className="mt-5 mb-5 text-center">
        <StudentTable data={data} deleteStudent={deleteStudent} />
      </div>
    </>
  );
};

export default Home;
