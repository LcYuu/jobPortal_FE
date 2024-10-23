import { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tab";
import { FaGoogle } from 'react-icons/fa';
import logo from '../../assets/images/common/logo.jpg'; 
import googleIcon from '../../assets/icons/google.png'; 
import logo1 from '../../assets/images/common/logo1.jpg'; 

export default function SignInForm() {
  const [activeTab, setActiveTab] = useState("job-seeker");

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
            Welcome Back, You
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-4">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50">
              <img src={googleIcon} className="w-5 h-5 text-red-600" alt="Google Icon" />
              <span>Login with Google</span>
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Or login with email
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Địa chỉ email"
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
              <Input
                type="password"
                placeholder="Mật khẩu"
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className="text-indigo-600 hover:underline text-sm">
                Quên mật khẩu?
              </a>
            </div>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
              Đăng nhập
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Chưa có tài khoản?{" "}
            <a href="/auth/sign-up" className="font-medium text-indigo-600 hover:text-indigo-500">
              Đăng kí
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
