import React from 'react';

const AvailableOrders = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-['Plus_Jakarta_Sans','Noto_Sans',sans-serif]">
      <header className="flex items-center justify-between p-4 pb-2 bg-white">
        <div className="size-12 text-[#171212]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8..."></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold text-center text-[#171212] flex-1 pr-12">Available Orders</h2>
      </header>

      <div className="p-4 flex flex-col gap-2">
        {[
          { location: 'Coconut Grove', order: '#12345', price: '$25' },
          { location: 'Tropical Treats', order: '#12346', price: '$30' },
        ].map((order, idx) => (
          <div key={idx} className="flex justify-between items-center min-h-[72px] bg-white">
            <div className="flex gap-4 items-center">
              <div className="size-12 rounded-lg bg-[#f4f1f1] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M223.68,66.15L135.68,18..."></path>
                </svg>
              </div>
              <div>
                <p className="text-base font-medium text-[#171212]">{`Pickup: ${order.location}`}</p>
                <p className="text-sm text-[#82686a]">{`Order ${order.order}`}</p>
              </div>
            </div>
            <div className="text-[#171212] text-base">{order.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableOrders;
