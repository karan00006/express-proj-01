import { useState, useEffect } from "react";
import { regstudent } from "../api/student-api";
function Regform() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    regstudent(form)
      .then((result) => {
        console.log("Student registered:", result);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Error registering student:", error);
        setError("Failed to register student.");
      })
      .finally(() => {
        setSubmitting(false);
        setForm({
          name: "",
          email: "",
          password: "",
        });
        setError("");
        setSuccess(false);
        // redirect to login page after successful registration
        window.location.href = "/login";
      });
  };

  return (
    <>
      <form className="regform" onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && (
          <div className="alert alert-success">
            Student registered successfully!
          </div>
        )}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={form.name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            required
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? "Registering..." : "Register"}
        </button>
      </form>
    </>
  );
}

export default Regform;
