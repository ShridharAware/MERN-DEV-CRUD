import { useState } from "react";

const RegisterForm = () => {
  const [data, setData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = new FormData(e.target);
    setData(Object.fromEntries(response.entries()));
    console.log(data);
  };
  return (
    <>
      <h3>Student registration form</h3>
      <form onSubmit={handleSubmit}>
        Name : <input type="text" name="name" />
        <br />
        Age : <input type="number" name="age" />
        <br />
        Gender : <input type="text" name="gender" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default RegisterForm;
