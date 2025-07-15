import React, { useState } from 'react';

type FeedbackData = {
  name: string;
  email: string;
  rating: number;
  feedback: string;
};

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackData>({
    name: '',
    email: '',
    rating: 0,
    feedback: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, rating, feedback } = formData;

    if (!name || !email || !rating || !feedback) {
      alert('Please fill in all fields');
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', rating: 0, feedback: '' });
  };

  return (
    <div className="feedback-form" style={{ maxWidth: 500, margin: 'auto' }}>
      <h2>Customer Feedback</h2>
      {submitted && <p style={{ color: 'green' }}>Thank you for your feedback!</p>}

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" type="text" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label>Rating (1–5):</label>
        <input
          name="rating"
          type="number"
          value={formData.rating}
          onChange={handleChange}
          min={1}
          max={5}
          required
        />

        <label>Feedback:</label>
        <textarea name="feedback" value={formData.feedback} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
