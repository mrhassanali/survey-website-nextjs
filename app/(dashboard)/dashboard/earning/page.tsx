const Page = () => {
  const earnings = {
    totalEarned: 256.50,
    pendingPayment: 45.00,
    completedSurveys: 52,
    averagePerSurvey: 4.93,
    recentEarnings: [
      { date: 'Oct 8', amount: 15.50 },
      { date: 'Oct 7', amount: 12.00 },
      { date: 'Oct 6', amount: 8.50 },
      { date: 'Oct 5', amount: 10.00 },
      { date: 'Oct 4', amount: 9.50 },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Earnings Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Total Earned</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">${earnings.totalEarned}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Pending Payment</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">${earnings.pendingPayment}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Completed Surveys</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{earnings.completedSurveys}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">Average Per Survey</h3>
          <p className="mt-2 text-3xl font-semibold text-gray-900">${earnings.averagePerSurvey}</p>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Earnings</h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {earnings.recentEarnings.map((earning, index) => (
            <li key={index} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{earning.date}</span>
                <span className="text-sm text-gray-500">${earning.amount}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;