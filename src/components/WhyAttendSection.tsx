import React from 'react';
import { Settings, User, Award, Laptop, Users } from 'lucide-react';

const WhyAttendSection = () => {
  const reasons = [
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "100% Practical & Hands-On Learning",
      description: "Real-time learning with live project building"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Build Your Portfolio Project for GitHub",
      description: "Create industry-level project for your GitHub"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Participation Certificate for All Attendees",
      description: "Official certificate for all attendees"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Career Mentorship from Industry Expert",
      description: "Get guidance from industry expert who transformed 10,00,000+ careers"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Networking Opportunity with 1000+ Learners",
      description: "Connect with passionate developers and tech enthusiasts"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Attend?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of engineering students in this transformative learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="text-red-500 mb-3">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;