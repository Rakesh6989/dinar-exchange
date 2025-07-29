'use client';

import { Call as CallIcon } from '@mui/icons-material';

export default function FloatingCallWidget() {
  return (
    <div className="fixed bottom-6 right-6 sm:right-10 z-[99999] pointer-events-auto">
      <div className="relative flex items-center justify-center">
        {/* Outer animated border */}
        <div className="absolute z-10 animate-spin-slow border-[2px] border-blue-300 rounded-full h-14 w-14 opacity-50"></div>

        {/* Pulse ring */}
        <div className="absolute z-10 animate-ping h-14 w-14 bg-blue-400 opacity-20 rounded-full blur-sm"></div>

        {/* Actual button */}
        <button
          className="relative z-20 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 pl-5 pr-6 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
          onClick={() => {
            window.open('tel:+61123456789'); // ← Change to your number
          }}
        >
          <CallIcon fontSize="small" />
          Call me
          {/* Optional spark animation */}
          <span className="absolute top-0 right-0 h-2 w-2 bg-white rounded-full animate-ping opacity-70 z-30"></span>
        </button>
      </div>
    </div>
  );
}
