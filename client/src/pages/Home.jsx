import Register from "./Register";
function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="heading">
            <h1>Student Management System</h1>
            <p>Manage your students with ease</p>
          </div>
            <Register />
        </div>
      </section>
    </>
  );
}

export default Home;
