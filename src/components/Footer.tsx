import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Brought to you by:
            </h3>
            <div className="mb-4">
              <h4 className="text-lg font-bold text-red-500 mb-1">
                LinuxWorld Informatics Pvt Ltd
              </h4>
              <p className="text-gray-600">
                Empowering Learners | Building Tech Leaders
              </p>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join 1000+ passionate learners in Jaipur for hands-on technical learning 
              with industry expert Vimal Daga.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@workshop.com"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t pt-6">
            <p className="text-gray-600 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> for India's Tech Learners
            </p>
            <p className="text-gray-500 text-sm mt-2">
              G D Badaya Auditorium, Jaipur | This Saturday, 10:00 AM Onwards
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;