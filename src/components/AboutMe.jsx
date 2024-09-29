import React from 'react';

const AboutMe = () => {
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='flex items-center w-full max-w-6xl mb-4'>
        <hr className='flex-1 border-t-4 border-black' />
        <p className='mx-4 text-6xl font-bold'>About Me</p>
        <hr className='flex-1 border-t-4 border-black' />
      </div>
      <p className="text-2xl text-center text-neutral-500 lg:max-w-7xl mx-auto">
        "Full-stack developer specializing in the MERN stack with strong skills in data structures
        and algorithms. Passionate about building innovative solutions, learning new technologies,
        and solving real-world problems through efficient coding and design."
      </p>
    </div>
  );
}

export default AboutMe;
