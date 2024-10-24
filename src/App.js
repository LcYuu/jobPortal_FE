import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Header from './components/common/Header/header';
import Home from './pages/Home/Home';
import SignUpForm from './pages/SignUp/signup'
import './global.css';
import SignInForm from "./pages/SignIn/SignIn";
const App = () => {
  const location = useLocation();

  // Ẩn Header nếu người dùng đang ở trang đăng ký và đăng nhập
  const showHeader = location.pathname !== '/sign-up' && location.pathname !== '/sign-in';

  return (
    <>
      {showHeader && <Header />} 
      <Routes>
        <Route path="/auth/sign-up" element={<SignUpForm />} />
        <Route path="/auth/sign-in" element={<SignInForm />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
