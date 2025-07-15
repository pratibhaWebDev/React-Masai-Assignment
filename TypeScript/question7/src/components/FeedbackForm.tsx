// src/components/FeedbackForm.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFeedback } from '../context/FeedbackContext';

export default function FeedbackForm() {
  const { feedback, setFeedback } = useFeedback();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs: any = {};
    if (!feedback.name) errs.name = 'Name required';
    if (!feedback.email) errs.email = 'Email required';
    if (!feedback.rating || feedback.rating < 1 || feedback.rating > 5) errs.rating = 'Rating must be 1–5';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate('/summary');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Feedback Form</h2>
      <input type="text" name="name" placeholder="Name" value={feedback.name} onChange={handleChange} />
      {errors.name && <p className="text-red-500">{errors.name}</p>}
      
      <input type="email" name="email" placeholder="Email" value={feedback.email} onChange={handleChange} />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      
      <input type="number" name="rating" placeholder="Rating (1–5)" value={feedback.rating} onChange={handleChange} />
      {errors.rating && <p className="text-red-500">{errors.rating}</p>}
      
      <textarea name="comments" placeholder="Your comments..." value={feedback.comments} onChange={handleChange} />
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
