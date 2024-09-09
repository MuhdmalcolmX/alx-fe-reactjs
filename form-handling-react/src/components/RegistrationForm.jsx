import React, { useState } from 'react';

const RegistrationForm = () => {
  // Step 1: State management for each form field
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

  // Step 2: Handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Basic form validation
  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.username) {
      errors.username = 'Username is required';
      formIsValid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      formIsValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      formIsValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password should be at least 6 characters';
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  // Step 4: Handle form submission
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
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
