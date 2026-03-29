import React from 'react';

const ServicePage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex bg-[url('image11.jpg')] bg-cover bg-center h-[400px] md:h-[500px] justify-center items-center">
        <p className="text-4xl md:text-7xl p-4 font-semibold text-white text-center">
          Services and Facilities
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Intro Heading */}
        <h1 className="text-3xl md:text-5xl text-center font-semibold leading-tight">
          Inspiring young minds to develop <br className="hidden md:block" /> a lifelong passion for learning
        </h1>

        {/* Section 1: Trainers - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col">
            <img src="image8.jpg" alt="Gym Trainers" className="rounded-3xl w-full h-64 object-cover" />
            <h4 className="text-2xl font-semibold mt-5 text-blue-500">GYM Trainers</h4>
            <p className="text-gray-600">Train hard, stay fit, guided by experts every step.</p>
          </div>
          <div className="flex flex-col">
            <img src="image7.jpg" alt="Personal Training" className="rounded-3xl w-full h-64 object-cover" />
            <h4 className="text-2xl font-semibold mt-5 text-blue-500">Personal Training</h4>
            <p className="text-gray-600">Personalized workouts, expert guidance, real results—your fitness journey begins.</p>
          </div>
          <div className="flex flex-col">
            <img src="image6.jpg" alt="Group Fitness" className="rounded-3xl w-full h-64 object-cover" />
            <h4 className="text-2xl font-semibold mt-5 text-blue-500">Group Fitness Classes</h4>
            <p className="text-gray-600">Energize together, push limits, achieve goals with group fitness power.</p>
          </div>
        </div>

        {/* Section 2: Premium Equipment */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold">
            <span className="text-blue-500">Premium</span> Fitness Equipment
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Experience top-tier training with our premium fitness equipment, designed for strength, endurance, and performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-start">
              <img src="image22.jpg" alt="Treadmills" className="w-full h-60 object-cover rounded-md" />
              <h3 className="mt-4 text-2xl text-blue-500 font-semibold">Treadmills</h3>
              <p className="text-sm">High-performance treadmills for endurance, speed, and ultimate cardio fitness.</p>
            </div>
            <div className="text-start">
              <img src="image21.jpg" alt="Strength Gear" className="w-full h-60 object-cover rounded-md" />
              <h3 className="mt-4 text-2xl text-blue-500 font-semibold">Strength Training Gear</h3>
              <p className="text-sm">Premium strength training gear for power, performance, and muscle growth.</p>
            </div>
            <div className="text-start">
              <img src="image18.jpg" alt="Cardio" className="w-full h-60 object-cover rounded-md" />
              <h3 className="mt-4 text-2xl text-blue-500 font-semibold">Cardio Equipment</h3>
              <p className="text-sm">Advanced cardio equipment for endurance, fat burn, and heart health.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Weight Training */}
        <div className="mt-24 mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold">
            <span className="text-blue-500">Weight</span> Training Programs
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Unlock your potential with our Premium Training Program—personalized coaching and elite workouts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-start">
              <img src="image15.jpg" alt="Strength Building" className="w-full h-60 object-cover rounded-md" />
              <h3 className="mt-4 text-2xl text-blue-500 font-semibold">Strength Building</h3>
              <p className="text-sm">Increase power, endurance, and muscle with focused strength-building workouts.</p>
            </div>
            <div className="text-start">
              <img src="image16.jpg" alt="Functional Workouts" className="w-full h-60 object-cover rounded-md" />
              <h3 className="mt-4 text-2xl text-blue-500 font-semibold">Functional Workouts</h3>
              <p className="text-sm">Enhance strength, mobility, and endurance with dynamic, full-body functional workouts.</p>
            </div>
            <div className="text-start">
              <img src="image17.jpg" alt="Resistance Training" className="w-full h-60 object-cover rounded-md" />
              <h3 className="mt-4 text-2xl text-blue-500 font-semibold">Progressive Resistance</h3>
              <p className="text-sm">Gradually increase resistance to build strength, endurance, and muscle effectively.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;