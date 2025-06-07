import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Truck, MapPin, Clock, Star } from 'lucide-react';
import Login from './components/Login';
import Signup from './components/Signup';
import { useAuth } from './AuthContext';

// Dummy Dashboard component
function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to your Dashboard!</h1>
      <p className="text-lg">You are now logged in.</p>
    </div>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const { setLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
    navigate('/dashboard/home');
  };

  const toggleForm = () => setIsLogin(!isLogin);

  const features = [
    { icon: Clock, text: "Fast delivery in 30 mins" },
    { icon: MapPin, text: "Track in real-time" },
    { icon: Star, text: "Trusted by 1M+ users" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex">
      {/* Left Panel - Branding & Features */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-500 to-red-600 p-12 flex-col justify-between text-white">
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Truck size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">QuickDeliver</h1>
              <p className="text-orange-100">Fast & Reliable Delivery</p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Your favorite meals,<br />
                delivered in minutes
              </h2>
              <p className="text-xl text-orange-100 leading-relaxed">
                Join thousands of satisfied customers who trust us for fast, reliable delivery service.
              </p>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <feature.icon size={24} className="text-orange-200" />
                  <span className="text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-orange-200">
          <Package size={20} />
          <span className="text-sm">Over 10,000 orders delivered daily</span>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:p-8">
        <div className="w-full max-w-md lg:max-w-md">
          <div className="bg-white lg:rounded-2xl lg:shadow-2xl p-8 lg:border lg:border-gray-100 min-h-screen lg:min-h-0 flex flex-col justify-center">
            {/* Header with Logo */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                  <Truck size={28} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">QuickDeliver</h1>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {isLogin ? 'Welcome back!' : 'Join QuickDeliver'}
              </h2>
              <p className="text-gray-500">
                {isLogin 
                  ? 'Sign in to track your orders and enjoy faster checkout' 
                  : 'Create your account and start ordering your favorites'
                }
              </p>
            </div>

            <div className="mb-8">
              {isLogin 
                ? <Login onLogin={handleLogin} /> 
                : <Signup onSignup={handleLogin} />
              }
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500 bg-white">or</span>
              </div>
            </div>

            <button
              onClick={toggleForm}
              className="w-full py-3 text-center text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"
              }
            </button>

            {/* Social Login Options */}
            <div className="mt-6 space-y-3">
              <button className="w-full py-3 px-4 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;