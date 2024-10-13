"use client";
// components/dashboard/Page.jsx
import { useState } from "react";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const Page = () => {
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState("");

  const withdrawalLimits = {
    minimum: 10,
    maximum: 1000,
    daily: 2000,
    remainingDaily: 1500,
  };

  const paymentMethods = [
    {
      id: "paypal",
      name: "PayPal",
      icon: "💳",
      processingTime: "2-3 business days",
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: "🏦",
      processingTime: "3-5 business days",
    },
    {
      id: "crypto",
      name: "Cryptocurrency",
      icon: "₿",
      processingTime: "1-2 business days",
    },
  ];

  const accountBalance = 345.5;

  const validateAmount = (value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      return "Please enter a valid amount";
    }
    if (numValue < withdrawalLimits.minimum) {
      return `Minimum withdrawal amount is $${withdrawalLimits.minimum}`;
    }
    if (numValue > withdrawalLimits.maximum) {
      return `Maximum withdrawal amount is $${withdrawalLimits.maximum}`;
    }
    if (numValue > withdrawalLimits.remainingDaily) {
      return `Daily withdrawal limit remaining: $${withdrawalLimits.remainingDaily}`;
    }
    if (numValue > accountBalance) {
      return `Insufficient balance. Available: $${accountBalance}`;
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateAmount(amount);
    if (validationError) {
      setError(validationError);
      return;
    }
    if (!selectedMethod) {
      setError("Please select a payment method");
      return;
    }
    if (!paymentDetails) {
      setError("Please enter payment details");
      return;
    }
    setError("");
    setShowConfirmation(true);
  };

  return (
    <div className="w-full mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Money Withdrawal</h2>
        </div>

        {/* Balance and Limits Info */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Available Balance</p>
            <p className="text-2xl font-bold text-gray-900">
              ${accountBalance}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Daily Limit</p>
            <p className="text-2xl font-bold text-gray-900">
              ${withdrawalLimits.daily}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Remaining Daily</p>
            <p className="text-2xl font-bold text-gray-900">
              ${withdrawalLimits.remainingDaily}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Min-Max Per Withdrawal</p>
            <p className="text-lg font-bold text-gray-900">
              ${withdrawalLimits.minimum}-${withdrawalLimits.maximum}
            </p>
          </div>
        </div>

        {/* Withdrawal Form */}
        {!showConfirmation ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Amount Input */}
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Withdrawal Amount
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Payment Method
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedMethod === method.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-200"
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900">
                          {method.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {method.processingTime}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Details */}
            <div>
              <label
                htmlFor="paymentDetails"
                className="block text-sm font-medium text-gray-700"
              >
                {selectedMethod === "paypal"
                  ? "PayPal Email"
                  : selectedMethod === "bank"
                  ? "Bank Account Details"
                  : selectedMethod === "crypto"
                  ? "Wallet Address"
                  : "Payment Details"}
              </label>
              <textarea
                id="paymentDetails"
                value={paymentDetails}
                onChange={(e) => setPaymentDetails(e.target.value)}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                rows={3}
                placeholder="Enter your payment details..."
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-400"
                    aria-hidden="true"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Request Withdrawal
              </button>
            </div>
          </form>
        ) : (
          // Confirmation Screen
          <div className="p-6 text-center">
            <CheckCircleIcon className="mx-auto h-12 w-12 text-green-400" />
            <h3 className="mt-2 text-xl font-medium text-gray-900">
              Withdrawal Request Submitted
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Your withdrawal request for ${amount} via{" "}
              {paymentMethods.find((m) => m.id === selectedMethod)?.name} has
              been submitted. You will receive a confirmation email shortly.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setAmount("");
                  setSelectedMethod("");
                  setPaymentDetails("");
                }}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Make Another Withdrawal
              </button>
            </div>
          </div>
        )}

        {/* Recent Withdrawals */}
        <div className="border-t border-gray-200">
          <div className="px-6 py-5">
            <h3 className="text-lg font-medium text-gray-900">
              Recent Withdrawals
            </h3>
          </div>
          <div className="bg-gray-50 px-6 py-3">
            <div className="grid grid-cols-4 text-sm font-medium text-gray-500">
              <div>Date</div>
              <div>Amount</div>
              <div>Method</div>
              <div>Status</div>
            </div>
          </div>
          <ul className="divide-y divide-gray-200">
            {[
              {
                date: "2024-10-10",
                amount: 150.0,
                method: "PayPal",
                status: "Processing",
              },
              {
                date: "2024-10-05",
                amount: 75.5,
                method: "Bank Transfer",
                status: "Completed",
              },
              {
                date: "2024-10-01",
                amount: 200.0,
                method: "Cryptocurrency",
                status: "Completed",
              },
            ].map((withdrawal, index) => (
              <li key={index} className="px-6 py-4">
                <div className="grid grid-cols-4 text-sm">
                  <div className="text-gray-900">{withdrawal.date}</div>
                  <div className="text-gray-900">${withdrawal.amount}</div>
                  <div className="text-gray-500">{withdrawal.method}</div>
                  <div>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        withdrawal.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {withdrawal.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
