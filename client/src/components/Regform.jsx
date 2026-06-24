import { useState, useEffect } from 'react';
import { regstudent } from '../api/student-api';
function Regform() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    regstudent(form).then(result => {
    //   console.log('Student registered:', result);
    });
  };

  return (
    <>
        <form className="regform" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} value={form.name} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleChange} value={form.email} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} value={form.password} required />
            </div>
            <button type="submit">Register</button>    
        </form>
    </>
  );
}

export default Regform;
