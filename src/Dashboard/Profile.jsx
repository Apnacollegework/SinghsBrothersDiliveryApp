import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
  const userData = {
  name: "Mohit Kumar",
  role: "Delivery Partner",
  profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCEeJ-AQiXM2R4-YNYmQjk1H6P5tKzk2L9pDsSi1FxYW4B6Ie1-0x0tlgyod9kqlYwmSsEZLUmXlRjNSJAIC4n9i0MxHiavLERDhkbG7mhBMqXNGhooIQNOdzLz9N7TUyO9cPtoWtlQV12WATKKamFmizHEBWhskH2Y-5WA3_QxMNz-MwFl-ZX5TleqjR7-0xvtpaSEQYyZ6qdsUPjK3bKf3kebGM8r9pdOui1NjZ2w0b9i-bq04EPJPamCu7B1zlUnYPuBEy-sfE",
  personalDetails: {
    name: "Mohit Kumar",
    contactNumber: "+91 8477892115"
  },
  payment: {
    paymentMethod: "Add payment method",
    bankAccount: "Add bank account"
  },
  appPreferences: {
    notifications: "On",  
    language: "English",
    sound: "On"
  }
};


const Profile = () => {
   const navigate = useNavigate();



   const handleLogout = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You will be logged out!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, logout!',
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();  // Clear local storage on confirmation
      console.log('Logged out and localStorage cleared');
      // Optionally redirect to login page or home
      // window.location.href = '/login'; 
    }
  });
};

  const handleNavigation = (section) => {
    console.log(`Navigate to ${section}`);
  };
 return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        {/* Header */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <div
          onClick={() => navigate('/dashboard/home') }
          className="text-[#181111] flex size-12 shrink-0 items-center cursor-pointer">
            <ArrowLeft size={24} />
          </div>
          <h2 className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
            Account
          </h2>
        </div>

        {/* Profile Section */}
        <div className="flex p-4">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{ backgroundImage: `url(${userData.profileImage})` }}
              ></div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                  {userData.name}
                </p>
                <p className="text-[#886364] text-base font-normal leading-normal text-center">
                  {userData.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <h3 className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Personal Details
        </h3>

        <div
          className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-gray-50"
          onClick={() => handleNavigation('name')}
        >
          <div className="flex flex-col justify-center">
            <p className="text-[#181111] text-base font-medium leading-normal line-clamp-1">Name</p>
            <p className="text-[#886364] text-sm font-normal leading-normal line-clamp-2">{userData.personalDetails.name}</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#181111] flex size-7 items-center justify-center">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-gray-50"
          onClick={() => handleNavigation('contact')}
        >
          <div className="flex flex-col justify-center">
            <p className="text-[#181111] text-base font-medium leading-normal line-clamp-1">Contact Number</p>
            <p className="text-[#886364] text-sm font-normal leading-normal line-clamp-2">{userData.personalDetails.contactNumber}</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#181111] flex size-7 items-center justify-center">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <h3 className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Payment
        </h3>

        <div
          className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-gray-50"
          onClick={() => handleNavigation('payment-method')}
        >
          <div className="flex flex-col justify-center">
            <p className="text-[#181111] text-base font-medium leading-normal line-clamp-1">Payment Method</p>
            <p className="text-[#886364] text-sm font-normal leading-normal line-clamp-2">{userData.payment.paymentMethod}</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#181111] flex size-7 items-center justify-center">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-gray-50"
          onClick={() => handleNavigation('bank-account')}
        >
          <div className="flex flex-col justify-center">
            <p className="text-[#181111] text-base font-medium leading-normal line-clamp-1">Bank Account</p>
            <p className="text-[#886364] text-sm font-normal leading-normal line-clamp-2">{userData.payment.bankAccount}</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#181111] flex size-7 items-center justify-center">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        {/* App Preferences Section */}
        <h3 className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          App Preferences
        </h3>

        <div
          className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-gray-50"
          onClick={() => handleNavigation('notifications')}
        >
          <div className="flex flex-col justify-center">
            <p className="text-[#181111] text-base font-medium leading-normal line-clamp-1">Notifications</p>
            <p className="text-[#886364] text-sm font-normal leading-normal line-clamp-2">{userData.appPreferences.notifications}</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#181111] flex size-7 items-center justify-center">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-gray-50"
          onClick={() => handleNavigation('language')}
        >
          <div className="flex flex-col justify-center">
            <p className="text-[#181111] text-base font-medium leading-normal line-clamp-1">Language</p>
            <p className="text-[#886364] text-sm font-normal leading-normal line-clamp-2">{userData.appPreferences.language}</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#181111] flex size-7 items-center justify-center">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-gray-50"
          onClick={() => handleNavigation('sound')}
        >
          <div className="flex flex-col justify-center">
            <p className="text-[#181111] text-base font-medium leading-normal line-clamp-1">Sound</p>
            <p className="text-[#886364] text-sm font-normal leading-normal line-clamp-2">{userData.appPreferences.sound}</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#181111] flex size-7 items-center justify-center">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        {/* Help & Support Section */}
        <h3 className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Help &amp; Support
        </h3>

        <div
          className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between cursor-pointer hover:bg-gray-50"
          onClick={() => handleNavigation('help')}
        >
          <p className="text-[#181111] text-base font-normal leading-normal flex-1 truncate">Help</p>
          <div className="shrink-0">
            <div className="text-[#181111] flex size-7 items-center justify-center">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between cursor-pointer hover:bg-gray-50"
          onClick={() => handleNavigation('support')}
        >
          <p className="text-[#181111] text-base font-normal leading-normal flex-1 truncate">Support</p>
          <div className="shrink-0">
            <div className="text-[#181111] flex size-7 items-center justify-center">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Logout */}
      <div>
        <div className="flex px-4 py-3">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#f4f0f0] text-[#181111] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e8e4e4] transition-colors"
            onClick={handleLogout}
          >
            <span className="truncate">Logout</span>
          </button>
        </div>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

export default Profile;