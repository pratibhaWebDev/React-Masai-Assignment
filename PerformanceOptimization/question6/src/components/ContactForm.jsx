import React from 'react';
import useForm from '../hooks/useForm';

const ContactForm = () => {
  const { values, handleChange, resetForm } = useForm({
    name: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
