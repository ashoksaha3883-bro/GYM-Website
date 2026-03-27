 import React from "react";
import SMICalculator from "./BMICalculator";
import TransForm from "./TransForm";
import Work from "./Work";
import Feedback from "./FeedBack";
import Footer from "./Footer";

const Home = () => {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-500 via-blue-300 to-blue-200 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-20 md:pt-28 pb-10">

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

          
            <div className="text-center md:text-left">

              <p className="inline-block border border-white/30 backdrop-blur-md bg-black/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                🏋️‍♀️ Stronger Every Day
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ">
                Build Your <br className="hidden sm:block" />
                <span className="text-yellow-300">Strongest Body</span> <br />
                Starting Today
              </h1>

              <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl mx-auto md:mx-0">
                Welcome to FitLife, where we are dedicated to transforming your
                fitness journey into a lifestyle. Our state-of-the-art facility
                is equipped with top-of-the-line cardio and strength-training
                machines.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={scrollToNext}
                  className="bg-white hover:bg-blue-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
                >
                  Start Now
                </button>
              </div>

            </div>

            
            <div className="relative flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-10">

              <div className="w-full sm:w-1/2">
                <img
                  src="image1.jpg"
                  alt="Fitness"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-[30rem] object-cover rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-700 animate-float-center"
                />
              </div>

              <div className="w-full sm:w-1/2 sm:mt-10 md:mt-16">
                <img
                  src="image3.jpg"
                  alt="Fitness"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-[30rem] object-cover rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-700 animate-float-side"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      

      <section className="bg-white py-12 shadow-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <p className="text-3xl md:text-4xl font-bold text-blue-600">500+</p>
            <p className="text-gray-600 text-sm md:text-base">Happy Members</p>
          </div>

          <div>
            <p className="text-3xl md:text-4xl font-bold text-blue-600">10+</p>
            <p className="text-gray-600 text-sm md:text-base">Expert Trainers</p>
          </div>

          <div>
            <p className="text-3xl md:text-4xl font-bold text-blue-600">50+</p>
            <p className="text-gray-600 text-sm md:text-base">Weekly Classes</p>
          </div>

          <div>
            <p className="text-3xl md:text-4xl font-bold text-blue-600">24/7</p>
            <p className="text-gray-600 text-sm md:text-base">Access</p>
          </div>

        </div>
      </section>

      <TransForm />
      <Work />
      <SMICalculator />
      <Feedback />
      {/* <Footer /> */}
    </>
  );
};

export default Home;