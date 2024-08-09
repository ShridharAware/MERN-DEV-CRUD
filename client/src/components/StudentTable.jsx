import { useEffect, useState } from "react";

const StudentTable = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/student/");
    setData(await response.json());
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table className="table table-bordered w-75 mx-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => {
            return (
              <tr key={entry._id}>
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
