import React from "react";

const Hero = () => {
  return (
    <div className="p-4 max-w-[1540px] mx-auto">
      <div className="max-h-[500px] relative ">
        <div className="absolute w-full h-full max-h-[500px] bg-black/30 flex  flex-col justify-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold  text-yellow-500 ml-4">
            The<span className="text-orange-400 font-bold p-2">Best</span>
          </h1>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold  text-yellow-500 ml-5">
            Foods<span className="text-orange-400 font-bold p-2">Delivered</span>
          </h1>
        </div>
        <img className="max-h-[500px] w-full"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="food"
        />
      </div>
    </div>
  );
};

export default Hero;
