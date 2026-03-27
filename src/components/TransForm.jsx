import React from 'react';

const TransForm = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
  
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 ">
          
          <div className="order-2 md:order-1">
            <h3 className="text-blue-600 font-semibold mb-2">
              Grow your fitness strength
            </h3>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-4">
              Transform Your Body <br className="hidden sm:block" />
              <span className="text-blue-600">Elevate Your Mind</span>
            </h2>

            <p className="text-gray-600 text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque necessitatibus aperiam odio ut fuga doloremque sed.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}image6.jpg`}
              alt="Fitness transformation"
              className="rounded-3xl shadow-2xl w-full max-w-md object-cover hover:scale-105  duration-500"
            />
          </div>

        </div>

        <div className="mt-20 animate-fadeInUp animation-delay-200">

          <div className="text-center md:text-left mb-12">
            <h3 className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
              Why Choose Us?
            </h3>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Many healthy <br className="hidden sm:block" />
              <span className="text-blue-600">benefits for you</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Elite Equipment
              </h4>
              <p className="text-gray-600">
                State-of-the-art machines and free weights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Expert Trainers
              </h4>
              <p className="text-gray-600">
                Certified trainers helping you reach your goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Progress Report
              </h4>
              <p className="text-gray-600">
                Track your progress and stay motivated.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Access
              </h4>
              <p className="text-gray-600">
                Train anytime, day or night.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TransForm;