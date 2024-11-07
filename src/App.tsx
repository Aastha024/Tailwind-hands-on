import React from 'react'
import image from '../public/image.png'
const App = () => {
  return (
    <div className="lg:h-screen p-12 flex flex-col gap-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:justify-between items-center h-2/3">
        {/* left side design */}
        <div className="flex flex-col lg:w-[80%] text-left gap-4 lg:pr-7 lg:order-1 order-2">
          <h1 className=" text-4xl sm:text-5xl lg:text-[5vmax]">Create your online videos</h1>
          <p className="text-[2vmax] sm:text-[2.4vmax] lg:text-[1.2vmax]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            inventore maxime in, eius aspernatur exercitationem tenetur!
          </p>
          <button className="bg-black text-white text-lg px-12 py-4 rounded-full w-fit">Get started</button>
        </div>
        {/* right side design */}
        <div className="flex justify-center items-center lg:order-2 order-1">
        <img src={image} alt="image" />
        </div>
      </div>
      {/* 4 cards */}
      <div className="h-1/3 grid justify-center items-center gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className=" bg-red-200 rounded-xl p-6">
          <p className="text-[3.5vmax] sm:text-[3.3vmax] lg:text-[3vmax] text-white">01</p>
          <p className="text-[2.5vmax] sm:text-[2.3vmax] lg:text-[2vmax]">Title</p>
          <p className=" text-[1.5vmax] sm:text-[1.3vmax] lg:text-[1vmax]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            sapiente.
          </p>
        </div>
        <div className=" bg-yellow-200 rounded-xl p-6">
        <p className="text-[3.5vmax] sm:text-[3.3vmax] lg:text-[3vmax] text-white">02</p>
          <p className="text-[2.5vmax] sm:text-[2.3vmax] lg:text-[2vmax]">Title</p>
          <p className=" text-[1.5vmax] sm:text-[1.3vmax] lg:text-[1vmax]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            sapiente.
          </p>
        </div>
        <div className=" bg-green-200 rounded-xl p-6">
        <p className="text-[3.5vmax] sm:text-[3.3vmax] lg:text-[3vmax] text-white">03</p>
          <p className="text-[2.5vmax] sm:text-[2.3vmax] lg:text-[2vmax]">Title</p>
          <p className=" text-[1.5vmax] sm:text-[1.3vmax] lg:text-[1vmax]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            sapiente.
          </p>
        </div>
        <div className=" bg-blue-300 rounded-xl p-6">
        <p className="text-[3.5vmax] sm:text-[3.3vmax] lg:text-[3vmax] text-white">04</p>
          <p className="text-[2.5vmax] sm:text-[2.3vmax] lg:text-[2vmax]">Title</p>
          <p className=" text-[1.5vmax] sm:text-[1.3vmax] lg:text-[1vmax]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            sapiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
