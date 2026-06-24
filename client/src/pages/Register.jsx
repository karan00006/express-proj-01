import Regform from '../components/Regform';
function Register() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="heading">
            <h2>Register</h2>
            <p>Manage your students with ease</p>
          </div>
          <Regform />
        </div>
      </section>
    </>
  );
}

export default Register;
