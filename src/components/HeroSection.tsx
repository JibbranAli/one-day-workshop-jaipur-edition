import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
      {/* Background Collage */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 h-full">
          {/* Workshop Images Collage */}
          <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-red-200 to-red-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg"></div>
          
          <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-lime-200 to-lime-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-rose-200 to-rose-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-violet-200 to-violet-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-sky-200 to-sky-300 rounded-lg"></div>
          
          <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-red-200 to-red-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg"></div>
          
          <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-lime-200 to-lime-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-rose-200 to-rose-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-violet-200 to-violet-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-emerald-200 to-emerald-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg"></div>
          <div className="bg-gradient-to-br from-sky-200 to-sky-300 rounded-lg"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            THE BIGGEST ONE-DAY FREE TECHNICAL HANDS-ON WORKSHOP
          </h1>
          
          <p className="text-xl md:text-2xl text-red-500 font-semibold mb-2">
            JAIPUR EDITION
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-4">
            Learn | Build | Network – All in 1 Day!
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            Hands-on Learning Experience at G D Badaya Auditorium, Jaipur
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
              <Calendar className="w-4 h-4 text-red-500" />
              <span>This Saturday</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
              <Clock className="w-4 h-4 text-red-500" />
              <span>10:00 AM Onwards</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
              <Award className="w-4 h-4 text-red-500" />
              <span>Participation Certificate</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border">
              <Users className="w-4 h-4 text-red-500" />
              <span>Limited to 1000 Participants</span>
            </div>
          </div>

          <button
            onClick={scrollToRegistration}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg"
          >
            Register Now
          </button>
          
          <p className="text-green-600 font-semibold text-lg mt-4 mb-2">
            Absolutely FREE Entry
          </p>
          
          <p className="text-gray-600 text-sm">
            G D Badaya Auditorium, Jaipur
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;