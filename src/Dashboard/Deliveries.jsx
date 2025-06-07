import React, { useState } from 'react';

const deliveredOrders = [
  {
    orderId: '12345',
    pickup: 'Coconut Grove',
    dropoff: '123 Beach Avenue, Miami',
    amount: 'Rs.25',
    deliveryTime: '45 mins',
    completedAt: '2024-06-07 14:30',
    customerName: 'Sarah Johnson',
    customerRating: 5,
    distance: '3.2 km',
    items: ['Grilled Chicken Sandwich', 'French Fries', 'Coca Cola'],
    tip: 'Rs.5'
  },
  {
    orderId: '12346',
    pickup: 'Tropical Treats',
    dropoff: '456 Ocean Drive, Miami Beach',
    amount: 'Rs.30',
    deliveryTime: '38 mins',
    completedAt: '2024-06-07 13:15',
    customerName: 'Mike Chen',
    customerRating: 4,
    distance: '2.8 km',
    items: ['Tropical Smoothie', 'Acai Bowl', 'Granola Bar'],
    tip: 'Rs.8'
  },
  {
    orderId: '12347',
    pickup: 'Island Delights',
    dropoff: '789 Palm Street, Coconut Grove',
    amount: 'Rs.22',
    deliveryTime: '52 mins',
    completedAt: '2024-06-07 12:45',
    customerName: 'Emma Rodriguez',
    customerRating: 5,
    distance: '4.1 km',
    items: ['Fish Tacos', 'Coconut Rice', 'Mango Juice'],
    tip: 'Rs.3'
  },
  {
    orderId: '54321',
    pickup: 'Palm Paradise',
    dropoff: '321 Sunset Boulevard, Key Biscayne',
    amount: 'Rs.28',
    deliveryTime: '41 mins',
    completedAt: '2024-06-07 11:20',
    customerName: 'David Thompson',
    customerRating: 4,
    distance: '3.5 km',
    items: ['Paradise Burger', 'Sweet Potato Fries', 'Iced Tea'],
    tip: 'Rs.6'
  },
  {
    orderId: '54322',
    pickup: 'Ocean Breeze Cafe',
    dropoff: '654 Marina Way, Downtown Miami',
    amount: 'Rs.35',
    deliveryTime: '33 mins',
    completedAt: '2024-06-07 10:30',
    customerName: 'Lisa Park',
    customerRating: 5,
    distance: '2.1 km',
    items: ['Seafood Pasta', 'Caesar Salad', 'Lemonade'],
    tip: 'Rs.10'
  },
  {
    orderId: '54323',
    pickup: 'Sunset Grill',
    dropoff: '987 Coral Reef Drive, Coral Gables',
    amount: 'Rs.27',
    deliveryTime: '47 mins',
    completedAt: '2024-06-06 19:45',
    customerName: 'Robert Kim',
    customerRating: 4,
    distance: '3.8 km',
    items: ['BBQ Ribs', 'Coleslaw', 'Root Beer'],
    tip: 'Rs.4'
  }
];

const Deliveries = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterPeriod, setFilterPeriod] = useState('all');

  const totalEarnings = deliveredOrders.reduce((sum, order) => {
    return sum + parseInt(order.amount.replace('Rs.', '')) + parseInt(order.tip.replace('Rs.', ''));
  }, 0);

  const averageRating = deliveredOrders.reduce((sum, order) => sum + order.customerRating, 0) / deliveredOrders.length;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div 
      className="pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-30">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Delivery History</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-700">Rs.{totalEarnings}</div>
              <div className="text-xs text-green-600">Total Earned</div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-blue-700">{deliveredOrders.length}</div>
              <div className="text-xs text-blue-600">Deliveries</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-yellow-700">{averageRating.toFixed(1)}⭐</div>
              <div className="text-xs text-yellow-600">Avg Rating</div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-4">
            {['all', 'today', 'week', 'month'].map((period) => (
              <button
                key={period}
                onClick={() => setFilterPeriod(period)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filterPeriod === period
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery List */}
      <div className="px-4 space-y-3">
        {deliveredOrders.map((order) => (
          <div
            key={order.orderId}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200"
          >
            {/* Order Header */}
            <div 
              className="p-4 cursor-pointer"
              onClick={() => setSelectedOrder(selectedOrder === order.orderId ? null : order.orderId)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Order #{order.orderId}</div>
                    <div className="text-sm text-gray-500">{order.completedAt}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">{order.amount}</div>
                  <div className="text-sm text-gray-500">+ {order.tip} tip</div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">{order.distance}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-600">{order.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(order.customerRating)}
                  </div>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    selectedOrder === order.orderId ? 'rotate-180' : ''
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Expanded Details */}
            {selectedOrder === order.orderId && (
              <div className="border-t border-gray-100 bg-gray-50/50 p-4 space-y-4">
                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{order.customerName}</div>
                    <div className="flex items-center gap-1">
                      {renderStars(order.customerRating)}
                      <span className="text-sm text-gray-500 ml-1">({order.customerRating}.0)</span>
                    </div>
                  </div>
                </div>

                {/* Locations */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Pickup</div>
                      <div className="font-medium text-gray-800">{order.pickup}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Delivery</div>
                      <div className="font-medium text-gray-800">{order.dropoff}</div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <div className="text-sm text-gray-500 mb-2">Order Items</div>
                  <div className="space-y-1">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Earnings Breakdown */}
                <div className="bg-white rounded-lg p-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base Amount:</span>
                    <span className="font-medium">{order.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Customer Tip:</span>
                    <span className="font-medium text-green-600">{order.tip}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total Earned:</span>
                    <span className="text-green-600">
                      Rs.{parseInt(order.amount.replace('Rs.', '')) + parseInt(order.tip.replace('Rs.', ''))}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State (if no deliveries) */}
      {deliveredOrders.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">No Deliveries Yet</h3>
          <p className="text-gray-500">Your completed deliveries will appear here.</p>
        </div>
      )}
    </div>
  );
};

export default Deliveries;