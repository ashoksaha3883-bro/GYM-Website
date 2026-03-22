import React, { useRef, useState } from 'react';


const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-auto object-cover"
        controls={isPlaying}
      />
      {!isPlaying && (
        <div
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition hover:bg-black/50"
        >
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl transform transition group-hover:scale-110">
          
          </div>
        </div>
      )}
    </div>
  );
};

const Work = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-4">
              Ignite Your Inner Fire and Burn <br className="hidden sm:block" />
              <span className="text-blue-600">Through Every Limit</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The clock is ticking, not against you, but for you—each second a precious opportunity to prove that you are still in the fight.
              </p>
              <p>
                Step onto this floor and leave the version of yourself that makes excuses crumpled in a heap by the door. This is not a workout; this is a reckoning—a standing appointment with the raw, untamed power that lives deep in your chest.
              </p>
              <p>
                Feel the weight in your hands? That is the physical manifestation of every doubt, every fear, and every "you can't" you have ever heard.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-6">
              <div>
                <span className="text-3xl font-bold text-blue-600">500+</span>
                <p className="text-sm text-gray-500">Workouts Completed</p>
              </div>
              <div>
                <span className="text-3xl font-bold text-blue-600">1000+</span>
                <p className="text-sm text-gray-500">Happy Members</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <VideoPlayer src="video2.mp4" poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900  mb-4">
              Forge Strength, Discipline, and <br className="hidden sm:block" />
              <span className="text-blue-600">the Unstoppable You</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The iron doesn’t care about your excuses; it waits for you, indifferent and cold, offering a clean slate every single time you wrap your hands around it.
              </p>
              <p>
                This isn't just about moving weight from point A to point B; it's about moving the boundaries of what you thought was possible.
              </p>
              <p>
                Watch the sweat drip; it’s the physical manifestation of your old self leaving your body, making room for something new.
              </p>
            </div>
           
          </div>
          <div>
            <VideoPlayer src="video3.mp4" poster="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;