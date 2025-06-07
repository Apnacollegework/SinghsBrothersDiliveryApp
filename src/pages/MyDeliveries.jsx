export const MyDeliveries = () => {
  const deliveries = [
    { name: "Ethan Carter", order: "#123456", time: "10:00 AM" },
    { name: "Olivia Bennett", order: "#789012", time: "11:30 AM" },
    { name: "Noah Thompson", order: "#345678", time: "12:45 PM" },
  ];
  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans','Noto_Sans',sans-serif]">
      <div className="flex items-center bg-white p-4 pb-2 justify-between">
        <div className="text-[#181111] flex size-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H40a8..."></path>
          </svg>
        </div>
        <h2 className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">My Deliveries</h2>
      </div>
      <h3 className="text-[#181111] text-lg font-bold px-4 pb-2 pt-4">Today</h3>
      {deliveries.map((item, i) => (
        <div key={i} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-lg bg-[#f4f0f0] size-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M223.68,66.15L135.68,18..."></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#181111] text-base font-medium line-clamp-1">{item.name}</p>
              <p className="text-[#886364] text-sm font-normal line-clamp-2">Order {item.order}</p>
            </div>
          </div>
          <p className="text-[#181111] text-base">{item.time}</p>
        </div>
      ))}
    </div>
  );
};
