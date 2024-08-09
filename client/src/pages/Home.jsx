import RegisterForm from "../components/RegisterForm";
import StudentTable from "../components/StudentTable";

const Home = () => {
  return (
    <>
      <div className="mt-5 mb-5 text-center">{/* <RegisterForm /> */}</div>
      <div className="mt-5 mb-5 text-center">
        <StudentTable />
      </div>
    </>
  );
};

export default Home;
