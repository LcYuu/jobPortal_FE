import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../ui/button';
import logo from '../../../assets/images/common/logo.jpg';

export default function Header() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/auth/sign-up');
  };
  const handleSignInClick = () => {
    navigate('/auth/sign-in');
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 to-purple-900 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <img className="w-8 h-8 bg-purple-600 rounded-full" src={logo} alt="logo" />
          <a href="/" className="text-xl font-bold text-white">JobRadar</a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" className="text-white hover:text-purple-200">Tìm việc</Button>
            </li>
            <li>
              <Button variant="ghost" className="text-white hover:text-purple-200">Công ty</Button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex space-x-2">
        <Button variant="ghost" className="text-white hover:text-purple-200" onClick={handleSignInClick}>Login</Button>
        <Button className="bg-purple-600 text-white hover:bg-purple-700" onClick={handleSignUpClick}>
          Sign Up
        </Button>
      </div>
    </header>
  );
}