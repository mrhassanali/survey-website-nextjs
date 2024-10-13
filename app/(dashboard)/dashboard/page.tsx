"use client";
// components/dashboard/Page.jsx
import { useState } from "react";
import {
  CurrencyDollarIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  // ChevronRightIcon,
} from "@heroicons/react/24/outline";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Page = () => {
  const [dateRange, setDateRange] = useState("week"); // week, month, year

  // Mock data - replace with actual data from your API
  const dashboardData = {
    stats: {
      totalEarnings: 1250.75,
      earningsChange: 12.5,
      surveysCompleted: 48,
      surveysChange: 8.3,
      availableSurveys: 15,
      averageEarnings: 26.06,
      pendingPayments: 125.5,
      referralEarnings: 200.0,
    },
    recentSurveys: [
      {
        id: 1,
        title: "Consumer Electronics Feedback",
        category: "Technology",
        reward: 15.0,
        duration: "15 mins",
        status: "Completed",
        completedAt: "2024-10-10",
      },
      {
        id: 2,
        title: "Food Delivery Services",
        category: "Consumer",
        reward: 12.5,
        duration: "10 mins",
        status: "Completed",
        completedAt: "2024-10-09",
      },
      {
        id: 3,
        title: "Online Shopping Habits",
        category: "E-commerce",
        reward: 20.0,
        duration: "20 mins",
        status: "Completed",
        completedAt: "2024-10-08",
      },
    ],
    earningsData: [
      { date: "Mon", amount: 45 },
      { date: "Tue", amount: 30 },
      { date: "Wed", amount: 60 },
      { date: "Thu", amount: 25 },
      { date: "Fri", amount: 45 },
      { date: "Sat", amount: 35 },
      { date: "Sun", amount: 50 },
    ],
    recentActivity: [
      {
        id: 1,
        type: "survey_completed",
        description: 'Completed "Consumer Electronics Feedback" survey',
        time: "2 hours ago",
        reward: 15.0,
      },
      {
        id: 2,
        type: "referral_signup",
        description: "New referral signup: Sarah Miller",
        time: "5 hours ago",
        reward: 20.0,
      },
      {
        id: 3,
        type: "payment_processed",
        description: "Payment processed successfully",
        time: "1 day ago",
        amount: 150.0,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here&apos;s what&apos;s happening with your surveys and
            earnings.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Total Earnings Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Earnings
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  ${dashboardData.stats.totalEarnings.toFixed(2)}
                </p>
              </div>
              <div
                className={`flex items-center ${
                  dashboardData.stats.earningsChange >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {dashboardData.stats.earningsChange >= 0 ? (
                  <ArrowUpIcon className="h-5 w-5" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5" />
                )}
                <span className="text-sm font-medium ml-1">
                  {Math.abs(dashboardData.stats.earningsChange)}%
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="h-1 bg-gray-100 rounded">
                <div
                  className="h-1 bg-blue-500 rounded"
                  style={{ width: "75%" }}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Monthly target: $2,000
              </p>
            </div>
          </div>

          {/* Surveys Completed Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Surveys Completed
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {dashboardData.stats.surveysCompleted}
                </p>
              </div>
              <div
                className={`flex items-center ${
                  dashboardData.stats.surveysChange >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {dashboardData.stats.surveysChange >= 0 ? (
                  <ArrowUpIcon className="h-5 w-5" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5" />
                )}
                <span className="text-sm font-medium ml-1">
                  {Math.abs(dashboardData.stats.surveysChange)}%
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Average: ${dashboardData.stats.averageEarnings} per survey
            </p>
          </div>

          {/* Available Surveys Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Available Surveys
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {dashboardData.stats.availableSurveys}
                </p>
              </div>
              <span className="px-2.5 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                Live
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Potential earnings: $$
              {(
                dashboardData.stats.availableSurveys *
                dashboardData.stats.averageEarnings
              ).toFixed(2)}
            </p>
          </div>

          {/* Pending Payments Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Pending Payments
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  ${dashboardData.stats.pendingPayments.toFixed(2)}
                </p>
              </div>
              <ClockIcon className="h-6 w-6 text-gray-400" />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Expected within 3-5 business days
            </p>
          </div>
        </div>

        {/* Earnings Chart */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Earnings Overview
              </h2>
              <div className="flex space-x-2">
                {["week", "month", "year"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setDateRange(range)}
                    className={`px-3 py-1 text-sm font-medium rounded-md ${
                      dateRange === range
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {range.charAt(0).toUpperCase() + range.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dashboardData.earningsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#3B82F6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Surveys and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Surveys */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">
                  Recent Surveys
                </h2>
                <a
                  href="/surveys"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  View all
                </a>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {dashboardData.recentSurveys.map((survey) => (
                <div key={survey.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {survey.title}
                      </h3>
                      <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                        <span>{survey.category}</span>
                        <span>•</span>
                        <span>{survey.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        ${survey.reward.toFixed(2)}
                      </p>
                      <span className="mt-1 inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                        {survey.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Recent Activity
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {dashboardData.recentActivity.map((activity) => (
                <div key={activity.id} className="p-6">
                  <div className="flex items-center">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === "survey_completed"
                          ? "bg-green-100"
                          : activity.type === "referral_signup"
                          ? "bg-blue-100"
                          : "bg-yellow-100"
                      }`}
                    >
                      {activity.type === "survey_completed" ? (
                        <ChartBarIcon className="h-5 w-5 text-green-600" />
                      ) : activity.type === "referral_signup" ? (
                        <UserGroupIcon className="h-5 w-5 text-blue-600" />
                      ) : (
                        <CurrencyDollarIcon className="h-5 w-5 text-yellow-600" />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.description}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {activity.time}
                      </p>
                    </div>
                    {activity.reward && (
                      <div className="ml-4">
                        <span className="text-sm font-medium text-green-600">
                          +${activity.reward.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
