import React from "react";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Navbar */}
      <div className="bg-white p-5 text-2xl font-bold border-b">Administrator Dashboard</div>

      {/* Tabs */}
      <div className="flex gap-10 bg-white p-4 border-b">
        <button className="pb-2 border-b-2 border-blue-500 text-blue-500 font-medium">
          Analytics
        </button>
        <button className="pb-2">Reports</button>
        <button className="pb-2">Staff</button>
        <button className="pb-2">Inactive Staff</button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Total Revenue</p>
            <p className="text-3xl font-bold">₱10,000</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Active Doctors</p>
            <p className="text-3xl font-bold">2</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Active Secretaries</p>
            <p className="text-3xl font-bold">1</p>
          </div>
        </div>

        {/* Clinic Revenue */}
        <h2 className="mt-10 mb-3 text-xl font-semibold">Clinic Revenue Comparison</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Manila Clinic</p>
            <p className="text-2xl font-bold text-green-600">₱7,200</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500">Cagayan de Oro</p>
            <p className="text-2xl font-bold text-green-600">₱2,800</p>
          </div>
        </div>

        {/* Recent Revenue */}
        <h2 className="mt-10 mb-3 text-xl font-semibold">Recent Revenue</h2>

        <div className="bg-white p-4 rounded-xl shadow flex justify-between mb-3">
          <span>Dr. Jose Mercado</span>
          <span className="text-green-600 font-bold">₱4,000</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex justify-between mb-3">
          <span>Dr. Irene Reyes</span>
          <span className="text-green-600 font-bold">₱3,200</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow flex justify-between mb-3">
          <span>Dr. Maria Cruz</span>
          <span className="text-green-600 font-bold">₱2,800</span>
        </div>
      </div>
    </div>
  );
}
