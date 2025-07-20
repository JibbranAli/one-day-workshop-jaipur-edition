import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, Phone, School, MessageSquare, CheckCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  currentQualification: string;
  collegeUniversity: string;
  city: string;
  motivation: string;
  howDidYouHear: string[];
}

const RegistrationSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      console.log('Form data:', data);
      
      // Google Apps Script deployment URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbw00MapyY7HnvAqOeM3mrQN4kFmAoo5xS4EaU9e9f4XKczXGxfAW3pRVnLj73hkFQddHA/exec';
      
      // Create FormData instead of JSON for better compatibility
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('mobileNumber', data.mobileNumber);
      formData.append('email', data.email);
      formData.append('currentQualification', data.currentQualification);
      formData.append('collegeUniversity', data.collegeUniversity);
      formData.append('city', data.city);
      formData.append('motivation', data.motivation);
      formData.append('howDidYouHear', data.howDidYouHear.join(', '));
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: formData
      });
      
      // Check if response is ok
      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
              <p className="text-gray-700 mb-4">
                Welcome to the workshop! You'll receive a confirmation email soon.
              </p>
              <p className="text-green-600 font-medium">
                See you on Saturday, 26th July 2025! 🎉
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Limited Seats - Only 1000 Participants
          </h2>
          <p className="text-gray-600">
            Register now to secure your spot in this transformative learning experience
          </p>

        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white border rounded-lg p-8 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    {...register('fullName', { required: 'Full name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Mobile Number *
                  </label>
                  <input
                    {...register('mobileNumber', { 
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10-digit mobile number'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder="10-digit mobile number"
                  />
                  {errors.mobileNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Qualification *
                  </label>
                  <select
                    {...register('currentQualification', { required: 'Please select your qualification' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                  >
                    <option value="">Select your qualification</option>
                    <option value="B.Tech (CSE/IT/Other)">B.Tech (CSE/IT/Other)</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="Diploma Student">Diploma Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.currentQualification && (
                    <p className="text-red-500 text-sm mt-1">{errors.currentQualification.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <School className="w-4 h-4 inline mr-2" />
                    College/University Name *
                  </label>
                  <input
                    {...register('collegeUniversity', { required: 'College/University name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder="Enter your college/university name"
                  />
                  {errors.collegeUniversity && (
                    <p className="text-red-500 text-sm mt-1">{errors.collegeUniversity.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    {...register('city', { required: 'City is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    placeholder="Enter your city"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Why do you want to attend this workshop? (Optional but helps filter serious ones)
                </label>
                <textarea
                  {...register('motivation')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none resize-none"
                  placeholder="Share your learning goals and what you hope to achieve..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about this workshop? *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'WhatsApp',
                    'College Group',
                    'Instagram',
                    'Facebook',
                    'Telegram',
                    'From a Friend',
                    'Other'
                  ].map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={option}
                        {...register('howDidYouHear')}
                        className="rounded border-gray-300 text-red-500 focus:ring-red-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.howDidYouHear && (
                  <p className="text-red-500 text-sm mt-1">Please select at least one option</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white py-4 rounded-lg text-lg font-medium transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Register for Free Workshop'}
              </button>

              <p className="text-center text-gray-600 text-sm">
                * Required fields. Your data is secure and will only be used for workshop communication.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;