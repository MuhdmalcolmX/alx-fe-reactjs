import React, { useState } from 'react';

const RegistrationForm = () => {
  // State management for each form field
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation logic using destructuring and direct field checks
  const validateForm = () => {
    const { username, email, password } = formData; // Destructure formData to access individual fields
    let formIsValid = true;
    let errors = {};

    // Check if the username field is empty
    if (!username) {
      errors.username = 'Username is required';
      formIsValid = false;
    }

    // Check if the email field is empty or invalid
    if (!email) {
      errors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      formIsValid = false;
    }

    // Check if the password field is empty or too short
    if (!password) {
      errors.password = 'Password is required';
      formIsValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password should be at least 6 characters';
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Proceed with form submission logic (e.g., API call)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username} // Bind the username value to formData.username
          onChange={handleInputChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email} // Bind the email value to formData.email
          onChange={handleInputChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password} // Bind the password value to formData.password
          onChange={handleInputChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
