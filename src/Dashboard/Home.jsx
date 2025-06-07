import React, { useState, useEffect } from 'react';

const initialOrders = [
  {
    pickup: 'Coconut Grove',
    orderId: '12345',
    amount: 'Rs.25',
  },
  {
    pickup: 'Tropical Treats',
    orderId: '12346',
    amount: 'Rs.30',
  },
  {
    pickup: 'Island Delights',
    orderId: '12347',
    amount: 'Rs.22',
  },
];

const newOrdersQueue = [
  { pickup: 'Palm Paradise', orderId: '54321', amount: 'Rs.28' },
  { pickup: 'Ocean Breeze Cafe', orderId: '54322', amount: 'Rs.35' },
  { pickup: 'Sunset Grill', orderId: '54323', amount: 'Rs.27' },
  { pickup: 'Beach House Bistro', orderId: '54324', amount: 'Rs.32' },
  { pickup: 'Coastal Kitchen', orderId: '54325', amount: 'Rs.29' },
  { pickup: 'Seaside Snacks', orderId: '54326', amount: 'Rs.24' },
];

const Home = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [showNewOrder, setShowNewOrder] = useState(false);
  const [currentNewOrder, setCurrentNewOrder] = useState(null);
  const [orderIndex, setOrderIndex] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [walletBalance, setWalletBalance] = useState(245.50);

  useEffect(() => {
    if (!isOnline) return;
    
    const interval = setInterval(() => {
      if (!showNewOrder && !isAnimatingOut) {
        const nextOrder = newOrdersQueue[orderIndex % newOrdersQueue.length];
        setCurrentNewOrder(nextOrder);
        setShowNewOrder(true);
        setOrderIndex(prev => prev + 1);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [showNewOrder, isAnimatingOut, orderIndex, isOnline]);

  const handleGetOrder = () => {
    setIsAnimatingOut(true);
    setShowCelebration(true);
    
    // Add the order to the main list and update wallet
    if (currentNewOrder) {
      setOrders(prev => [...prev, currentNewOrder]);
      const orderAmount = parseFloat(currentNewOrder.amount.replace('Rs.', ''));
      setWalletBalance(prev => prev + orderAmount);
    }

    setTimeout(() => {
      setShowNewOrder(false);
      setIsAnimatingOut(false);
      setShowCelebration(false);
      setCurrentNewOrder(null);
    }, 1000);
  };

  const handleDismiss = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setShowNewOrder(false);
      setIsAnimatingOut(false);
      setCurrentNewOrder(null);
    }, 300);
  };

  const toggleOnlineStatus = () => {
    setIsOnline(prev => !prev);
    if (showNewOrder) {
      handleDismiss();
    }
  };

  return (
    <div
      className="relative flex h-[calc(100vh-10vh)] flex-col justify-between bg-gradient-to-br from-gray-50 to-white overflow-hidden pb-16"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      {/* Celebration Animation */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-6xl animate-bounce">🎉</div>
          </div>
          {/* Confetti effect */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-ping animation-delay-200"></div>
          <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-blue-400 rounded-full animate-ping animation-delay-400"></div>
          <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-green-400 rounded-full animate-ping animation-delay-600"></div>
        </div>
      )}

      {/* Header */}
      <div>
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-sm p-4 shadow-sm">
          {/* Menu Icon */}
          <div className="text-gray-800 flex items-center size-12 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
            </svg>
          </div>

         


          {/* Right side controls */}
          <div className="flex items-center gap-3">
            {/* Online/Offline Toggle */}
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isOnline ? 'text-green-600' : 'text-gray-500'}`}>
                {isOnline ? 'Online' : 'Offline'}
              </span>
              <button
                onClick={toggleOnlineStatus}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isOnline 
                    ? 'bg-green-500 focus:ring-green-500' 
                    : 'bg-gray-300 focus:ring-gray-500'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isOnline ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Wallet Button */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM32,64H224V88H32ZM32,192V104H224v88H32Zm136-48a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z" />
              </svg>
              <span className="font-semibold text-sm">₹{walletBalance.toFixed(2)}</span>
            </button>
          </div>
        </div>

        {/* Online/Offline Status Banner */}
        {!isOnline && (
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 text-center">
            <span className="font-medium">You're currently offline - No new orders will be received</span>
          </div>
        )}

        {/* Order List */}
        <div className="space-y-2 px-4 pt-4">

           {/* Title */}
          <h2 className="text-gray-800 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Available Orders ({orders.length})
          </h2>
          {orders.map((order, index) => (
            <div
              key={`${order.orderId}-${index}`}
              className="flex items-center justify-between gap-4 bg-white/90 backdrop-blur-sm px-4 py-4 min-h-[72px] rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="text-gray-700 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 size-12 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M223.68,66.15L135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-gray-800 text-base font-medium line-clamp-1">Pickup: {order.pickup}</p>
                  <p className="text-gray-500 text-sm">Order #{order.orderId}</p>
                </div>
              </div>
              <div className="shrink-0">
                <p className="text-gray-800 text-base font-semibold">{order.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="px-5 pb-5">
        <button className={`flex h-14 w-full items-center justify-center gap-4 rounded-xl px-5 text-base font-bold shadow-lg transition-all duration-200 hover:shadow-xl ${
          isOnline 
            ? 'bg-gradient-to-r from-rose-200 to-pink-200 hover:from-rose-300 hover:to-pink-300 text-gray-800' 
            : 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-600 cursor-not-allowed'
        }`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
          </svg>
          <span>{isOnline ? 'Waiting for New Orders...' : 'Go Online to Receive Orders'}</span>
        </button>
      </div>

      {/* Bottom Drawer (Dynamic) - Only show when online */}
      {showNewOrder && currentNewOrder && isOnline && (
        <div className={`fixed inset-0 z-40 flex flex-col justify-end items-stretch transition-all duration-300 ${
          isAnimatingOut ? 'bg-black/0' : 'bg-black/50'
        }`}>
          <div className={`flex flex-col bg-white rounded-t-3xl shadow-2xl transform transition-all duration-500 ease-out ${
            showNewOrder && !isAnimatingOut 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-full opacity-0'
          }`}>
            {/* Handle */}
            <button 
              className="flex h-8 w-full items-center justify-center"
              onClick={handleDismiss}
            >
              <div className="h-1.5 w-12 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></div>
            </button>
            
            {/* Content */}
            <div className="flex-1 px-6 pb-20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-4 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="white" viewBox="0 0 256 256">
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
                  </svg>
                </div>
                <h1 className="text-gray-800 text-2xl font-bold mb-2">
                  🎉 New Order Alert!
                </h1>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Order ID:</span>
                  <span className="text-gray-800 font-bold">#{currentNewOrder.orderId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Pickup Location:</span>
                  <span className="text-gray-800 font-bold">{currentNewOrder.pickup}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Estimated Payout:</span>
                  <span className="text-green-600 font-bold text-lg">{currentNewOrder.amount}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={handleDismiss}
                  className="flex-1 rounded-xl bg-gray-200 hover:bg-gray-300 px-6 py-4 text-gray-700 font-bold transition-all duration-200"
                >
                  Skip
                </button>
                <button 
                  onClick={handleGetOrder}
                  className="flex-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-8 py-4 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  🚀 Get Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default Home;