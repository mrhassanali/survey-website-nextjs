"use client";
// components/dashboard/Page.jsx
import { useState } from "react";
import {
  ShareIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ClipboardDocumentIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const Page = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("referrals"); // 'referrals' or 'howItWorks'

  const referralStats = {
    totalReferrals: 12,
    activeReferrals: 8,
    pendingReferrals: 4,
    totalEarnings: 240.0,
    referralCode: "JOHN500",
    referralLink: "https://surveysite.com/ref/JOHN500",
    referralBonus: 20, // $ per successful referral
    refereeBonus: 5, // $ bonus for referred user
  };

  const referralHistory = [
    {
      id: 1,
      user: "Sarah Miller",
      date: "2024-10-08",
      status: "Active",
      earnings: 20.0,
    },
    {
      id: 2,
      user: "James Wilson",
      date: "2024-10-07",
      status: "Pending",
      earnings: 0,
    },
    {
      id: 3,
      user: "Emma Davis",
      date: "2024-10-05",
      status: "Active",
      earnings: 20.0,
    },
  ];

  const howItWorksSteps = [
    {
      title: "Share Your Link",
      description:
        "Share your unique referral link with friends via social media, email, or messaging apps.",
      icon: ShareIcon,
    },
    {
      title: "Friends Sign Up",
      description:
        "When your friends sign up using your link, they'll get a $5 bonus after completing their profile.",
      icon: UsersIcon,
    },
    {
      title: "Earn Rewards",
      description:
        "Earn $20 for each friend who completes their first survey. No limit on how much you can earn!",
      icon: CurrencyDollarIcon,
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralStats.referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleShare = async (platform: string) => {
    const text = `Join me on Survey Site and earn money for completing surveys! Use my referral code ${referralStats.referralCode} to get a $${referralStats.refereeBonus} bonus!`;
    const url = referralStats.referralLink;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`
        );
        break;
      case "email":
        window.open(
          `mailto:?subject=Join me on Survey Site&body=${encodeURIComponent(
            text + "\n\n" + url
          )}`
        );
        break;
    }
  };

  return (
    <div className="w-full mx-auto">
      {/* Main Referral Card */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
            <h2 className="text-2xl font-bold text-gray-900">
              Referral Program
            </h2>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab("referrals")}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "referrals"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                My Referrals
              </button>
              <button
                onClick={() => setActiveTab("howItWorks")}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === "howItWorks"
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                How It Works
              </button>
            </div>
          </div>
        </div>

        {activeTab === "referrals" ? (
          <>
            {/* Rewards Info */}
            <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-2">
                  Earn ${referralStats.referralBonus} for every friend you
                  refer!
                </h3>
                <p className="text-blue-100">
                  Your friends will also receive a ${referralStats.refereeBonus}{" "}
                  bonus when they sign up using your referral code.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center">
                  <UsersIcon className="h-6 w-6 text-blue-500" />
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    Total Referrals
                  </span>
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {referralStats.totalReferrals}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckIcon className="h-6 w-6 text-green-500" />
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    Active Referrals
                  </span>
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {referralStats.activeReferrals}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center">
                  <ClipboardDocumentIcon className="h-6 w-6 text-yellow-500" />
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    Pending Referrals
                  </span>
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {referralStats.pendingReferrals}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center">
                  <CurrencyDollarIcon className="h-6 w-6 text-green-500" />
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    Total Earnings
                  </span>
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  ${referralStats.totalEarnings}
                </p>
              </div>
            </div>

            {/* Referral Link Section */}
            <div className="px-6 pb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Share Your Referral Link
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center bg-white rounded-lg border border-gray-300">
                      <input
                        type="text"
                        readOnly
                        value={referralStats.referralLink}
                        className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-sm"
                      />
                      <button
                        onClick={handleCopyLink}
                        className="px-4 py-2 text-blue-600 hover:text-blue-700 focus:outline-none"
                      >
                        {copied ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <ClipboardDocumentIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Referral Code:{" "}
                      <span className="font-medium">
                        {referralStats.referralCode}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Social Sharing Buttons */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Share via
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["twitter", "facebook", "whatsapp", "email"].map(
                      (platform) => (
                        <button
                          key={platform}
                          onClick={() => handleShare(platform)}
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          {/* Platform-specific icon */}
                          <span className="capitalize">{platform}</span>
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Referral History */}
            <div className="border-t border-gray-200">
              <div className="px-6 py-5">
                <h3 className="text-lg font-medium text-gray-900">
                  Referral History
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Earnings
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {referralHistory.map((referral) => (
                      <tr key={referral.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {referral.user}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {referral.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              referral.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {referral.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${referral.earnings.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          // How It Works Content
          <div className="p-6">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {howItWorksSteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                        <step.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-blue-900 mb-2">
                  Important Notes
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-blue-800">
                  <li>
                    Referral bonuses are paid out after your friend completes
                    their first survey
                  </li>
                  <li>There&apos;s no limit to how many friends you can refer</li>
                  <li>
                    Both you and your friend must maintain active accounts
                  </li>
                  <li>
                    Referral earnings can be withdrawn once they reach the
                    minimum withdrawal threshold
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
