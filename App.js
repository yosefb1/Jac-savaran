import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState('main');

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <p>[اینجا تایم‌لپس شما قرار می‌گیرد]</p>
      </div>
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">جک سواران | Jac Savaran</h1>
        <p className="mb-6">تجربه‌ای متفاوت از کاور حرفه‌ای خودرو</p>
        <div className="flex gap-4 justify-center">
          <button onClick={() => setStep('booking')} className="bg-red-600 px-4 py-2 rounded">نوبت کاور</button>
          <button onClick={() => setStep('warranty')} className="bg-gray-600 px-4 py-2 rounded">نوبت گارانتی</button>
        </div>
      </div>
    </div>
  );
}

export default App;