import React from 'react';

const ServicePage = () => {
  return (
    <>
      <div className="flex bg-[url('image11.jpg')] bg-cover bg-center h-90 flex justify-center  ">
        <p className="text-6xl p-4 mt-10 font-semibold   text-white">
          Services and Facilities <br />
        </p>
      </div>
      <div className='mt-10 ml-50 mr-50 '>
        <h1 className='text-5xl text-center font-semibold'>
          Inspiring young minds to develop <br /> a lifelong passion for learning
        </h1>

        <div className='flex flex-row mt-24 gap-2'>
          <div>
            <img src='image8.jpg' className='rounded-3xl w-152' />
            <h4 className='text-3xl text-start font-semibold mt-5 text-blue-500'>GYM Trainers</h4>
            <p>Train hard, stay fit, guided by experts every step.</p>
          </div>
          <div>
            <img src='image7.jpg' className='rounded-3xl w-150' />
            <h4 className='text-3xl text-start font-semibold mt-5 text-blue-500'>Personal Training</h4>
            <p>Personalized workouts, expert guidance, real results—your fitness journey begins.</p>
          </div>
          <div>
            <img src='image6.jpg' className='rounded-3xl w-127' />
            <h4 className='text-3xl text-start font-semibold mt-5 text-blue-500'>Group Fitness Classes</h4>
            <p>Energize together, push limits, achieve goals with group fitness power.</p>
          </div>
        </div>

        <div className='mt-15 text-center'>
          <h1 className='text-6xl font-semibold '><span className='text-blue-500'>Premium</span> Fitness Equipment</h1>
          <p className='mt-2'>
            Experience top-tier training with our premium fitness equipment, designed for strength, endurance and performance. <br />
            Elevate your workouts with cutting-edge machines
          </p>

          <div className='flex flex-row mt-10 gap-2'>
            <div className='text-start '>
              <img src='image22.jpg' className='w-150 rounded-md' />
              <h3 className='mt-5 text-3xl text-blue-500 font-semibold'>Treadmills</h3>
              <p>High-performance treadmills for endurance, speed and ultimate cardio fitness.</p>
            </div>
            <div className='text-start'>
              <img src='image21.jpg' className='rounded-md' />
              <h3 className='mt-5 text-3xl text-blue-500 font-semibold'>Strength Training Gear</h3>
              <p>Premium strength training gear for power, performance and muscle growth.</p>
            </div>
            <div className='text-start'>
              <img src='image18.jpg' className='w-150 rounded-md' />
              <h3 className='mt-5 text-3xl text-blue-500 font-semibold'>Cardio Equipment</h3>
              <p>Advanced cardio equipment for endurance, fat burn and heart health.</p>
            </div>
          </div>

          <div className='mt-15 text-center'>
            <h1 className='text-6xl font-semibold'><span className='text-blue-500'>Weight</span> Training Programs</h1>
            <p className='mt-2'>
              Unlock your potential with our Premium Training Program—personalized coaching, advanced techniques, and elite workouts <br />
              for maximum strength, endurance and transformation. Train smarter, achieve faster.
            </p>
            <div className='flex flex-row mt-10 gap-2'>
              <div className='text-start'>
                <img src='image15.jpg' className='w-150 rounded-md' />
                <h3 className='mt-5 text-3xl text-blue-500 font-semibold'>Strength Building</h3>
                <p>Increase power, endurance and muscle with focused strength-building workouts.</p>
              </div>
              <div className='text-start'>
                <img src='image16.jpg' className='w-150 rounded-md' />
                <h3 className='mt-5 text-3xl text-blue-500 font-semibold'>Functional Workouts</h3>
                <p>Enhance strength, mobility and endurance with dynamic, full-body functional workouts.</p>
              </div>
              <div className='text-start'>
                <img src='image17.jpg' className='w-106 rounded-md' />
                <h3 className='mt-5 text-3xl text-blue-500 font-semibold'>Progressive Resistance Training</h3>
                <p>Gradually increase resistance to build strength, endurance and muscle effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;