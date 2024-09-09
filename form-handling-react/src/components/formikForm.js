import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation schema

const FormikForm = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required
      .required('Username is required'), // Adding required validation for the username field

    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'), // Adding required validation for the email field

    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'), // Adding required validation for the password field
  });

  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form data:', values);
    // Proceed with form submission logic (e.g., API call)
  };

  return (
    <div>
      <h2>Register with Formik</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Username Field */}
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
