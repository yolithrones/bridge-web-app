import React, { useState } from 'react';
import { Check } from 'lucide-react';
const Feedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 0,
    subscribe: false
  });
  const [errors, setErrors] = useState<{
    [key: string]: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value,
      type
    } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {
          ...prev
        };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
    // Clear error when rating is selected
    if (errors.rating) {
      setErrors(prev => {
        const newErrors = {
          ...prev
        };
        delete newErrors.rating;
        return newErrors;
      });
    }
  };
  const validateForm = () => {
    const newErrors: {
      [key: string]: string;
    } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
    } else if (formData.feedback.trim().length < 10) {
      newErrors.feedback = 'Feedback must be at least 10 characters';
    }
    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }
    return newErrors;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // In a real app, you would submit the form data to a server here
    console.log('Form submitted:', formData);
    // Show success message
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      feedback: '',
      rating: 0,
      subscribe: false
    });
  };
  return <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Share Your Feedback
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          We value your thoughts and suggestions to help us improve our bridge
          information portal.
        </p>
        {submitted ? <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-4">
              Your feedback has been submitted successfully. We appreciate your
              input!
            </p>
            <button onClick={() => setSubmitted(false)} className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition-colors">
              Submit Another Response
            </button>
          </div> : <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-gray-700 font-medium mb-2">
                Your Feedback
              </label>
              <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} rows={4} className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.feedback ? 'border-red-500' : 'border-gray-300'}`} />
              {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Rate Your Experience
              </label>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map(rating => <button key={rating} type="button" onClick={() => handleRatingClick(rating)} className={`w-10 h-10 rounded-full mx-1 flex items-center justify-center focus:outline-none ${formData.rating >= rating ? 'bg-yellow-400 text-white' : 'bg-gray-200'}`}>
                    {rating}
                  </button>)}
              </div>
              {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <span className="ml-2 text-gray-700">
                  Subscribe to our newsletter for updates about new bridges
                </span>
              </label>
            </div>
            <div className="text-right">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Submit Feedback
              </button>
            </div>
          </form>}
      </div>
    </div>;
};
export default Feedback;