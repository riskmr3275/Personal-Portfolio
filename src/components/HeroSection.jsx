import logo from '../assets/Profile.jpeg';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full">
      {/* Left Section */}
      <div className="flex flex-col items-center mt-6 lg:mt-40 lg:w-[50%] w-full">
        <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold text-center text-white tracking-wide w-[70%]">
          <div className="text-white textwh">
            <TypeAnimation
              sequence={[
                'I Am Passionate About Coding',
                1000,
                'I love building innovative solutions',
                1000,
                "Let's build something great together!",
                1000,
                '', // This ensures the last text gets deleted before repeating
              ]}
              cursor={true}
              repeat={Infinity}
              style={{
                whiteSpace: 'pre-line',
                display: 'block',
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </h3>
      
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-between mt-6 lg:mt-0 lg:w-[50%] w-full">
        {/* Profile Picture */}
        <div className="h-[400px] w-[400px] mt-40 border border-black rounded-full overflow-hidden">
          <img src={logo} alt="Profile" className="h-full w-full object-cover" />
        </div>
        <div className="flex justify-center my-10">
          <a
            href="https://drive.google.com/file/d/1K_4pls-J5n2QPkcm_-08tC7XnDiKxEUJ/view?usp=sharing"
            target="_blank"
            className="bg-gradient-to-r text-white from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-2xl">
            View Resume
          </a>
          <a
            href="mailto:risugupta999@gmail.com"
            className="py-3 px-4 mx-3 rounded-md border text-white border-orange-500 text-2xl">
            Hire Me
          </a>
        </div>
        
      </div>
      
    </div>
  );
};

export default HeroSection;
