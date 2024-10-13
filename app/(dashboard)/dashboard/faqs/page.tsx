"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Page = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I qualify for surveys?",
      answer:
        "To qualify for surveys, complete your profile thoroughly and accurately. We match you with surveys based on your demographics and interests.",
    },
    {
      question: "How much can I earn per survey?",
      answer:
        "Earnings vary by survey length and complexity, typically ranging from $0.50 to $5 per completed survey.",
    },
    {
      question: "When do I receive my payments?",
      answer:
        "Payments are processed within 3-5 business days after reaching the minimum withdrawal threshold of $10.",
    },
    {
      question: "What if I get disqualified from a survey?",
      answer:
        "If you're disqualified, you'll still receive a small compensation and we'll immediately show you other available surveys.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <ChevronDownIcon
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openFaq === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {openFaq === index && (
              <div className="px-4 py-3 bg-gray-50">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Page;
