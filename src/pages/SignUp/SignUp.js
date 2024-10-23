import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tab";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../../ui/dialog";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SuccessIcon from '../../components/common/Icon/Sucess/Sucess';
import FailureIcon from '../../components/common/Icon/Failed/Failed';
import googleIcon from '../../assets/icons/google.png';
import logo1 from '../../assets/images/common/logo1.jpg';

export default function SignUpForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [activeTab, setActiveTab] = useState("job-seeker");
  const [confirmationStatus, setConfirmationStatus] = useState(null); // null, 'success', 'failure'
  const navigate = useNavigate();

  const jobSeekerFields = [
    { name: "fullName", placeholder: "Họ và tên", type: "text" },
    { name: "email", placeholder: "Địa chỉ email", type: "email" },
    { name: "password", placeholder: "Mật khẩu", type: "password" },
  ];

  const employerFields = [
    { name: "companyName", placeholder: "Tên công ty", type: "text" },
    { name: "contactPerson", placeholder: "Người liên hệ", type: "text" },
    { name: "businessEmail", placeholder: "Email doanh nghiệp", type: "email" },
    { name: "password", placeholder: "Mật khẩu", type: "password" },
  ];

  const fields = activeTab === "job-seeker" ? jobSeekerFields : employerFields;

  const handleRegister = (e) => {
    e.preventDefault();
    // Only show modal if signing up via email
    setIsModalOpen(true);
  };

  const handleGoogleSignUp = () => {
    // Handle Google Sign-Up logic here
    console.log('Sign Up with Google');
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    if (confirmationCode === "123456") {
      setConfirmationStatus('success');
    } else {
      setConfirmationStatus('failure');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (confirmationStatus === 'success') {
      navigate('/auth/sign-in'); // Redirect to sign-in page on success
    } else {
      setConfirmationStatus(null); // Reset modal state
    }
  };

  const renderConfirmationStatus = () => {
    return (
      <AnimatePresence mode="wait">
        {confirmationStatus === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <SuccessIcon />
            <h3 className="text-2xl font-semibold text-green-600">Đăng ký thành công!</h3>
            <p className="mt-2 text-sm text-gray-600">Chúc mừng! Bạn đã đăng ký thành công.</p>
            <Button onClick={handleCloseModal} className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white">Đóng</Button>
          </motion.div>
        )}
        {confirmationStatus === 'failure' && (
          <motion.div
            key="failure"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <FailureIcon />
            <h3 className="text-2xl font-semibold text-red-600">Xác nhận thất bại!</h3>
            <p className="mt-2 text-sm text-gray-600">Mã xác nhận không chính xác. Vui lòng thử lại.</p>
            <Button onClick={() => setConfirmationStatus(null)} className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white">Thử lại</Button>
          </motion.div>
        )}
        {confirmationStatus === null && (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleConfirmation}
            className="space-y-4 mt-2"
          >
            <Input
              type="text"
              placeholder="Nhập mã xác nhận"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              Xác nhận
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
        <CardHeader className="border-b border-indigo-300">
          <div className="flex justify-between items-center mb-4">
            <a href="/"><img src={logo1} alt="JobRadar Logo" className="h-20 w-20" /></a>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList className="bg-indigo-50 rounded-md">
                <TabsTrigger value="job-seeker" className={`px-4 py-2 ${activeTab === 'job-seeker' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'}`}>
                  Người tìm việc
                </TabsTrigger>
                <TabsTrigger value="employer" className={`px-4 py-2 ${activeTab === 'employer' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'}`}>
                  Nhà tuyển dụng
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <CardTitle className="text-2xl font-bold text-indigo-700 text-center">
            Đăng kí ngay, việc liền tay
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-4">
            <Button 
              type="button" 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50"
              onClick={handleGoogleSignUp} // Handle Google sign-up without triggering modal
            >
              <img src={googleIcon} className="w-5 h-5" alt="Google Icon" />
              <span>Sign Up with Google</span>
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Or sign up with email
                </span>
              </div>
            </div>
            <div className="space-y-2">
              {fields.map((field) => (
                <Input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
              ))}
            </div>
            <Button onClick={handleRegister} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              Đăng kí
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Đã có tài khoản?{" "}
            <a href="/auth/sign-in" className="font-medium text-indigo-600 hover:text-indigo-500">
              Đăng nhập
            </a>
          </p>
          <p className="mt-4 text-center text-xs text-gray-500">
            By clicking 'Đăng kí', you acknowledge that you have read and accept the{" "}
            <a href="#" className="underline text-indigo-600">Terms of Service</a> and{" "}
            <a href="#" className="underline text-indigo-600">Privacy Policy</a>.
          </p>
        </CardContent>
      </Card>

      <Dialog isOpen={isModalOpen} onClose={handleCloseModal}>
        <DialogContent className="sm:max-w-[425px] bg-white shadow-lg rounded-lg p-6">
          <DialogHeader>
            {confirmationStatus === null && (
              <DialogTitle className="text-lg text-center mb-2 font-semibold text-gray-900">
                Xác nhận đăng ký
              </DialogTitle>
            )}
            {!confirmationStatus && (
              <DialogDescription className="text-sm text-center text-gray-600">
                Vui lòng nhập mã xác nhận đã được gửi đến email của bạn.
              </DialogDescription>
            )}
          </DialogHeader>
          {renderConfirmationStatus()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
