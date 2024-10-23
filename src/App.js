import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Header from './components/common/Header/header';
import Home from './pages/Home/Home';
import SignUpForm from './pages/SignUp/SignUp';
import './global.css';
import SignInForm from "./pages/SignIn/SignIn";
const App = () => {
  const location = useLocation();

  // Ẩn Header nếu người dùng đang ở trang đăng ký và đăng nhập
  const showHeader = location.pathname !== '/sign-up' && location.pathname !== '/sign-in';

  return (
    <>
      {showHeader && <Header />} {/* Chỉ hiển thị Header khi không phải trang đăng ký */}
      <Routes>
        {/* Trang đăng ký và đăng nhập */}
        <Route path="/auth/sign-up" element={<SignUpForm />} />
        <Route path="/auth/sign-in" element={<SignInForm />} />

        {/* Trang chính (Home) */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
