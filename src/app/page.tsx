export default function Home() {
  return (
    <div className="bg-orange-500 min-h-screen flex items-center justify-center p-4">
      <section className="w-full max-w-2xl bg-gray-300 rounded-xl shadow-2xl overflow-hidden flex relative">
        <span className="absolute -top-3 left-[183px] w-6 h-6 bg-orange-500 rounded-full"></span>
        <span className="absolute -bottom-3 left-[183px] w-6 h-6 bg-orange-500 rounded-full"></span>
        <span className="absolute top-6 bottom-6 left-[193px] border-l-2 border-dashed border-orange-500"></span>
        <section className="w-48 bg-gray-300 p-6 flex items-center justify-center relative">
          <img
            src="/QR.png"
            alt="QR Code"
            className="w-45 h-45 object-contain"
          />
        </section>
        <section className="flex-1 p-6 relative">
          <section className="flex items-center justify-between mb-6">
            <span>
              <p className="text-sm text-black mb-1">Mumbai,</p>
              <p className="text-sm text-black mb-1">India</p>
              <h2 className="text-4xl font-bold text-gray-800">BOM</h2>
              <p className="text-xs text-gray-500 mt-1">
                Wed, July 27<sup>th</sup>
              </p>
              <p className="text-xs text-gray-500">1:00 AM</p>
            </span>
            <span className="flex items-center px-8">
              <span className="flex space-x-1">
                {Array(8).fill(0).map((_, i) => (
                  <span key={i} className="w-1 h-1 bg-gray-400 rounded-full"></span>
                ))}
              </span>
              <span className="mx-2">
                <svg
                  className="w-6 h-6 text-gray-600 transform rotate-90"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </span>
              <span className="flex space-x-1">
                {Array(8).fill(0).map((_, i) => (
                  <span key={i} className="w-1 h-1 bg-gray-400 rounded-full"></span>
                ))}
              </span>
            </span>
            <span className="text-right">
              <p className="text-sm text-black mb-1">Amsterdam,</p>
              <p className="text-sm text-black mb-1">Netherlands</p>
              <h2 className="text-4xl font-bold text-gray-800">AMS</h2>
              <p className="text-xs text-gray-500 mt-1">
                Thu, July 27<sup>th</sup>
              </p>
              <p className="text-xs text-gray-500">8:30 AM</p>
            </span>
          </section>
          <section className="flex justify-between text-sm">
            <span>
              <p className="text-gray-400 text-xs mb-1">Passenger</p>
              <p className="font-medium text-gray-800 ">Nikita Sharma</p>
            </span>
            <span>
              <p className="text-gray-400 text-xs mb-1">Seat</p>
              <p className="font-medium text-gray-800">4A</p>
            </span>
            <span>
              <p className="text-gray-400 text-xs mb-1">Terminal</p>
              <p className="font-medium text-gray-800">D</p>
            </span>
            <span>
              <p className="text-gray-400 text-xs mb-1">Gate</p>
              <p className="font-medium text-gray-800">32</p>
            </span>
            <span>
              <p className="text-gray-400 text-xs mb-1">Boarding</p>
              <p className="font-medium text-gray-800">12:40 PM</p>
            </span>
          </section>
        </section>
        <section className="w-14 bg-blue-900 text-white flex flex-col items-center relative py-13">
          <span className="transform -rotate-90 whitespace-nowrap mb-4">
            <p className="text-xs font-light">Boarding Pass</p>
          </span>
          <span className="w-3 h-5  bg-yellow-400 rounded-full transform rotate-45 mt-10"></span>
          <span className="absolute bottom-10 transform -rotate-90 whitespace-nowrap">
            <p className="text-xs font-light">JET AIRWAYS</p>
          </span>
        </section>
      </section>
    </div>
  );
}
