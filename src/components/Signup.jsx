import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

const Signup = ({ onSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful signup
    onSignup();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Full name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
          />
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
          />
        </div>
        <div className="relative">
          <input
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full px-4 py-4 pr-12 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
      
      <div className="flex items-start space-x-3">
        <input type="checkbox" className="w-4 h-4 mt-1 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
        <p className="text-sm text-gray-600">
          I agree to the <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Terms of Service</a> and <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">Privacy Policy</a>
        </p>
      </div>
      
      <button
        type="submit"
        className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
      >
        <span>Create Account</span>
        <ArrowRight size={20} />
      </button>
    </form>
  );
};
export default Signup;
