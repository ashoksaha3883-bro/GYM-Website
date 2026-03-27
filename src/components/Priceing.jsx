import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Required: npm install @emailjs/browser

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('week');
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0); // 0 = Free Trial

  // ================ REPLACE THESE WITH YOUR OWN VALUES ================
  const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY  = 'YOUR_EMAILJS_PUBLIC_KEY';

  const plans = [
    {
      name: 'Free Trial',
      features: ['Full gym access for 7 days', '1 group class', 'Locker access'],
      actionType: 'free',
    },
    {
      name: 'Basic',
      weeklyPrice: 15,
      yearlyPrice: 500,
      features: ['Unlimited gym access', '5 group classes/week', 'Locker & towel'],
      paymentLink: {
        week: 'https://buy.stripe.com/test_xxxxxxxxxxxx', // Replace with your Basic Weekly link
        year: 'https://buy.stripe.com/test_yyyyyyyyyyyy', // Replace with your Basic Yearly link
      },
      actionType: 'paid',
    },
    {
      name: 'Pro',
      weeklyPrice: 25,
      yearlyPrice: 800,
      features: ['Everything in Basic', 'Unlimited classes', 'Personal trainer'],
      paymentLink: {
        week: 'https://buy.stripe.com/test_zzzzzzzzzzzz', // Replace with your Pro Weekly link
        year: 'https://buy.stripe.com/test_wwwwwwwwwwww', // Replace with your Pro Yearly link
      },
      actionType: 'paid',
    },
  ];
  // =====================================================================

  const getPrice = (plan) => (billingPeriod === 'week' ? plan.weeklyPrice : plan.yearlyPrice);
  const getPaymentLink = (plan) => plan.paymentLink?.[billingPeriod];

  const selectedPlan = plans[selectedPlanIndex];

  const handleTopAction = () => {
    if (selectedPlan.actionType === 'paid') {
      window.open(getPaymentLink(selectedPlan), '_blank');
    } else if (selectedPlan.actionType === 'free') {
      const email = prompt('Enter your email to start your 1-week free trial:');
      if (!email) return;

      emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_email: email,
          user_name: 'Gym User',
          plan: 'Free Trial (1 week)',
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => alert('Success! Check your email for confirmation.'))
      .catch((error) => alert('Failed to send email. Please try again.\n' + error.text));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Button */}
      <div className="text-center mb-8">
        <button
          onClick={handleTopAction}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base  rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {selectedPlan.name === 'Free Trial'
            ? 'Start Free Trial'
            : `Get Started – ${selectedPlan.name} (${billingPeriod === 'week' ? 'Weekly' : 'Yearly'})`}
        </button>
        <p className="mt-2 text-sm text-gray-500">
          {selectedPlan.name === 'Free Trial'
            ? 'We’ll send you a confirmation email.'
            : 'You’ll be redirected to Stripe secure checkout.'}
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-10">
        <div className="relative bg-white rounded-lg p-0.5 flex">
          <button
            onClick={() => setBillingPeriod('week')}
            className={`${
              billingPeriod === 'week'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:text-gray-900'
            } relative w-28 rounded-md py-2 text-sm  sm:w-32 sm:text-base transition-colors`}
          >
            Weekly
          </button>
          <button
            onClick={() => setBillingPeriod('year')}
            className={`${
              billingPeriod === 'year'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:text-gray-900'
            } relative w-28 rounded-md py-2 text-sm  sm:w-32 sm:text-base transition-colors`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            onClick={() => setSelectedPlanIndex(index)}
            className={`bg-white rounded-lg shadow-lg overflow-hidden transform  hover:scale-105 cursor-pointer ${
              selectedPlanIndex === index ? 'ring-4 ring-indigo-300' : ''
            }`}
          >
            <div className="px-6 py-8 bg-indigo-700 text-white">
              <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
              {plan.actionType === 'paid' && (
                <div className="mt-4 flex justify-center items-baseline">
                  <span className="text-5xl font-extrabold">${getPrice(plan)}</span>
                  <span className="ml-1 text-xl">/{billingPeriod}</span>
                </div>
              )}
              {plan.actionType === 'free' && (
                <div className="mt-4 flex justify-center items-baseline">
                  <span className="text-5xl font-extrabold">Free</span>
                  <span className="ml-1 text-xl">/1 week</span>
                </div>
              )}
            </div>
            <div className="px-6 py-8">
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {plan.actionType === 'paid' ? (
                  <a
                    href={getPaymentLink(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 border border-transparent  rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 "
                  >
                    Choose {plan.name}
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedPlanIndex(index);
                      handleTopAction();
                    }}
                    className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 "
                  >
                    Start Free Trial
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;