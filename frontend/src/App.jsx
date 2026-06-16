function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          ATM System
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Secure Banking Solution
        </p>

        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Deposit
          </button>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
            Withdraw
          </button>

          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
            Check Balance
          </button>

          <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700">
            Transaction History
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;