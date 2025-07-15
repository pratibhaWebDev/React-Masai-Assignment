import { useFeedback } from '../context/FeedbackContext';

export default function FeedbackSummary() {
  const { feedback } = useFeedback();

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Feedback Summary</h2>
      <p><strong>Name:</strong> {feedback.name}</p>
      <p><strong>Email:</strong> {feedback.email}</p>
      <p><strong>Rating:</strong> {feedback.rating}</p>
      <p><strong>Comments:</strong> {feedback.comments}</p>
    </div>
  );
}
