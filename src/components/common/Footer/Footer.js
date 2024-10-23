import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import các icon từ FontAwesome
import logo from '../../../assets/images/common/logo.jpg';
export default function Footer() {
  const socialIcons = [
    { icon: faFacebookF, link: 'https://facebook.com' },
    { icon: faTwitter, link: 'https://twitter.com' },
    { icon: faInstagram, link: 'https://instagram.com' },
    { icon: faLinkedinIn, link: 'https://linkedin.com' }
  ];

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo}  alt="logo" className="w-8 h-8 bg-purple-600 rounded-full"></img>
              <span className="text-xl font-bold text-white">JobRadar</span>
            </div>
            <p className="text-gray-400 text-sm">
              Nền tảng tuyệt vời dành cho người tìm việc. Tìm
              <br />
              công việc mơ ước của bạn dễ dàng hơn.
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="font-semibold text-white mb-4">About</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Companies</li>
                <li>Pricing</li>
                <li>Terms</li>
                <li>Advice</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Help Docs</li>
                <li>Guide</li>
                <li>Updates</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 JobRadar. All rights reserved.</p>
          <div className="flex space-x-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
