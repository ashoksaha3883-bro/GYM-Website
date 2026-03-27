import React, { useState } from 'react';

const defaultFeedbacks = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Member since 2022',
    text: 'Great atmosphere and top-notch equipment. The trainers really care about your progress!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', 
  },
  {
    id: 2,
    name: 'Samantha Lee',
    role: 'Yoga enthusiast',
    text: 'I love the variety of classes. The community is so supportive, I always leave energized.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Mike Chen',
    role: 'Personal training client',
    text: 'After just three months I’ve hit goals I never thought possible. Highly recommend!',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const Feedback = ({ feedbacks = defaultFeedbacks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  
  // if (!feedbacks.length) {
  //   return (
  //     <div className="text-center text-gray-500 py-8">
  //       No feedback available.
  //     </div>
  //   );
  // }

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 py-8">
    
      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="w-full flex-shrink-0 p-6 md:p-8"
            >
            
              {feedback.image && (
                <div className="flex justify-center mb-4">
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
              )}
              
              <p className="text-gray-700 text-lg italic text-center">
                "{feedback.text}"
              </p>
              
              <div className="mt-4 text-center">
                <p className="font-semibold text-gray-900">{feedback.name}</p>
                <p className="text-sm text-gray-500">{feedback.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Previous feedback"
      >
       
      </button>

    
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Next feedback"
      >
       
      </button>


      <div className="flex justify-center mt-4 space-x-2">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full  ${
              index === currentIndex
                ? 'bg-gray-800'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> 
    </div>
  );
};

export default Feedback; 